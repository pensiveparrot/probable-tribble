package ly.happylone.component;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

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

	public Product addProduct(Product product) throws SQLException {
		throw new SQLException();
	}

	public Product updateProduct(Product product) throws SQLException {
		throw new SQLException();
	}

	public void deleteProduct(Long id) throws SQLException {
		throw new SQLException();
	}
}
