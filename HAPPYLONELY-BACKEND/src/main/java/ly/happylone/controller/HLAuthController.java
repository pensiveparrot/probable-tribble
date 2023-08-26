package ly.happylone.controller;

import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import ly.happylone.model.HLUser;
import ly.happylone.model.RegisterRequest;
import ly.happylone.service.CustomUserDetailsService;

@Controller
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:4200")
public class HLAuthController {
    @Autowired
    private CustomUserDetailsService customUserDetailsService;

    @GetMapping("/index")
    public String home() {
        return "index";
    }

    @GetMapping("/login")
    public String login() {
        return "login";
    }

    @GetMapping("/register")
    public String showRegistrationForm(Model model) {
        model.addAttribute("registerRequest", new RegisterRequest()); // this line is important
        return "register";
    }

    @PostMapping("/register")
    public String register(@ModelAttribute RegisterRequest regReq, BindingResult bindingResult) throws SQLException {
        if (bindingResult.hasErrors()) {
            return "register"; // Return back to the registration form if there are validation errors
        }

        System.out.println("in register controller");
        HLUser user = customUserDetailsService.register(regReq);

        if (user == null) {

            return "register";
        }

        return "redirect:/login";
    }
    // @GetMapping("/currentUser")
    // public ResponseEntity<HLUser> getCurrentUser() {
    //     Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    //     if (authentication == null || !authentication.isAuthenticated()) {
    //         return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build(); // or another appropriate response
    //     }

    //     Object principal = authentication.getPrincipal();
    //     if (principal instanceof UserDetails) {
    //         UserDetails userDetails = (UserDetails) principal;
    //         String username = userDetails.getUsername();
    //         HLUser user = customUserDetailsService.findHlUserByUsername(username); // Assuming you have this method
    //         return ResponseEntity.ok(user);
    //     }

    //     return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build(); // or another appropriate response
    // }
}
