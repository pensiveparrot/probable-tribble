package ly.happylone.model;

import java.time.LocalDateTime;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "messages")
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "content", nullable = false) // Made content non-nullable assuming every message should have content
    private String content;

    @ManyToOne(fetch = FetchType.LAZY) // Set FetchType to LAZY to align with the OneToMany FetchType
    @JoinColumn(name = "sender_id", nullable = false) // Made sender_id non-nullable, assuming every message should have
                                                      // a sender
    private HLUserResponse sender;

    @Column(name = "date_sent", nullable = false) // Assuming every message should have a send date
    private LocalDateTime dateSent;
}