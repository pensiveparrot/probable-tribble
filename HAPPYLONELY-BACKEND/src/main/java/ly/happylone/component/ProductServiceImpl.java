package ly.happylone.component;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import ly.happylone.model.Product;
import ly.happylone.service.ProductService;

@Component
public class ProductServiceImpl implements ProductService {

	@Override
	public Product getProductById(Long id) throws SQLException {

		String sql = "select * from product where id=?";
		Product product = new Product();
		try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely", System.getenv("PGUSER"), System.getenv("PGPW"))) {

			PreparedStatement statement = con.prepareStatement(sql);
			statement.setLong(1, id);
			ResultSet rs = statement.executeQuery();
			if (rs.next()) {

				product.setId(rs.getLong("id"));
				product.setProductname(rs.getString("productname"));
				product.setPrice(rs.getBigDecimal("price"));
				product.setInventorystatus(rs.getString("inventorystatus"));
				product.setImage(rs.getString("image"));
				product.setShoplink(rs.getString("shoplink"));

			} else {
				System.out.println("No product found with ID " + id);
			}
		}

		catch (SQLException ex) {
			ex.printStackTrace();
		}
		return product;
	}
@Override
	public List<Product> getAllProducts() throws SQLException {
		String sql = "select * from product order by id";
		List<Product> products = new ArrayList<Product>();
		try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely", System.getenv("PGUSER"), System.getenv("PGPW"))) {

			PreparedStatement statement = con.prepareStatement(sql);
			ResultSet rs = statement.executeQuery();
			while (rs.next()) {
				Product product = new Product();
				product.setId(rs.getLong("id"));
				product.setProductname(rs.getString("productname"));
				product.setPrice(rs.getBigDecimal("price"));
				product.setInventorystatus(rs.getString("inventorystatus"));
				product.setImage(rs.getString("image"));
				product.setShoplink(rs.getString("shoplink"));
				products.add(product);
			}
		}

		catch (SQLException ex) {
			ex.printStackTrace();
		}
		return products;
	}
	@Override
	public ResponseEntity<Product> addProduct(Product product) throws SQLException {
		
		String sql = "insert into product (productname, price, inventorystatus, image, shoplink) values (?, ?, ?, ?, ?)";
		try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely", System.getenv("PGUSER"), System.getenv("PGPW"))) {
			
		if(getProductByName(product.getProductname()).getStatusCode() == HttpStatus.NOT_FOUND) {
		PreparedStatement statement = con.prepareStatement(sql);
			statement.setString(1, product.getProductname());
			statement.setBigDecimal(2, product.getPrice());
			statement.setString(3, product.getInventorystatus());
			statement.setString(4, product.getImage());
			statement.setString(5, product.getShoplink());
			statement.executeUpdate();
			return ResponseEntity.status(HttpStatus.OK).body(product);			
		}
			else {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(product);

			}
	
			
		}
		catch (SQLException ex) {
			ex.printStackTrace();
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(product);
		}

	}
	@Override
	public ResponseEntity<Product> getProductByName(String productname) throws SQLException {
		String sql = "select * from product where productname=?";
		Product product = new Product();
		try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely", System.getenv("PGUSER"), System.getenv("PGPW"))) {

			PreparedStatement statement = con.prepareStatement(sql);
			statement.setString(1, productname);
			ResultSet rs = statement.executeQuery();
			if (rs.next()) {

				product.setId(rs.getLong("id"));
				product.setProductname(rs.getString("productname"));
				product.setPrice(rs.getBigDecimal("price"));
				product.setInventorystatus(rs.getString("inventorystatus"));
				product.setImage(rs.getString("image"));
				product.setShoplink(rs.getString("shoplink"));
				return ResponseEntity.status(HttpStatus.OK).body(product);
			} else {
				System.out.println("No product found with name " + productname);
				return ResponseEntity.status(HttpStatus.NOT_FOUND).body(product);
			}
		}

		catch (SQLException ex) {
			ex.printStackTrace();
		}
		
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(product);
		
			
	}
	@Override
	public ResponseEntity<Product> updateProduct(Product product) throws SQLException {
		if(product.getId() != null) {
			String sql = "update product set productname=?, price=?, inventorystatus=?, image=?, shoplink=? where id=?";
			try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely", System.getenv("PGUSER"), System.getenv("PGPW"))) {
				Product prod = getProductById(product.getId());
				if(prod.getId() > 0){
				PreparedStatement statement = con.prepareStatement(sql);
				statement.setString(1, product.getProductname());
				statement.setBigDecimal(2, product.getPrice());
				statement.setString(3, product.getInventorystatus());
				statement.setString(4, product.getImage());
				statement.setString(5, product.getShoplink());
				statement.setLong(6, product.getId());
				statement.executeUpdate();
   				return ResponseEntity.status(HttpStatus.OK).body(product);				
			}
				else{
					return ResponseEntity.status(HttpStatus.NOT_FOUND).body(product);
				}
			}
			

			catch (SQLException ex) {
				ex.printStackTrace();
			}	
		}
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(product);

		
	}

	public void deleteProduct(Long id) throws SQLException {
		if(id > 0 && id instanceof Long){
			String sql = "delete from product where id=?";
			try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely", System.getenv("PGUSER"), System.getenv("PGPW"))) {

				PreparedStatement statement = con.prepareStatement(sql);
				statement.setLong(1, id);
				statement.executeUpdate();
			}

			catch (SQLException ex) {
				ex.printStackTrace();
			}	
		}
	}
}
