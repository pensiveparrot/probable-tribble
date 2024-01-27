package ly.happylone.component;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.Date;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import io.micrometer.common.lang.NonNull;
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
    public ResponseEntity<?> uploadFile(@NonNull String base64Image, String artName, String artAuthor) {
        if (base64Image == null || base64Image.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("File cannot be null");
        }
        if (artName == null || artName.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Art name cannot be null or empty");
        }
        if (artAuthor == null || artAuthor.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Art author cannot be null or empty");
        }

        String fileName = artName + "_" + artAuthor + ".jpg"; // You may need to adjust this based on your requirements
        String destinationPath = artPath + fileName;
        try {
            System.out.println("DEST PATH IN UPLOADFILE " + destinationPath);

            // Decode the Base64 string and write the data to the file
            byte[] decodedBytes = Base64.getDecoder().decode(base64Image);
            Path path = Paths.get(destinationPath);
            Files.write(path, decodedBytes);

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