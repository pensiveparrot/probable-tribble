package ly.happylone.service;

import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import ly.happylone.model.HLRole;
import ly.happylone.model.HLUser;
import ly.happylone.model.RegisterRequest;

@Service
public class CustomUserDetailsService implements UserDetailsService {
    @Autowired
    HLUserService hlUserService;
    private PasswordEncoder passwordEncoder;

    @Autowired
    public CustomUserDetailsService(@Lazy PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    public HLUser findHlUserByUsername(String username) {
        return hlUserService.getUserByName(username);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        HLUser hlUser = hlUserService.getUserByName(username);
        if (hlUser == null) {
            throw new UsernameNotFoundException("User not found");
        }

        hlUser.setLastlogindate(new Date(System.currentTimeMillis()));
        hlUser.setUserloggedin(true);
        return User.builder()
                .username(hlUser.getUsername())
                .password(hlUser.getPassword())
                .roles(hlUser.getRole().name())
                .accountLocked(hlUser.getUnbandate() != null)
                .build();
    }

    public HLUser register(RegisterRequest registerRequest) throws SQLException {
        String sql = "insert into hluser (email, username, password, registerdate, lastlogindate, unbandate, statusmsg, profileimg, userloggedin, role) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        System.out.println("in register service");
        boolean userExists = hlUserService.userExists(registerRequest.getUsername().trim());
        System.out.println("Does user exist? " + userExists);
        if (!userExists) {
            HLUser hlUser = new HLUser();

            try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                    System.getenv("PGUSER"), System.getenv("PGPW"))) {
                PreparedStatement statement = con.prepareStatement(sql);
                statement.setString(1, registerRequest.getEmail());
                statement.setString(2, registerRequest.getUsername());
                statement.setString(3, passwordEncoder.encode(registerRequest.getPassword()));
                statement.setDate(4, new Date(System.currentTimeMillis()));
                statement.setDate(5, new Date(System.currentTimeMillis()));
                statement.setDate(6, null);
                statement.setString(7, "I'm new here!");
                statement.setString(8, "https://i.imgur.com/mCHMpLT.png");
                statement.setBoolean(9, true);
                statement.setInt(10, HLRole.Standard.ordinal());

                int rowsUpdated = statement.executeUpdate();
                if (rowsUpdated > 0) {
                    System.out.println("User added successfully");
                    return hlUser;
                } else {
                    System.out.println("User not added");
                    return null;
                }
            } catch (Exception e) {
                System.out.println("Exception while adding user: " + e.getMessage());
                e.printStackTrace();
                return null;
            }
        } else {
            System.out.println("User already exists");
            return null;
        }
    }

}
