package ly.happylone.component;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import ly.happylone.model.HLRole;
import ly.happylone.model.HLUser;
import ly.happylone.service.HLUserService;

@Component
public class HLUserServiceImpl implements HLUserService {

    @Override
    public HLUser getUserById(Long id) throws SQLException {
        String sql = "select * from hluser where id=?";
        HLUser user = new HLUser();
        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                System.getenv("PGUSER"), System.getenv("PGPW"))) {

            PreparedStatement statement = con.prepareStatement(sql);
            statement.setLong(1, id);
            ResultSet rs = statement.executeQuery();
            if (rs.next()) {
                return queryUser(user.getUsername(), user, rs);

            } else {
                System.out.println("No user found with ID " + id);
                return null;
            }
        }

        catch (SQLException ex) {
            ex.printStackTrace();
        }
        return null;

    }

    // Banned, Guest, Standard, VIP, Admin;
    @Override
    public HLUser queryUser(String username, HLUser user, ResultSet rs) throws SQLException {
        user.setId(rs.getLong("id"));
        user.setUsername(username);
        user.setPassword(rs.getString("password"));
        user.setEmail(rs.getString("email"));
        HLRole hlrole = HLRole.values()[rs.getInt("role")];
        switch (hlrole.ordinal()) {
            case 0:
                hlrole = HLRole.Banned;
                break;
            case 1:
                hlrole = HLRole.Guest;
                break;
            case 2:
                hlrole = HLRole.Standard;
                break;
            case 3:
                hlrole = HLRole.VIP;
                break;
            case 4:
                hlrole = HLRole.Moderator;
                break;
            case 5:
                hlrole = HLRole.Admin;
                break;
            case 6:
                hlrole = HLRole.Owner;
                break;
            default:
                hlrole = HLRole.Guest;
                break;

        }
        user.setRole(hlrole);
        if (user.getRole() == HLRole.Guest || user.getRole() == HLRole.Banned) {
            user.setUserloggedin(false);

        } else {
            user.setProfileimg(rs.getString("profileimg"));
            user.setStatusmsg(rs.getString("statusmsg"));
            user.setUserloggedin(rs.getBoolean("userloggedin"));
            user.setRegisterdate(rs.getDate("registerdate"));
            user.setUnbandate(rs.getDate("unbandate"));
            user.setLastlogindate(rs.getDate("lastlogindate"));
        }
        return user;

    }

    @Override
    public HLUser getUserByName(String username) {
        String sql = "select * from hluser where username=?";
        HLUser user = new HLUser();
        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                System.getenv("PGUSER"), System.getenv("PGPW"))) {
            PreparedStatement statement = con.prepareStatement(sql);
            statement.setString(1, username);
            ResultSet rs = statement.executeQuery();
            if (rs.next()) {
                return queryUser(username, user, rs);
            } else {
                System.out.println("No user found with username " + username);
                return null;
            }

        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        return null;

    }

    @Override
    public ResponseEntity<List<HLUser>> getAllUsers() throws SQLException {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getAllUsers'");
    }

    @Override
    public ResponseEntity<HLUser> updateUser(HLUser user) throws SQLException {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateUser'");
    }

    @Override
    public void deleteUser(Long id) throws SQLException {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteUser'");
    }

    @Override
    public ResponseEntity<HLUser> banUser(HLUser user) throws SQLException {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'banUser'");
    }

    @Override
    public ResponseEntity<HLUser> unbanUser(HLUser user) throws SQLException {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'unbanUser'");
    }

    @Override
    public ResponseEntity<HLUser> changePassword(HLUser user) throws SQLException {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'changePassword'");
    }

    @Override
    public ResponseEntity<HLUser> changeStatus(HLUser user) throws SQLException {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'changeStatus'");
    }

    @Override
    public ResponseEntity<HLUser> changeProfileImg(HLUser user) throws SQLException {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'changeProfileImg'");
    }

    @Override
    public ResponseEntity<HLUser> changeRole(HLUser user) throws SQLException {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'changeRole'");
    }

    @Override
    public ResponseEntity<HLUser> changeUsername(HLUser user) throws SQLException {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'changeUsername'");
    }

    @Override
    public ResponseEntity<HLUser> changeEmail(HLUser user) throws SQLException {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'changeEmail'");
    }

}
