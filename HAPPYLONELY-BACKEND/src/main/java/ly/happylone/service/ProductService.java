package ly.happylone.service;

import java.sql.SQLException;

import ly.happylone.model.Product;

import java.util.List;

public interface ProductService {
	public Product getProductById(Long id) throws SQLException;
	public List<Product> getAllProducts() throws SQLException;
	public Product addProduct(Product product) throws SQLException;
	public Product updateProduct(Product product) throws SQLException;
	public void deleteProduct(Long id) throws SQLException;
	
}
