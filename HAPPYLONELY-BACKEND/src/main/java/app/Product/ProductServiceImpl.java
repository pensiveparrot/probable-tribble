package app.Product;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

@Controller
public class ProductServiceImpl implements ProductService {
    private final ProductRepository productRepository;

    @Autowired
    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }
    @Override
    public List<Product> getAllProducts() throws RuntimeException{
        try{
            return productRepository.findAll();
        }
        catch(Exception e){
            throw new RuntimeException("Error getting all products");
        }
    }

    @Override
    public Product getProductById(Long id) throws RuntimeException{
     return productRepository.findById(id).orElseThrow(() -> new RuntimeException("Product not found"));
    }

    @Override
    public Product addProduct(Product product) throws RuntimeException {
        try{
            return productRepository.save(product);
        }
        catch(Exception e){
            throw new RuntimeException("Error adding product");
        }
    }

    @Override
    public Product updateProduct(Product product) throws RuntimeException{
        try{
            return productRepository.save(product);
        }
        catch(Exception e){
            throw new RuntimeException("Error updating product");
        }
    }

    @Override
    public void deleteProduct(Long id) throws RuntimeException {
        try{
            productRepository.deleteById(id);
        }
        catch(Exception e){
            throw new RuntimeException("Error deleting product");
        }
    }
    @Override
    public Product updateProductLink(Long id, String link) throws RuntimeException {
        try{

           Product product = getProductById(id);
           product.setShoplink(link);
            return productRepository.save(product);

    }catch(Exception e){
        throw new RuntimeException("Error updating product link");
    }
    }
}
