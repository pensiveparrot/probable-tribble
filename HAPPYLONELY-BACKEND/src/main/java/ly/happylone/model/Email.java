package ly.happylone.model;

import java.util.Date;

import lombok.Data;

@Data
public class Email {
    private String email;
    private String subject;
    private String message;
    private String sendTo;
    private String cc;
    private Date sentdate;
    private Date receivedDate;
    private String id;
}
