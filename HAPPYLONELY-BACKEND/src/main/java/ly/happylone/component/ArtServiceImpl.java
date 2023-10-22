package ly.happylone.component;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Date;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import org.springframework.web.multipart.MultipartFile;

import ly.happylone.model.Art;
import ly.happylone.service.ArtService;
import org.springframework.beans.factory.annotation.Value;

@Component
public class ArtServiceImpl implements ArtService {
    @Value("${app.art.path}")
    private String artPath;

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
        String sql = "INSERT INTO art (artname, artauthor, dateuploaded, artimagefilepath) VALUES (?, ?, ?, ?)";

        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                System.getenv("PGUSER"), System.getenv("PGPW"));
                PreparedStatement statement = con.prepareStatement(sql)) {
            if (art.getArtImageFilePath() == null || art.getArtImageFilePath().isEmpty()
                    || art.getArtImageFilePath().isBlank()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Art image file path is null");
            } else if (art.getArtName() == null || art.getArtName().isEmpty() || art.getArtName().isBlank()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Art name is null");
            } else if (art.getArtAuthor() == null || art.getArtAuthor().isEmpty() || art.getArtAuthor().isBlank()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Art author is null");
            } else {
                statement.setString(1, art.getArtName());
                statement.setString(2, art.getArtAuthor());
                statement.setDate(3, new java.sql.Date(new Date().getTime()));
                statement.setString(4, art.getArtImageFilePath());

                int rowsInserted = statement.executeUpdate();
                if (rowsInserted > 0) {
                    HttpHeaders headers = new HttpHeaders();
                    headers.setContentType(MediaType.TEXT_PLAIN);
                    String path = art.getArtImageFilePath();
                    System.out.println("Art path: " + path);
                    return new ResponseEntity<>(path, headers, HttpStatus.CREATED);
                } else {
                    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed to add art");
                }
            }

        } catch (SQLException ex) {
            ex.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Database error");
        }
    }
}