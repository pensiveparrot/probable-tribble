package ly.happylone.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;
import java.sql.Date;

@Data
@Entity
@Table(name = "posts")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "content", nullable = false) // Made content non-nullable assuming every message should have content
    private String content;

    @ManyToOne
    @JoinColumn(name = "sender_id", referencedColumnName = "id")
    private HLUser sender;

    @Column(name = "date_sent", nullable = false) // Assuming every message should have a send date
    private Date dateSent;
}
