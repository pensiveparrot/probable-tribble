package ly.happylone.controller;

import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ly.happylone.model.HLUser;
import ly.happylone.service.HLUserService;
@RequestMapping("/api/user")
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HLUserController {
 
    @Autowired
private    HLUserService HLuserService;
@GetMapping("/getUserById/{id}")
public    HLUser getUserById(@PathVariable Long id) throws SQLException {
       return HLuserService.getUserById(id);
    }
// @PostMapping("/login")
// public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) throws SQLException, UsernameNotFoundException {
//     HLUser user = HLuserService.login(loginRequest.getUsername(), loginRequest.getPassword());
//         if (user == null) {
//             return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
//         }
//             return ResponseEntity.ok(user);
//     }

}

