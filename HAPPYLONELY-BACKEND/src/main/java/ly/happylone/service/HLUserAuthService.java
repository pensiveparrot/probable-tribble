package ly.happylone.service;

import java.sql.SQLException;

import org.springframework.http.ResponseEntity;

import ly.happylone.model.HLUser;
import ly.happylone.model.RegisterRequest;

public interface HLUserAuthService {
    HLUser login(String username, String password) throws SQLException;

    ResponseEntity<HLUser> logout(HLUser user) throws SQLException;

    // HLUser register(RegisterRequest registerRequest) throws SQLException;
}
