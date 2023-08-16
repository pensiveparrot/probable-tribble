package ly.happylone.controller;

import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ly.happylone.model.HLUser;
import ly.happylone.service.HLUserService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/auth")
public class RegisterController {

    @Autowired
    private HLUserService userService; // Service to handle user-related actions

    @GetMapping("/register")
    public String showRegistrationForm(Model model) {
        model.addAttribute("user", new HLUser());
        return "registration";
    }

    @PostMapping("/register")
    public String registerUserAccount(@ModelAttribute("user") @Valid HLUser userDto, BindingResult result) throws SQLException {
        if (result.hasErrors()) {
            return "registration";
        }

        userService.register(userDto);
        return "redirect:/registrationSuccess";
    }
}
