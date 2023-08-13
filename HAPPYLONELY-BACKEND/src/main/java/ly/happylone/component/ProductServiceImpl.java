package ly.happylone.component;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.stereotype.Component;

import ly.happylone.model.Product;
import ly.happylone.service.ProductService;

@Component
public class ProductServiceImpl implements ProductService {

	@Override
	public Product getProductById(Long id) throws SQLException {

		String sql = "select * from product where id=?";
		Product product = new Product();
		Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely", "postgres",
				"1012345");
		PreparedStatement statement = con.prepareStatement(sql);
		statement.setLong(1, id);
		try (ResultSet rs = statement.executeQuery()) {
			if (rs.next()) {
				/*
				 * @Column(name = "productname") private String productname;
				 * 
				 * @Column(name = "price") private BigDecimal price;
				 * 
				 * @Column(name = "inventorystatus") private String inventorystatus;
				 * 
				 * @Column(name = "image") private String image;
				 * 
				 * @Column(name = "shoplink") private String shoplink;
				 */

				product.setId(rs.getLong("id"));
				product.setProductname(rs.getString("productname"));
				product.setPrice(rs.getBigDecimal("price"));
				product.setInventorystatus(rs.getString("inventorystatus"));
				product.setImage(rs.getString("image"));
				product.setShoplink(rs.getString("shoplink"));
				// ... other fields ...
			} else {
				System.out.println("No product found with ID " + id);
			}
		}

		catch (SQLException ex) {
			ex.printStackTrace();
		}
		return product;
	}
}
