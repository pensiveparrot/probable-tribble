package ly.happylone.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

import org.hibernate.annotations.GenericGenerator;

@Data
@Entity
@Table(name = "messages")
public class Message {

    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    @Column(name = "id", columnDefinition = "VARCHAR(36)")
    private String id;

    @Column(name = "content", nullable = false)
    private String content;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "sender_id", nullable = false)
    private HLUserResponse sender;

    @Column(name = "date_sent", nullable = false)
    private LocalDateTime dateSent;

    @Column(name = "prev_message_id")
    private String prevMessageId;

    @Column(name = "next_message_id")
    private String nextMessageId;

}