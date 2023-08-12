package app.Product;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import app.Role.HLRole;
import app.User.HLUser;

@RestController("/product")
public class ProductController {
    @Autowired
    private ProductService productService;


    @GetMapping(value="/getAllProducts")
    public List<Product> getAllProducts(@RequestBody Product[] products, @RequestBody HLUser user) {
      if(user.getRole().equals(HLRole.Admin)){
        return productService.getAllProducts();
      }
      else{
        throw new RuntimeException("User is not an Admin");
      }
    }

    @GetMapping(value="/getProductById/{id}")
    @ResponseBody
    public Product getProductById(@PathVariable Long id) {
      {
        return productService.getProductById(id);
      }
    }

    @PostMapping(value="/addProduct")
    public Product addProduct(@RequestBody Product product, @RequestBody HLUser user) {
      if(user.getRole().equals(HLRole.Admin)){
        return productService.addProduct(product);
      }
      else{
        throw new RuntimeException("User is not an Admin");
      }
    }

    @PostMapping(value="/updateProduct")
    public Product updateProduct(@RequestBody Product product, @RequestBody HLUser user ) {
      if(user != null && user.getRole().equals(HLRole.Admin) && product != null && product.getId()>0){
        return productService.updateProduct(product);
      }
      else{
        throw new RuntimeException("Cannot update product");
      }
    }

    @PostMapping(value="/deleteProduct")
    public void deleteProduct(@RequestBody Product product, @RequestBody HLUser user) {
      if(user != null && user.getRole().equals(HLRole.Admin) && product != null && product.getId()>0){
        productService.deleteProduct(product.getId());
      }
      else{
        throw new RuntimeException("Cannot delete product");
      }
    }

    @PostMapping(value="/updateProductLink")
    public Product updateProductLink(@RequestBody Product product, @RequestBody HLUser user, @RequestBody String link) throws RuntimeException {
      if(user != null && user.getRole().equals(HLRole.Admin) && product != null && product.getShoplink().length() > 0 && product.getShoplink().startsWith("https://")){
        return productService.updateProductLink(product.getId(), link);
      }
      else{
        throw new RuntimeException("Cannot update product link");
      }
    }

}
