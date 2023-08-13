package app.Product;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController("/product")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {
	@Autowired
	private ProductService productService;

	@GetMapping(value = "/getProductById/{id}")
	public Optional<Product> getProductById(@PathVariable Long id) {
		{
			return productService.getProductById(id);
		}
	}

}
