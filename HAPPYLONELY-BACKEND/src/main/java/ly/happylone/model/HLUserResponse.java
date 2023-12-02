package ly.happylone.model;

import jakarta.persistence.*;
import lombok.Data;
import java.util.List;

@Data
@Entity
@Table(name = "hluser_response")
public class HLUserResponse {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Added Generation strategy
    private Long id;

    @Column(name = "username", nullable = false, unique = true) // Made username unique & non-nullable
    private String username;

    @Column(name = "profileimg")
    private String profileimg;

    @Column(name = "statusmsg")
    private String statusmsg;

    @Column(name = "messages")
    @OneToMany(mappedBy = "sender", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Message> messages;

    public HLUserResponse() {
        // Default constructor
    }

    // Utility method to derive HLUserResponse from HLUser
    public HLUserResponse(HLUser user) {
        this.id = user.getId();
        this.username = user.getUsername();
        this.profileimg = user.getProfileimg();
        this.statusmsg = user.getStatusmsg();
    }
}
