package ly.happylone.model;

import lombok.Data;

@Data
public class PlayerBehavior {
    private HLPlayer player;
    private String action;
    private int actionQty;
}
