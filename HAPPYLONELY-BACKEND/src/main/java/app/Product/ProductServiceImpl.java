package app.Product;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class ProductServiceImpl implements ProductService {

	@Autowired 
	ProductRepository productRepository;
	@Override
	public Optional<Product> getProductById(Long id) {
		return productRepository.findById(id);
	}
}
