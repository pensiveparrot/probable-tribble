package ly.happylone.controller;

import java.sql.SQLException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ly.happylone.model.HLUser;
import ly.happylone.service.HLUserService;

@RequestMapping("/api/user")
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HLUserController {

    // @Autowired
    // private DataSource dataSource;
    private final HLUserService hlUserService;

    @Autowired
    public HLUserController(HLUserService hlUserService) {
        this.hlUserService = hlUserService;
    }

    @GetMapping("/getUserById/{id}")
    public HLUser getUserById(@PathVariable Long id) throws SQLException {
        return hlUserService.getUserById(id);
    }

    // @PostMapping("/register")
    // public ResponseEntity<?> register(@RequestBody RegistrationForm form) {
    // // Validate input and save user in DB
    // try (Connection connection = dataSource.getConnection();
    // PreparedStatement statement = connection.prepareStatement("INSERT INTO hluser
    // (email, username, password) VALUES (?, ?, ?)")) {
    // statement.setString(1, form.getEmail());
    // statement.setString(2, form.getUsername());
    // statement.setString(3, passwordEncoder.encode(form.getPassword()));
    // statement.executeUpdate();
    // } catch (SQLException e) {
    // throw new RuntimeException(e);
    // }

    // return ResponseEntity.ok("User registered successfully!");
    // }

}
