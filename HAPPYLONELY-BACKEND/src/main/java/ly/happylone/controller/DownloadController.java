package ly.happylone.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.ContentDisposition;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Async;
import org.springframework.web.bind.annotation.*;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Map;
import java.util.concurrent.CompletableFuture;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/youtube-dl")
public class DownloadController {

    private static final Logger LOGGER = LoggerFactory.getLogger(DownloadController.class);

    @Value("${script.location:/home/happylonely/script}")
    private String scriptLocation;

    @Async
    @PostMapping("/download")
    public CompletableFuture<ResponseEntity<byte[]>> download(@RequestBody Map<String, String> payload) {
        String url = payload.get("url");
        String type = payload.get("type");

        if (!isValidYouTubeUrl(url) || (!"music".equals(type) && !"video".equals(type))) {
            LOGGER.error("Invalid parameters. URL: {}, Type: {}", url, type);
            return CompletableFuture.completedFuture(new ResponseEntity<>(HttpStatus.BAD_REQUEST));
        }

        try {
            String ytDlpPath = Paths.get(scriptLocation, "yt-dlp").toString();
            File scriptDirectory = new File(scriptLocation);
            if (!scriptDirectory.exists() && !scriptDirectory.mkdirs()) {
                LOGGER.error("Failed to create script directory at: {}", scriptLocation);
                return CompletableFuture.completedFuture(new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR));
            }

            String outputFileName = sanitizeFileName(
                    "downloaded_" + System.currentTimeMillis() + (type.equals("music") ? ".mp3" : ".mp4"));
            String outputPath = Paths.get(scriptLocation, outputFileName).toString();

            String[] command = buildYtDlpCommand(ytDlpPath, url, type, outputPath);
            String output = executeCommand(scriptLocation, command);

            File outputFile = new File(outputPath);
            Resource resource = new FileSystemResource(outputFile);

            if (!resource.exists()) {
                LOGGER.error("Downloaded file not found at path: {}", outputFile.getAbsolutePath());
                return CompletableFuture.completedFuture(new ResponseEntity<>(HttpStatus.NOT_FOUND));
            }

            byte[] fileContent = Files.readAllBytes(outputFile.toPath());

            LOGGER.info("File successfully downloaded and found at path: {}", outputFile.getAbsolutePath());
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(
                    type.equals("music") ? MediaType.valueOf("audio/mpeg") : MediaType.valueOf("video/mp4"));
            ContentDisposition contentDisposition = ContentDisposition.builder("attachment")
                    .filename(outputFile.getName()).build();
            headers.setContentDisposition(contentDisposition);
            return CompletableFuture.completedFuture(new ResponseEntity<>(fileContent, headers, HttpStatus.OK));
        } catch (IOException | InterruptedException e) {
            LOGGER.error("An error occurred during file download or command execution", e);
            return CompletableFuture.completedFuture(new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR));
        }
    }

    private boolean isValidYouTubeUrl(String url) {
        String youtubeRegex = "(http(s)?:\\/\\/)?((w|m){1,3}.)?youtu(be|.be)?(.com)?\\/.*";
        return url != null && url.matches(youtubeRegex);
    }

    private String[] buildYtDlpCommand(String ytDlpPath, String url, String type, String outputPath) {
        if ("music".equals(type)) {
            return new String[] { ytDlpPath, "-x", "--audio-format", "mp3", "-o", outputPath, url };
        } else {
            return new String[] { ytDlpPath, "-f", "bestvideo+bestaudio", "--merge-output-format", "mp4", "-o",
                    outputPath, url };
        }
    }

    private String executeCommand(String workingDirectory, String... command) throws IOException, InterruptedException {
        LOGGER.info("Executing command: {} in directory: {}", String.join(" ", command), workingDirectory);
        ProcessBuilder processBuilder = new ProcessBuilder(command);
        if (workingDirectory != null) {
            processBuilder.directory(new File(workingDirectory));
        }
        processBuilder.redirectErrorStream(true); // Merge stdout and stderr
        Process process = processBuilder.start();

        // Capture output and error streams
        try (BufferedReader outputReader = new BufferedReader(new InputStreamReader(process.getInputStream()))) {
            String output = outputReader.lines().collect(Collectors.joining("\n"));

            int exitCode = process.waitFor();
            if (exitCode != 0) {
                LOGGER.error("Command execution failed with exit code: {}. Output: {}", exitCode, output);
                throw new IOException("Command execution failed: " + output);
            }

            LOGGER.info("Command executed successfully. Output: {}", output);
            return output;
        }
    }

    private String sanitizeFileName(String input) {
        return input.replaceAll("[^a-zA-Z0-9-_\\.]", "_");
    }
}
