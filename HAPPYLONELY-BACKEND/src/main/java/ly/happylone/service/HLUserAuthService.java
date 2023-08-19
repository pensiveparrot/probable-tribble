package ly.happylone.service;

import java.sql.SQLException;

import org.springframework.http.ResponseEntity;

import ly.happylone.model.HLUser;

public interface HLUserAuthService {
    HLUser login(String username, String password) throws SQLException;

    ResponseEntity<HLUser> logout(HLUser user) throws SQLException;

    ResponseEntity<HLUser> register(HLUser user) throws SQLException;
}
