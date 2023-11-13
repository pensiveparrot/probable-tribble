package ly.happylone.component;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import ly.happylone.model.Product;
import ly.happylone.service.ProductService;
import ly.happylone.service.DatabaseService;

@Component
public class ProductServiceImpl implements ProductService {
	@Autowired
	private DatabaseService databaseService;

	@Override
	public Product getProductById(Long id) throws SQLException {
		try {
			return databaseService.getProductById(id);
		} catch (SQLException e) {
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public List<Product> getAllProducts() throws SQLException {
		try {
			return databaseService.getAllProducts();
		} catch (SQLException e) {
			e.printStackTrace();
			return null;
		}
	}

	@Override
	public ResponseEntity<Product> addProduct(Product product) throws SQLException {
		try {
			return databaseService.addProduct(product);
		} catch (SQLException e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(product);
		}

	}

	@Override
	public ResponseEntity<Product> getProductByName(String productname) throws SQLException {
		try {
			return databaseService.getProductByName(productname);
		} catch (SQLException e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
	}

	@Override
	public ResponseEntity<Product> updateProduct(Product product) throws SQLException {
		try {
			return databaseService.updateProduct(product);
		} catch (SQLException e) {
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
		}
	}

	@Override
	public void deleteProduct(Long id) throws SQLException {
		try {
			databaseService.deleteProduct(id);
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
}
