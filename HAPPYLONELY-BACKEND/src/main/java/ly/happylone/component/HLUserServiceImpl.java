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

    @Override
    public int getUserRole(String username) {
        if (username.length() == 0) {
            return 0;
        }
        int role = 0;
        String sql = "select role from hluser where username = ?";
        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                System.getenv("PGUSER"), System.getenv("PGPW"))) {

            PreparedStatement statement = con.prepareStatement(sql);
            statement.setString(1, username);
            ResultSet rs = statement.executeQuery();
            if (rs.next()) {
                role = rs.getInt("role");
            }
        } catch (Exception e) {
            return 0;
        }
        return role;
    }

    // Banned, Guest, Standard, VIP, Admin;
    @Override
    public HLUser queryUser(String username, HLUser user, ResultSet rs) throws SQLException {
        user.setId(rs.getLong("id"));
        user.setUsername(rs.getString("username"));
        user.setPassword(rs.getString("password"));
        user.setEmail(rs.getString("email"));
        // Guest, Banned, Standard, VIP, Moderator, Admin, Owner;
        switch (rs.getInt("role")) {
            case 0:
                user.setRole(HLRole.Guest);
                break;
            case 1:
                user.setRole(HLRole.Banned);
                break;
            case 2:
                user.setRole(HLRole.Standard);
                break;
            case 3:
                user.setRole(HLRole.VIP);
                break;
            case 4:
                user.setRole(HLRole.Moderator);
                break;
            case 5:
                user.setRole(HLRole.Admin);
                break;
            case 6:
                user.setRole(HLRole.Owner);
            default:
                user.setRole(HLRole.Standard);
                break;
        }
        if (rs.getInt("role") == 0 || rs.getInt("role") == 1) {
            user.setUserloggedin(false);
            return null;
        } else {
            user.setUserloggedin(true);
            user.setProfileimg(rs.getString("profileimg"));
            user.setStatusmsg(rs.getString("statusmsg"));
            user.setUserloggedin(rs.getBoolean("userloggedin"));
            user.setRegisterdate(rs.getDate("registerdate"));
            user.setUnbandate(rs.getDate("unbandate"));
            user.setLastlogindate(rs.getDate("lastlogindate"));
        }
        return user;

    }

    // @Override
    // public HLUser addUser(RegisterRequest registerRequest){
    // String sql = "insert into hluser (email, username, password, registerdate,
    // lastlogindate, unbandate, statusmsg, profileimg, userloggedin, role) values
    // (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    // System.out.println("in register service");
    // if (getUserByName(registerRequest.getUsername().trim()) == null) {
    // HLUser hlUser = new HLUser();

    // try (Connection con =
    // DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
    // System.getenv("PGUSER"), System.getenv("PGPW"))) {
    // PreparedStatement statement = con.prepareStatement(sql);
    // statement.setString(1, registerRequest.getEmail());
    // statement.setString(2, registerRequest.getUsername());
    // statement.setString(3, SecurityConfig.encode(registerRequest.getPassword()));
    // statement.setDate(4, new Date(System.currentTimeMillis()));
    // statement.setDate(5, new Date(System.currentTimeMillis()));
    // statement.setDate(6, null);
    // statement.setString(7, "I'm new here!");
    // statement.setString(8, "https://i.imgur.com/mCHMpLT.png");
    // statement.setBoolean(9, true);
    // statement.setInt(10, HLRole.Standard.ordinal());
    // statement.executeUpdate();
    // return hlUser;
    // } catch (Exception e) {
    // return null;
    // }
    // } else {
    // return null;
    // }
    // }
    @Override
    public boolean userExists(String username) {
        String sql = "select * from hluser where username=?";
        System.out.println("in user exists");
        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                System.getenv("PGUSER"), System.getenv("PGPW"))) {
            PreparedStatement statement = con.prepareStatement(sql);
            statement.setString(1, username);
            ResultSet rs = statement.executeQuery();
            if (rs.next()) {
                return true;
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
            return false;
        }
        return false;

    }

    /*
     * export interface HLUser {
     * id: number; // ID of the user
     * email: string; // Email of the user
     * username: string; // Username, which is unique
     * registerdate: Date; // Registration date of the user
     * lastlogindate: Date; // Last login date
     * unbandate: Date; // Date on which the user was unbanned
     * statusmsg: string; // Status message or bio of the user
     * profileimg: string; // URL or data link for the profile picture
     * userloggedin: boolean; // Indicates if the user is currently logged in
     * role: number; // User's role. It could be an enum or a string depending on
     * how it's handled in your frontend
     * }
     * 
     * 
     */
    @Override
    public HLUser getUserByName(String username) {
        String sql = "select * from hluser where username=?";
        HLUser user = new HLUser();
        System.out.println("in get user by name");
        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                System.getenv("PGUSER"), System.getenv("PGPW"))) {
            if (!username.isEmpty()) {
                username = username.trim();
                PreparedStatement statement = con.prepareStatement(sql);
                statement.setString(1, username);
                ResultSet rs = statement.executeQuery();
                if (rs.next()) {
                    return queryUser(username, user, rs);
                } else {
                    System.out.println("No user found with username " + username);
                    return null;
                }
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

    @Override
    public HLUser getUserByUsername(String username) {
        return getUserByName(username);

    }
}
