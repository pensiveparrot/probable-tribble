package ly.happylone.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import ly.happylone.model.HLRole;
import ly.happylone.model.HLUser;
import ly.happylone.model.HLUserResponse;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

@Service
public class DatabaseService {
    private static final Logger logger = LoggerFactory.getLogger(DatabaseService.class);

    private final DataSource dataSource;

    public DatabaseService(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    public HLUser getUserById(Long id) throws SQLException {
        String sql = "select * from hluser where id=?";
        HLUser user = new HLUser();
        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                System.getenv("PGUSER"), System.getenv("PGPW"))) {

            PreparedStatement statement = con.prepareStatement(sql);
            statement.setLong(1, user.getId());
            ResultSet rs = statement.executeQuery();
            if (rs.next()) {
                return queryUser(user.getUsername(), user, rs);

            } else {
                System.out.println("No user found with ID " + user.getId());
                return null;
            }
        }

        catch (SQLException ex) {
            ex.printStackTrace();
        }
        return null;

    }

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

    private HLUser queryUser(String username, HLUser user, ResultSet rs) throws SQLException {
        user.setId(rs.getLong("id"));
        user.setUsername(rs.getString("username"));
        user.setPassword(rs.getString("password"));
        user.setEmail(rs.getString("email"));
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

    public ResponseEntity<HLUserResponse> getUserByUsernameMin(String username) {
        String sql = "select * from hluser_response where username=?";
        HLUser user = new HLUser();
        System.out.println("in get user by usernname min");
        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                System.getenv("PGUSER"), System.getenv("PGPW"))) {
            if (!username.isEmpty()) {
                username = username.trim();
                PreparedStatement statement = con.prepareStatement(sql);
                statement.setString(1, username);
                ResultSet rs = statement.executeQuery();
                if (rs.next()) {
                    HLUserResponse userResp = queryUserMin(username, user, rs);
                    return ResponseEntity.status(HttpStatus.OK).body(userResp);
                } else {
                    System.out.println("No user found with username " + username);
                    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
                }
            }

        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);

    }

    private HLUserResponse queryUserMin(String username, HLUser user, ResultSet rs) throws SQLException {
        user.setId(rs.getLong("id"));
        user.setUsername(rs.getString("username"));
        user.setProfileimg(rs.getString("profileimg"));
        user.setStatusmsg(rs.getString("statusmsg"));
        HLUserResponse userResp = new HLUserResponse(user);

        return userResp;

    }

    public int getUserRole(String username) {
        String sql = "SELECT role FROM hluser WHERE username = ?";
        try (Connection con = dataSource.getConnection();
                PreparedStatement statement = con.prepareStatement(sql)) {
            statement.setString(1, username);
            try (ResultSet rs = statement.executeQuery()) {
                if (rs.next()) {
                    return rs.getInt("role");
                }
            }
        } catch (SQLException e) {
            // Log error and handle exception
        }
        return 0;
    }

    public ResponseEntity<HLUserResponse> editUser(HLUserResponse user) {
        String sql = "UPDATE hluser_response SET username=?, profileimg=?, statusmsg=? WHERE id=?";
        try (Connection con = dataSource.getConnection();
                PreparedStatement statement = con.prepareStatement(sql)) {
            statement.setString(1, user.getUsername());
            statement.setString(2, user.getProfileimg());
            statement.setString(3, user.getStatusmsg());
            statement.setLong(4, user.getId());
            int rowsAffected = statement.executeUpdate();
            if (rowsAffected > 0) {
                return ResponseEntity.ok(user);
            } else {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
            }
        } catch (SQLException e) {
            // Log error and handle exception
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }

    public int fetchUserRole(String username) {
        String sql = "SELECT role FROM hluser WHERE username = ?";
        try (Connection con = dataSource.getConnection();
                PreparedStatement statement = con.prepareStatement(sql)) {
            statement.setString(1, username);
            try (ResultSet rs = statement.executeQuery()) {
                if (rs.next()) {
                    return rs.getInt("role");
                }
            }
        } catch (Exception e) {
            // Log the exception and handle it appropriately
            logger.error("Error fetching user role for username: {}", username, e);
        }
        return 0; // Default role or throw an exception based on your application's needs
    }
}
