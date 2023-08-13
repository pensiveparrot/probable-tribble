package app.Product;

import java.util.Optional;

import org.springframework.stereotype.Service;

@Service
public interface ProductService {
	public Optional<Product> getProductById(Long id);
}
