package ly.happylone.service;

import java.sql.SQLException;
import java.util.List;

import org.springframework.http.ResponseEntity;

import ly.happylone.model.Art;
import ly.happylone.model.HLUser;
import ly.happylone.model.HLUserResponse;
import ly.happylone.model.Message;
import ly.happylone.model.Product;

public interface DatabaseService {
    // user code
    public HLUser getUserById(Long id) throws SQLException;

    public HLUser getUserByName(String username);

    public boolean userExists(String username);

    public ResponseEntity<HLUserResponse> getUserByUsernameMin(String username);

    public int getUserRole(String username);

    public ResponseEntity<HLUserResponse> editUser(HLUserResponse user);

    public int fetchUserRole(String username);

    // art code
    public ResponseEntity<?> addArt(Art art);

    // message code
    public List<Message> fetchAllMessages();

    public void postMessage(Message message) throws SQLException;

    // product code
    public Product getProductById(Long id) throws SQLException;

    public List<Product> getAllProducts() throws SQLException;

    public ResponseEntity<Product> addProduct(Product product) throws SQLException;

    public ResponseEntity<Product> getProductByName(String productname) throws SQLException;

    public ResponseEntity<Product> updateProduct(Product product) throws SQLException;

    public void deleteProduct(Long id) throws SQLException;
}
