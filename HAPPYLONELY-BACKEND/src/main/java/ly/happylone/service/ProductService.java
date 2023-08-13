package ly.happylone.service;

import java.sql.SQLException;

import ly.happylone.model.Product;

public interface ProductService {
	public Product getProductById(Long id) throws SQLException;
}
