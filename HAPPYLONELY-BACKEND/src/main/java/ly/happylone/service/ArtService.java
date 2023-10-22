package ly.happylone.service;

import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import ly.happylone.model.Art;

public interface ArtService {
    ResponseEntity<?> addArt(Art art);

    ResponseEntity<?> uploadFile(MultipartFile file, String artName, String artAuthor);

}
