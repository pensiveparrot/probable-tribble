package ly.happylone.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import ly.happylone.model.HLUser;

@Service
public class CustomUserDetailsService implements UserDetailsService {
    @Autowired
    HLUserService hlUserService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        HLUser hlUser = hlUserService.getUserByName(username);
        if (hlUser == null) {
            throw new UsernameNotFoundException("User not found");
        }

        // Convert HLUser to Spring's UserDetails
        return User.builder()
                .username(hlUser.getUsername())
                .password(hlUser.getPassword())
                .roles(hlUser.getRole().name())
                .build();
    }

}
