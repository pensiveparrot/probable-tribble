package ly.happylone.service;

import java.sql.SQLException;
import java.util.List;
import org.springframework.http.ResponseEntity;

import ly.happylone.model.HLBadge;
import ly.happylone.model.HLUser;
import ly.happylone.model.HLUserResponse;

public interface HLUserService {
    HLUser getUserById(Long id) throws SQLException;

    HLUser getUserByName(String username);

    boolean userExists(String username);

    int getUserRole(String username);

    List<ResponseEntity<HLUser>> getAllUsers() throws SQLException;

    void deleteUser(Long id) throws SQLException;

    ResponseEntity<HLUserResponse> getUserByUsernameMin(String username);

    ResponseEntity<HLUser> banUser(Long id) throws SQLException;

    ResponseEntity<HLUser> unbanUser(HLUser user) throws SQLException;

    ResponseEntity<HLUser> changePassword(HLUser user) throws SQLException;

    ResponseEntity<HLUser> changeStatus(HLUser user) throws SQLException;

    ResponseEntity<HLUser> changeProfileImg(HLUser user) throws SQLException;

    ResponseEntity<HLUser> changeRole(HLUser user) throws SQLException;

    ResponseEntity<HLUser> changeUsername(HLUser user) throws SQLException;

    ResponseEntity<HLUser> changeEmail(HLUser user) throws SQLException;

    public ResponseEntity<HLUser> awardBadge(HLUser user, HLBadge badge) throws SQLException;

    HLUser getUserByUsername(String username);

    ResponseEntity<HLUserResponse> editUser(HLUserResponse user);

    public Boolean isProfaneUsername(String username);

}
