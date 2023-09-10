package ly.happylone.controller;

import java.sql.SQLException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ly.happylone.model.HLUser;
import ly.happylone.model.HLUserResponse;
import ly.happylone.service.HLUserService;

@RequestMapping("/api/user")
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HLUserController {

    private final HLUserService hlUserService;

    @Autowired
    public HLUserController(HLUserService hlUserService) {
        this.hlUserService = hlUserService;
    }

    @GetMapping("/getUserById/{id}")
    public HLUserResponse getUserById(@PathVariable Long id) throws SQLException {
        HLUser user = hlUserService.getUserById(id);
        return new HLUserResponse(user);

    }

    @GetMapping("/getUserRole")
    public int getUserByRole() throws SQLException {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        return hlUserService.getUserRole(username);
    }

    @GetMapping("/getUserByUsername")
    public ResponseEntity<HLUserResponse> getUserByUsername() throws SQLException {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        System.out.println("USERNAME --> " + username);
        return hlUserService.getUserByUsernameMin(username);

    }

}
