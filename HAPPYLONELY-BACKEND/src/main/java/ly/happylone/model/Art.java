package ly.happylone.model;

import java.util.Date;

import org.hibernate.annotations.GenericGenerator;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "art")
public class Art {
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    @Column(name = "id", columnDefinition = "VARCHAR(36)")
    private String id;

    @Column(name = "artname")
    private String artName;

    @Column(name = "artauthor")
    private String artAuthor;

    @Column(name = "dateuploaded")
    private Date dateUploaded;

    @Column(name = "artimagefilepath")
    private String artImageFilePath;

    public Art(String artName, String artAuthor, Date dateUploaded, String artImageFilePath) {
        this.artName = artName;
        this.artAuthor = artAuthor;
        this.dateUploaded = dateUploaded;
        this.artImageFilePath = artImageFilePath;
    }
}