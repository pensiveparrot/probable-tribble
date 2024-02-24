package ly.happylone.controller;

import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ly.happylone.model.PlayerBehavior;
import ly.happylone.service.HLPlayerService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/player")
public class HLPlayerController {
    @Autowired
    private HLPlayerService playerService;

    @GetMapping("/getPlayer")
    public ResponseEntity<?> getPlayerByName(@RequestBody String name) throws SQLException {
        return playerService.getPlayerByName(name);
    }

    @PostMapping("/userPerformAction")
    public ResponseEntity<?> performAction(@RequestBody PlayerBehavior behavior) throws SQLException {
        return playerService.performAction(behavior.getPlayer(), behavior.getAction(), behavior.getActionQty());
    }

}
