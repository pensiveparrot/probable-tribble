package ly.happylone.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.*;

import java.io.*;
import java.nio.file.Paths;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/download")
public class DownloadController {

    private static final Logger LOGGER = LoggerFactory.getLogger(DownloadController.class);

    @Autowired
    private ResourceLoader resourceLoader;

    @Value("${script.location:/home/happylonely/script}")
    private String scriptLocation;

    private final Set<String> executedCommands = new HashSet<>();

    @PostMapping
    public ResponseEntity<Resource> download(@RequestBody Map<String, String> payload) {
        String url = payload.get("url");
        String type = payload.get("type");

        if (url == null || type == null) {
            LOGGER.error("Missing required parameters. URL: {}, Type: {}", url, type);
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        try {
            String output = type.equals("music") ? "output.mp3" : "output.mp4";
            String downloadScriptPath = Paths.get(scriptLocation, "download.js").toString();

            // Ensure the script directory exists
            File scriptDirectory = new File(scriptLocation);
            if (!scriptDirectory.exists() && !scriptDirectory.mkdirs()) {
                LOGGER.error("Failed to create script directory at: {}", scriptLocation);
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }

            // Load the download.js script from the classpath
            Resource downloadScriptResource = resourceLoader.getResource("classpath:download.js");
            if (!downloadScriptResource.exists()) {
                LOGGER.error("The download.js script was not found in the classpath");
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }

            // Copy the download.js script to the scriptLocation
            try (InputStream is = downloadScriptResource.getInputStream();
                    OutputStream os = new FileOutputStream(downloadScriptPath)) {
                FileCopyUtils.copy(is, os);
            }

            // Ensure Node.js and npm are installed
            if (!executedCommands.contains("node --version")) {
                executeCommand(null, "node", "--version");
                executedCommands.add("node --version");
            }
            if (!executedCommands.contains("npm --version")) {
                executeCommand(null, "npm", "--version");
                executedCommands.add("npm --version");
            }

            // Step 1: Initialize a Node.js project and install required modules
            if (!executedCommands.contains("npm init -y")) {
                executeCommand(scriptLocation, "npm", "init", "-y");
                executedCommands.add("npm init -y");
            }
            if (!executedCommands.contains("npm install ytdl-core")) {
                executeCommand(scriptLocation, "npm", "install", "ytdl-core");
                executedCommands.add("npm install ytdl-core");
            }

            // Step 2: Execute the download script
            executeCommand(scriptLocation, "node", downloadScriptPath, url, type, output);

            // Load the file as a resource from the script location
            File outputFile = new File(scriptLocation, output);
            Resource resource = new FileSystemResource(outputFile);

            if (!resource.exists()) {
                LOGGER.error("Downloaded file not found at path: {}", outputFile.getAbsolutePath());
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }

            LOGGER.info("File successfully downloaded and found at path: {}", outputFile.getAbsolutePath());
            return new ResponseEntity<>(resource, HttpStatus.OK);
        } catch (IOException | InterruptedException e) {
            LOGGER.error("An error occurred during file download or command execution", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private void executeCommand(String workingDirectory, String... command) throws IOException, InterruptedException {
        ProcessBuilder processBuilder = new ProcessBuilder(command);
        if (workingDirectory != null) {
            processBuilder.directory(new File(workingDirectory));
        }
        Process process = processBuilder.start();
        int exitCode = process.waitFor();
        if (exitCode != 0) {
            String errorMessage = new BufferedReader(new InputStreamReader(process.getErrorStream()))
                    .lines().collect(Collectors.joining("\n"));
            LOGGER.error("Command execution failed with exit code: {}. Error Message: {}", exitCode, errorMessage);
            throw new IOException("Command execution failed: " + errorMessage);
        }
    }
}
