package ly.happylone.service;

import java.sql.SQLException;
import java.util.List;

import org.springframework.http.ResponseEntity;

import ly.happylone.model.Art;
import ly.happylone.model.HLBadge;
import ly.happylone.model.HLRole;
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

    List<ResponseEntity<HLUser>> getAllUsers() throws SQLException;

    public ResponseEntity<HLUser> updateUser(HLUser user) throws SQLException;

    public void deleteUser(Long id) throws SQLException;

    public ResponseEntity<HLUser> awardBadge(HLUser user, HLBadge badge) throws SQLException;

    public ResponseEntity<HLUser> banUser(Long id) throws SQLException;

    public ResponseEntity<HLUser> unbanUser(HLUser user) throws SQLException;

    public ResponseEntity<HLUser> changePassword(HLUser user);

    public ResponseEntity<HLUser> changeStatus(HLUser user) throws SQLException;

    public ResponseEntity<HLUser> changeProfileImg(HLUser user) throws SQLException;

    public ResponseEntity<HLUser> changeRole(HLUser user) throws SQLException;

    public ResponseEntity<HLUser> changeUsername(HLUser user) throws SQLException;

    public ResponseEntity<HLUser> changeEmail(HLUser user) throws SQLException;

    public ResponseEntity<HLUser> changeUserRole(Long id, HLRole role) throws SQLException;

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

    // forum code

    public ResponseEntity<?> addPost(Message message) throws SQLException;

    public ResponseEntity<?> addThread(Message message) throws SQLException;

    public ResponseEntity<?> getThreadById(Long id) throws SQLException;

    public ResponseEntity<?> addProfileComment(Message message) throws SQLException;

    public ResponseEntity<?> addCredits(HLUser user, int credits) throws SQLException;
}
