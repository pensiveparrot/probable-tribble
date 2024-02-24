package ly.happylone.component;

import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import ly.happylone.model.HLPlayer;
import ly.happylone.service.DatabaseService;
import ly.happylone.service.HLPlayerService;

@Component
public class HLPlayerServiceImpl implements HLPlayerService {
    @Autowired
    private DatabaseService databaseService;

    @Override
    public ResponseEntity<?> getPlayerByName(String name) throws SQLException {
        return databaseService.getPlayerByName(name);
    }

    @Override
    public ResponseEntity<?> performAction(HLPlayer player, String action, int actionQty) throws SQLException {
        return databaseService.performAction(player, action, actionQty);
    }

}
