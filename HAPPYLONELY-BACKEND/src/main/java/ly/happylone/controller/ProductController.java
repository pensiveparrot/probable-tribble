package ly.happylone.controller;

import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import ly.happylone.model.Product;
import ly.happylone.service.ProductService;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {
	@Autowired
	private ProductService productService;

	@GetMapping(value = "/getProductById/{id}")
	public Product getProductById(@PathVariable Long id) throws SQLException {
		{
			return productService.getProductById(id);
		}
	}

	@GetMapping(value= "/getAllProducts")
	public List<Product> getAllProducts() throws SQLException {
		{
			return productService.getAllProducts();
		}
	}
@PutMapping(value = "/updateProduct")
@ResponseBody
	public ResponseEntity<Product> updateProduct(@RequestBody Product product) throws SQLException {
		{
			return productService.updateProduct(product);
		}
	}
	@GetMapping(value = "/getProductByName/{productname}")
	public ResponseEntity<Product>  getProductByName(@PathVariable String productname) throws SQLException {
		{
			return productService.getProductByName(productname);
		}
	}

	@PostMapping(value = "/addProduct")
	public ResponseEntity<Product>  addProduct(@RequestBody Product product) throws SQLException {
		{
			return productService.addProduct(product);
		}
	}

}
