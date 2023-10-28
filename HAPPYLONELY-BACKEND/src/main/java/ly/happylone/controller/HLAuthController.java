package ly.happylone.controller;

import java.sql.SQLException;
import org.springframework.beans.factory.annotation.Autowired;
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

//use RestController for angular
@Controller
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:4200")
public class HLAuthController {
    @Autowired
    private CustomUserDetailsService customUserDetailsService;

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

        // Redirecting to an external URL after successful registration
        return "redirect:login";
    }

}
