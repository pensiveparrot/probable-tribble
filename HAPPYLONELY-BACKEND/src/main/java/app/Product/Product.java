package app.Product;

import java.math.BigDecimal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
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
	@GeneratedValue
	@Column(name = "id")
	private Long id;

	@Column(name = "productname")
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
