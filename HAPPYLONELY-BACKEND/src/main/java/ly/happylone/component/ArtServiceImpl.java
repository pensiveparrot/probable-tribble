package ly.happylone.component;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import java.util.Date;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import ly.happylone.model.Art;
import ly.happylone.service.ArtService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import ly.happylone.service.DatabaseService;

@Component
public class ArtServiceImpl implements ArtService {
    @Value("${app.art.path}")
    private String artPath;

    @Autowired
    private DatabaseService databaseService;

    @Override
    public ResponseEntity<?> uploadFile(MultipartFile file, String artName, String artAuthor) {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        String destinationPath = artPath + fileName;
        try {
            System.out.println("DEST PATH IN UPLOADFILE " + destinationPath);

            Files.copy(file.getInputStream(), Paths.get(destinationPath), StandardCopyOption.REPLACE_EXISTING);
            Art art = new Art(artName, artAuthor, new Date(), destinationPath);
            System.out.println("ART IN UPLOADFILE " + art);
            return addArt(art);
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to move uploaded file");
        }
    }

    @Override
    public ResponseEntity<?> addArt(Art art) {
        try {
            return databaseService.addArt(art);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to add art");
        }
    }
}