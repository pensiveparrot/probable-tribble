package ly.happylone.controller;

import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

	@GetMapping(value = "/getStr/{id}")
	public String getStr(@PathVariable Long id) throws SQLException {
		{
			return "GET STR WORKS" + id;
		}
	}

}
