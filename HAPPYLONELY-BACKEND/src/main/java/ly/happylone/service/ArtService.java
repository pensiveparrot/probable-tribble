package ly.happylone.service;

import org.springframework.http.ResponseEntity;
import ly.happylone.model.Art;

public interface ArtService {
    ResponseEntity<?> addArt(Art art);

    ResponseEntity<?> uploadFile(String base64Image, String artName, String artAuthor);

}
