package ly.happylone.controller;

import java.sql.SQLException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import ly.happylone.model.HLRole;
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
        System.out.println("USER IN GETUSERBYID CONTROLLER --> " + id);
        HLUser user = hlUserService.getUserById(id);
        return new HLUserResponse(user);

    }

    @GetMapping("/getUserRole")
    public int getUserByRole() throws SQLException {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        return hlUserService.getUserRole(username);
    }

    @PostMapping("/changeEmail")
    public ResponseEntity<HLUser> changeEmail(@RequestBody HLUser user) throws SQLException {
        System.out.println("USER IN CHANGEEMAIL CONTROLLER --> " + user);
        return hlUserService.changeEmail(user);
    }

    @GetMapping("/getUserByUsername")
    public ResponseEntity<HLUserResponse> getUserByUsername() throws SQLException {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        System.out.println("USERNAME IN GETUSERBYUSERNAME CONTROLLER --> " + username);
        return hlUserService.getUserByUsernameMin(username);

    }

    @PostMapping("/editUser")
    public ResponseEntity<HLUserResponse> editUser(@RequestBody HLUserResponse user) throws SQLException {
        System.out.println("USER IN EDITUSER CONTROLLER --> " + user);
        return hlUserService.editUser(user);
    }

    @RequestMapping(value = "/deleteUser/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Void> deleteUser(@PathVariable("id") Long id) throws SQLException {
        hlUserService.deleteUser(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @RequestMapping(value = "/banUser/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Void> banUser(@PathVariable("id") Long id) throws SQLException {
        hlUserService.banUser(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @RequestMapping(value = "/unbanUser/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Void> unbanUser(@PathVariable("hluser") HLUser user) throws SQLException {
        hlUserService.unbanUser(user);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // Guest, Banned, Standard, VIP, Moderator, Admin, Owner;
    @RequestMapping(value = "/changeRole/{id}/{role}", method = RequestMethod.PUT)
    public ResponseEntity<Void> changeRole(@PathVariable("id") Long id, @PathVariable("role") int role,
            @PathVariable String event) throws SQLException {
        HLUser user = hlUserService.getUserById(id);
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        HLUser currentUser = hlUserService.getUserByUsername(username);
        boolean isPromoteOrDemote = event.equals("promote") || event.equals("demote");

        boolean moderatorUser = currentUser.getRole().ordinal() > HLRole.VIP.ordinal();
        boolean isRoleChangeADemotion = role < user.getRole().ordinal();
        boolean isRoleChangeAPromotion = role > user.getRole().ordinal();
        // ensures that the role the user is changing to is permissible for the current
        // user to execute. For example, disallow Moderator from promoting a user to
        // Admin.
        boolean canChangeRole = role < currentUser.getRole().ordinal();

        if (moderatorUser && isPromoteOrDemote) {
            if (isRoleChangeAPromotion && canChangeRole) {
                user.setRole(HLRole.values()[role]);
                hlUserService.changeRole(user);
                return new ResponseEntity<>(HttpStatus.OK);
            }
            if (isRoleChangeADemotion && canChangeRole) {
                user.setRole(HLRole.values()[role]);
                hlUserService.changeRole(user);
                return new ResponseEntity<>(HttpStatus.OK);
            }
        }

        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);

    }

    @PostMapping("/changeUsername")
    public ResponseEntity<HLUser> changeUsername(@RequestBody HLUser user) throws SQLException {
        System.out.println("USER IN CHANGEUSERNAME CONTROLLER --> " + user);
        if (hlUserService.isProfaneUsername(user.getUsername())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
        return hlUserService.changeUsername(user);
    }

}
