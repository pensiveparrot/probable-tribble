package ly.happylone.component;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
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
    public int getUserRole(String username) {
        return databaseService.getUserRole(username);
    }

    @Override
    public ResponseEntity<HLUserResponse> editUser(HLUserResponse user) {
        return databaseService.editUser(user);
    }

    @Override
    public boolean userExists(String username) {
        return databaseService.userExists(username);

    }

    @Override
    public HLUser getUserByName(String username) {
        return databaseService.getUserByName(username);
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

    @Override
    public ResponseEntity<HLUserResponse> getUserByUsernameMin(String username) {
        return databaseService.getUserByUsernameMin(username);
    }

}
