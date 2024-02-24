package ly.happylone.service;

import java.sql.SQLException;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import ly.happylone.model.HLPlayer;

@Service
public interface HLPlayerService {
    public ResponseEntity<?> getPlayerByName(String name) throws SQLException;

    public ResponseEntity<?> performAction(HLPlayer player, String action, int actionQty) throws SQLException;
}
