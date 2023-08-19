package ly.happylone.component;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;

import ly.happylone.model.HLUser;
import ly.happylone.service.HLUserAuthService;
import ly.happylone.service.HLUserService;

public class HLUserAuthServiceImpl implements HLUserAuthService {
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private HLUserService hlUserService;
     @Override
    public ResponseEntity<HLUser> logout(HLUser user) throws SQLException {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'logout'");
    }


    @Override
    public ResponseEntity<HLUser> register(HLUser user) throws SQLException {
        String sql = "insert into hluser (email, username, password, registerdate, lastlogindate, unbandate, statusmsg, profileimg, userloggedin, role) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        if(hlUserService.getUserByName(user.getUsername())==null)
        {
         
        
        
        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely", System.getenv("PGUSER"), System.getenv("PGPW"))) {
            PreparedStatement statement = con.prepareStatement(sql);
            statement.setString(1, user.getEmail());
            statement.setString(2, user.getUsername());
            statement.setString(3, passwordEncoder.encode(user.getPassword()));
            statement.setDate(4, user.getRegisterdate());
            statement.setDate(5, user.getLastlogindate());
            statement.setDate(6, user.getUnbandate());
            statement.setString(7, user.getStatusmsg());
            statement.setString(8, user.getProfileimg());
            statement.setBoolean(9, user.isUserloggedin());
            statement.setInt(10, user.getRole().ordinal());
            statement.executeUpdate();
            return new ResponseEntity<HLUser>(user, HttpStatus.OK);
        }
        catch(Exception e)
        {
            return new ResponseEntity<HLUser>(user, HttpStatus.BAD_REQUEST);
        }
    }
    else{
        return new ResponseEntity<HLUser>(user, HttpStatus.BAD_REQUEST);
    }
    }

    @Override
    public HLUser login(String username, String password) throws SQLException, UsernameNotFoundException {
        String sql = "select * from hluser where username=?";
        HLUser user = new HLUser();
        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely", System.getenv("PGUSER"), System.getenv("PGPW"))) {
            PreparedStatement statement = con.prepareStatement(sql);
            statement.setString(1, username);
            ResultSet rs = statement.executeQuery();
            if (rs.next()) {
                user = hlUserService.queryUser(username, user, rs);
                if(passwordEncoder.matches(password, user.getPassword()))
                {
                    user.setUserloggedin(true);
                    sql = "update hluser set userloggedin = true where username = ?";
                    statement = con.prepareStatement(sql);
                    statement.setString(1, username);
                    statement.executeUpdate();
                    return user;
                }
                else{
                    return null;
                }
            } else {
                System.out.println("No user found with username " + username);
                return null;          }
    }
}
}
