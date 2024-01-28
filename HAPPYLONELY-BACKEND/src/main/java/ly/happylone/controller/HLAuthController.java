package ly.happylone.controller;

import java.sql.SQLException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import ly.happylone.model.LoginRequest;
import ly.happylone.model.RegisterRequest;
import ly.happylone.service.DatabaseService;

//use RestController for angular
@Controller
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:4200")
public class HLAuthController {

    @Autowired
    private DatabaseService databaseService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest, HttpServletRequest request,
            HttpServletResponse response)
            throws SQLException {
        try {
            return databaseService.login(loginRequest);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed to login");
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest registerRequest) throws SQLException {
        try {
            return databaseService.register(registerRequest);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed to register");
        }
    }

}
