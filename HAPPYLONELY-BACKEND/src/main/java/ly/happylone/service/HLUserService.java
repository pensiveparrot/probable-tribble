package ly.happylone.service;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.http.ResponseEntity;

import ly.happylone.model.HLUser;

public interface HLUserService {
    HLUser getUserById(Long id) throws SQLException;

    HLUser getUserByName(String username);

    HLUser queryUser(String username, HLUser user, ResultSet rs) throws SQLException;

    ResponseEntity<List<HLUser>> getAllUsers() throws SQLException;

    ResponseEntity<HLUser> updateUser(HLUser user) throws SQLException;

    void deleteUser(Long id) throws SQLException;

    ResponseEntity<HLUser> banUser(HLUser user) throws SQLException;

    ResponseEntity<HLUser> unbanUser(HLUser user) throws SQLException;

    ResponseEntity<HLUser> changePassword(HLUser user) throws SQLException;

    ResponseEntity<HLUser> changeStatus(HLUser user) throws SQLException;

    ResponseEntity<HLUser> changeProfileImg(HLUser user) throws SQLException;

    ResponseEntity<HLUser> changeRole(HLUser user) throws SQLException;

    ResponseEntity<HLUser> changeUsername(HLUser user) throws SQLException;

    ResponseEntity<HLUser> changeEmail(HLUser user) throws SQLException;

}