package ly.happylone.model;

import jakarta.persistence.*;
import lombok.Data;
import java.util.List;

import org.hibernate.annotations.GenericGenerator;

@Data
@Entity
@Table(name = "hluser_response")
public class HLUserResponse {

    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    @Column(name = "id", columnDefinition = "VARCHAR(36)")
    private String id;

    @Column(name = "username", nullable = false, unique = true)
    private String username;

    @Column(name = "profileimg")
    private String profileimg;

    @Column(name = "statusmsg")
    private String statusmsg;

    @OneToMany(mappedBy = "sender", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Message> messages;

    @Column(name = "gptapikey")
    private String gptapikey;

    public HLUserResponse() {
        // Default constructor
    }

    // Utility method to derive HLUserResponse from HLUser
    public HLUserResponse(HLUser user) {
        this.id = user.getId();
        this.username = user.getUsername();
        this.profileimg = user.getProfileimg();
        this.statusmsg = user.getStatusmsg();
        this.gptapikey = user.getGptapikey();
    }

}
