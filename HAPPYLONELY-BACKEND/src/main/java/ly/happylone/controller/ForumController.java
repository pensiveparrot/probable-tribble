package ly.happylone.controller;

import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ly.happylone.model.HLUser;
import ly.happylone.model.Message;
import ly.happylone.service.DatabaseService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/forum")
public class ForumController {
    @Autowired
    private DatabaseService databaseService;

    @PostMapping("/addPost")
    public ResponseEntity<?> addPost(@RequestBody Message message) throws SQLException {
        try {
            return databaseService.addPost(message);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to add post");
        }
    }

    @PostMapping("/addThread")
    public ResponseEntity<?> addThread(@RequestBody Message message) {
        try {
            return databaseService.addThread(message);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to add thread");
        }
    }

    @GetMapping("/getThreadById/{id}")
    public ResponseEntity<?> getThreadById(@PathVariable Long id) {
        try {
            return databaseService.getThreadById(id);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to get thread");
        }
    }

    @PostMapping("/addProfileComment")
    public ResponseEntity<?> addProfileComment(@RequestBody Message message) {
        try {
            return databaseService.addProfileComment(message);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to add profile comment");
        }
    }

    @PostMapping("/addCredits/{credits}")
    public ResponseEntity<?> addCredits(HLUser user, @PathVariable int credits) {
        try {
            if (credits < 0) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Cannot add negative credits");
            }
            return databaseService.addCredits(user, credits);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to add credits");
        }
    }

}
