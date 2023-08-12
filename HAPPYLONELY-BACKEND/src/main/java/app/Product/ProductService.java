package app.Product;

import java.util.List;

import org.springframework.stereotype.Service;
@Service
public interface ProductService {
    public List<Product> getAllProducts();
    public Product getProductById(Long id);
    public Product addProduct(Product product);
    public Product updateProduct(Product product);
    public void deleteProduct(Long id);
    public Product updateProductLink(Long id, String link);
}