package ly.happylone.service;

import java.sql.SQLException;

import ly.happylone.model.Product;

import java.util.List;

import org.springframework.http.ResponseEntity;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public interface ProductService {
	public Product getProductById(Long id) throws SQLException;
	public ResponseEntity<Product>  getProductByName(String productname) throws SQLException;
	public List<Product> getAllProducts() throws SQLException;
	public ResponseEntity<Product>  addProduct(Product product) throws SQLException;
	public ResponseEntity<Product> updateProduct(Product product) throws SQLException;
	public void deleteProduct(Long id) throws SQLException;
	
}
