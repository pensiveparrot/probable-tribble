package ly.happylone.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;
import java.sql.Date;
import java.util.List;

@Data
@Entity
@Table(name = "threads")
public class Thread {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "content", nullable = false) // Made content non-nullable assuming every message should have content
    private String content;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "sender_id")
    private HLUser sender;

    @Column(name = "date_sent", nullable = false) // Assuming every message should have a send date
    private Date dateSent;

    @Column(name = "title")
    private String title;

    @Column(name = "category")
    private String category;

    @Column(name = "posts")
    @OneToMany(mappedBy = "thread")
    private List<Post> posts;
}
