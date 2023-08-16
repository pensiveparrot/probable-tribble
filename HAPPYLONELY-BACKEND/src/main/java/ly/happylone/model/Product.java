package ly.happylone.model;

import java.math.BigDecimal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;

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

	@Column(name = "visible")
	private boolean visible;

}
