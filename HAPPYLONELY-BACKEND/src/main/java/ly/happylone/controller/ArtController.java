package ly.happylone.controller;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import ly.happylone.model.Art;
import ly.happylone.service.ArtService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/art")
public class ArtController {
    @Autowired
    private ArtService artService;
    @Value("${app.art.path}")
    private String artPath;

    @GetMapping("/{filename:.+}")
    public ResponseEntity<Resource> serveArtwork(@PathVariable String filename) {
        Path filePath = Paths.get(artPath, filename);
        Resource resource = new FileSystemResource(filePath);

        if (resource.exists() && resource.isReadable()) {
            return ResponseEntity.ok().body(resource);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/addArt")
    public ResponseEntity<?> addArt(@RequestBody Art art) {

        return artService.addArt(art);
    }

    @PostMapping("/uploadArt")
    public ResponseEntity<?> uploadFile(@RequestParam("file") MultipartFile file,
            @RequestParam("artName") String artName,
            @RequestParam("artAuthor") String artAuthor) {
        if (!isValidImageMagicNumber(file)) {
            return ResponseEntity.badRequest().body("Invalid file type.");
        }

        return artService.uploadFile(file, artName, artAuthor);
    }

    private boolean isValidImageMagicNumber(MultipartFile file) {
        try {
            byte[] bytes = file.getBytes();

            // Checking magic number for JPG
            if (bytes.length > 2 && bytes[0] == (byte) 0xFF && bytes[1] == (byte) 0xD8) {
                return true;
            }

            // Checking magic number for GIF
            if (bytes.length > 3 && new String(bytes, 0, 3).equals("GIF")) {
                return true;
            }

            // Checking magic number for PNG
            if (bytes.length > 3 && bytes[0] == (byte) 0x89 && bytes[1] == 0x50 && bytes[2] == 0x4E
                    && bytes[3] == 0x47) {
                return true;
            }

        } catch (IOException e) {
            e.printStackTrace();
            return false;
        }

        return false;
    }

}
