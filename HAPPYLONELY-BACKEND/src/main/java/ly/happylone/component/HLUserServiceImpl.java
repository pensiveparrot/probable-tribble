package ly.happylone.component;

import java.sql.SQLException;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import ly.happylone.model.HLBadge;
import ly.happylone.model.HLRole;
import ly.happylone.model.HLUser;
import ly.happylone.model.HLUserResponse;
import ly.happylone.service.DatabaseService;
import ly.happylone.service.HLUserService;

@Component
public class HLUserServiceImpl implements HLUserService {

    private static final Logger logger = LoggerFactory.getLogger(HLUserServiceImpl.class);

    @Autowired
    private DatabaseService databaseService;

    @Override
    public HLUser getUserById(Long id) {
        try {
            return databaseService.getUserById(id);
        } catch (SQLException e) {
            logger.error("Error getting user by ID", e);
            return null;
        }
    }

    @Override
    public ResponseEntity<HLUser> awardBadge(HLUser user, HLBadge badge) throws SQLException {
        try {
            return databaseService.awardBadge(user, badge);
        } catch (SQLException e) {
            logger.error("Error getting user by ID", e);
            return null;
        }
    }

    @Override
    public int getUserRole(String username) {
        try {
            return databaseService.getUserRole(username);
        } catch (Exception e) {
            logger.error("Error getting user role", e);
            return -1;
        }
    }

    @Override
    public ResponseEntity<HLUserResponse> editUser(HLUserResponse user) {
        try {
            return databaseService.editUser(user);
        } catch (Exception e) {
            logger.error("Error editing user", e);
            return ResponseEntity.badRequest().body(null);
        }

    }

    @Override
    public boolean userExists(String username) {
        try {
            return databaseService.userExists(username);
        } catch (Exception e) {
            logger.error("Error checking if user exists", e);
            return false;
        }

    }

    @Override
    public HLUser getUserByName(String username) {
        try {
            return databaseService.getUserByName(username);
        } catch (Exception e) {
            logger.error("Error getting user by name", e);
            return null;
        }

    }

    @Override
    public List<ResponseEntity<HLUser>> getAllUsers() throws SQLException {
        try {
            return databaseService.getAllUsers();
        } catch (Exception e) {
            logger.error("Error getting user by name", e);
            return null;
        }

    }

    @Override
    public ResponseEntity<HLUser> updateUser(HLUser user) throws SQLException {
        try {
            return databaseService.updateUser(user);
        } catch (Exception e) {
            logger.error("Error getting user by name", e);
            return null;
        }
    }

    @Override
    public void deleteUser(Long id) throws SQLException {
        try {
            databaseService.deleteUser(id);
        } catch (Exception e) {
            logger.error("Error getting user by name", e);
        }
    }

    @Override
    public ResponseEntity<HLUser> banUser(Long id) throws SQLException {
        try {
            return databaseService.banUser(id);
        } catch (Exception e) {
            logger.error("Error getting user by name", e);
            return null;
        }
    }

    @Override
    public ResponseEntity<HLUser> unbanUser(HLUser user) throws SQLException {
        try {
            return databaseService.unbanUser(user);
        } catch (Exception e) {
            logger.error("Error unbanning user", e);
            return null;
        }
    }

    @Override
    public ResponseEntity<HLUser> changeUserRole(Long id, HLRole role) throws SQLException {
        try {
            return databaseService.changeUserRole(id, role);
        } catch (Exception e) {
            logger.error("Error changing user role", e);
            return null;
        }
    }

    @Override
    public ResponseEntity<HLUser> changePassword(HLUser user) throws SQLException {
        try {
            return databaseService.changePassword(user);
        } catch (Exception e) {
            logger.error("Error changing password", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @Override
    public ResponseEntity<HLUser> changeStatus(HLUser user) throws SQLException {
        try {
            return databaseService.changeStatus(user);
        } catch (Exception e) {
            logger.error("Error changing status", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @Override
    public ResponseEntity<HLUser> changeRole(HLUser user) throws SQLException {
        try {
            return databaseService.changeRole(user);
        } catch (Exception e) {
            logger.error("Error changing role", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @Override
    public ResponseEntity<HLUser> changeUsername(HLUser user) throws SQLException {
        try {
            return databaseService.changeUsername(user);
        } catch (Exception e) {
            logger.error("Error changing username", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @Override
    public ResponseEntity<HLUser> changeEmail(HLUser user) throws SQLException {
        try {
            return databaseService.changeEmail(user);
        } catch (Exception e) {
            logger.error("Error changing email", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @Override
    public HLUser getUserByUsername(String username) {
        return getUserByName(username);

    }

    @Override
    public ResponseEntity<HLUserResponse> getUserByUsernameMin(String username) {
        return databaseService.getUserByUsernameMin(username);
    }

    @Override
    public ResponseEntity<HLUser> changeProfileImg(HLUser user) throws SQLException {
        try {
            return databaseService.changeProfileImg(user);
        } catch (Exception e) {
            logger.error("Error changing profile image", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

}
