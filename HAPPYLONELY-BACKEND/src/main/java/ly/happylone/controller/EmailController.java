package ly.happylone.controller;

import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ly.happylone.model.EmailRequest;
import ly.happylone.service.DatabaseService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/email")
public class EmailController {
    @Autowired
    private DatabaseService databaseService;

    @PostMapping("/sendEmail")
    public ResponseEntity<?> sendEmail(@RequestBody EmailRequest emailRequest) throws SQLException {
        // Validate the email
        return databaseService.sendEmail(emailRequest);
    }

    @GetMapping("/getEmails")
    public ResponseEntity<?> getEmails() throws SQLException {
        return databaseService.getEmails();

    }

}