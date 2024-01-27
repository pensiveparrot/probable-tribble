package ly.happylone.model;

import java.math.BigDecimal;

import org.hibernate.annotations.GenericGenerator;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "product")
public class Product {
	@Id
	@GeneratedValue(generator = "uuid")
	@GenericGenerator(name = "uuid", strategy = "uuid2")
	@Column(name = "id", columnDefinition = "VARCHAR(36)")
	private String id;

	@Column(name = "productname", unique = true)
	private String productname;

	@Column(name = "price")
	private BigDecimal price;

	@Column(name = "inventorystatus")
	private String inventorystatus;

	@Column(name = "image")
	private String image;

	@Column(name = "shoplink")
	private String shoplink;

}
