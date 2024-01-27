package ly.happylone.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

import org.hibernate.annotations.GenericGenerator;

@Data
@Entity
@Table(name = "threads")
public class Thread {
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    @Column(name = "id", columnDefinition = "VARCHAR(36)")
    private String id;

    @Column(name = "content", nullable = false)
    private String content;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "sender_id")
    private HLUserResponse sender;

    @Column(name = "date_sent")
    private LocalDateTime dateSent;

    @Column(name = "title")
    private String title;

    @Column(name = "category")
    private String category;

    @OneToMany(mappedBy = "thread")
    private List<Post> posts;

}