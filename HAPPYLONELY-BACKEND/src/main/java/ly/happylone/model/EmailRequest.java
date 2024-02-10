package ly.happylone.model;

import java.util.Date;
import lombok.Data;

@Data
public class EmailRequest {
    private String email;
    private String subject;
    private String message;
    private String sendTo;
    private String cc;
    private Date sentdate;
}
