package ly.happylone.model;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@Entity
@Table(name = "art")
@AllArgsConstructor
public class Art {
    public Art(String artName2, String artAuthor2, Date date, String artImageFilePath2) {
        artName = artName2;
        artAuthor = artAuthor2;
        dateUploaded = date;
        artImageFilePath = artImageFilePath2;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "artname")
    private String artName;
    @Column(name = "artauthor")
    private String artAuthor;
    @Column(name = "dateuploaded")
    private Date dateUploaded;
    @Column(name = "artimagefilepath")
    private String artImageFilePath;

}
