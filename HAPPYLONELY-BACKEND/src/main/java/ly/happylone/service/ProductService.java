package ly.happylone.service;

import java.sql.SQLException;

import ly.happylone.model.Product;

import java.util.List;

import org.springframework.http.ResponseEntity;



public interface ProductService {
	 Product getProductById(Long id) throws SQLException;
	 ResponseEntity<Product>  getProductByName(String productname) throws SQLException;
	 List<Product> getAllProducts() throws SQLException;
	 ResponseEntity<Product>  addProduct(Product product) throws SQLException;
	 ResponseEntity<Product> updateProduct(Product product) throws SQLException;
	 void deleteProduct(Long id) throws SQLException;
	
}
