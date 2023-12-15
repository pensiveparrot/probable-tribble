package ly.happylone.component;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.thymeleaf.util.StringUtils;

import ly.happylone.model.Art;
import ly.happylone.model.HLBadge;
import ly.happylone.model.HLRole;
import ly.happylone.model.HLUser;
import ly.happylone.model.HLUserResponse;
import ly.happylone.model.Message;
import ly.happylone.model.MessageContext;
import ly.happylone.model.Product;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import ly.happylone.service.DatabaseService;

@Component
public class DatabaseServiceImpl implements DatabaseService {
    private static final Logger logger = LoggerFactory.getLogger(DatabaseService.class);

    private final DataSource dataSource;

    public DatabaseServiceImpl(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    // start of user code DatabaseServiceImpl
    @Override
    public HLUser getUserById(Long id) throws SQLException {
        String sql = "select * from hluser where id=?";
        HLUser user = new HLUser();
        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                System.getenv("PGUSER"), System.getenv("PGPW"))) {

            PreparedStatement statement = con.prepareStatement(sql);
            statement.setLong(1, user.getId());
            ResultSet rs = statement.executeQuery();
            if (rs.next()) {
                return queryUser(user.getUsername(), user, rs);

            } else {
                System.out.println("No user found with ID " + user.getId());
                return null;
            }
        }

        catch (SQLException ex) {
            ex.printStackTrace();
        }
        return null;

    }

    @Override
    public HLUser getUserByName(String username) {
        String sql = "select * from hluser where username=?";
        HLUser user = new HLUser();
        System.out.println("in get user by name");
        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                System.getenv("PGUSER"), System.getenv("PGPW"))) {
            if (!username.isEmpty()) {
                username = username.trim();
                PreparedStatement statement = con.prepareStatement(sql);
                statement.setString(1, username);
                ResultSet rs = statement.executeQuery();
                if (rs.next()) {
                    return queryUser(username, user, rs);
                } else {
                    System.out.println("No user found with username " + username);
                    return null;
                }
            }

        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        return null;

    }

    private HLUser queryUser(String username, HLUser user, ResultSet rs) throws SQLException {
        user.setId(rs.getLong("id"));
        user.setUsername(rs.getString("username"));
        user.setPassword(rs.getString("password"));
        user.setEmail(rs.getString("email"));
        switch (rs.getInt("role")) {
            case 0:
                user.setRole(HLRole.Banned);
                break;
            case 1:
                user.setRole(HLRole.Guest);
                break;
            case 2:
                user.setRole(HLRole.Standard);
                break;
            case 3:
                user.setRole(HLRole.VIP);
                break;
            case 4:
                user.setRole(HLRole.Moderator);
                break;
            case 5:
                user.setRole(HLRole.Admin);
                break;
            case 6:
                user.setRole(HLRole.Owner);
            default:
                user.setRole(HLRole.Standard);
                break;
        }
        if (rs.getInt("role") == 0 || rs.getInt("role") == 1) {
            user.setUserloggedin(false);
            return null;
        } else {
            user.setUserloggedin(true);
            user.setProfileimg(rs.getString("profileimg"));
            user.setStatusmsg(rs.getString("statusmsg"));
            user.setUserloggedin(rs.getBoolean("userloggedin"));
            user.setRegisterdate(rs.getDate("registerdate"));
            user.setUnbandate(rs.getDate("unbandate"));
            user.setLastlogindate(rs.getDate("lastlogindate"));
        }
        return user;

    }

    @Override
    public boolean userExists(String username) {
        String sql = "select * from hluser where username=?";
        System.out.println("in user exists");
        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                System.getenv("PGUSER"), System.getenv("PGPW"))) {
            PreparedStatement statement = con.prepareStatement(sql);
            statement.setString(1, username);
            ResultSet rs = statement.executeQuery();
            if (rs.next()) {
                return true;
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
            return false;
        }
        return false;
    }

    @Override
    public ResponseEntity<HLUserResponse> getUserByUsernameMin(String username) {
        String sql = "select * from hluser_response where username=?";
        HLUser user = new HLUser();
        System.out.println("in get user by usernname min");
        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                System.getenv("PGUSER"), System.getenv("PGPW"))) {
            if (!username.isEmpty()) {
                username = username.trim();
                PreparedStatement statement = con.prepareStatement(sql);
                statement.setString(1, username);
                ResultSet rs = statement.executeQuery();
                if (rs.next()) {
                    HLUserResponse userResp = queryUserMin(username, user, rs);
                    return ResponseEntity.status(HttpStatus.OK).body(userResp);
                } else {
                    System.out.println("No user found with username " + username);
                    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
                }
            }

        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);

    }

    private HLUserResponse queryUserMin(String username, HLUser user, ResultSet rs) throws SQLException {
        user.setId(rs.getLong("id"));
        user.setUsername(rs.getString("username"));
        user.setProfileimg(rs.getString("profileimg"));
        user.setStatusmsg(rs.getString("statusmsg"));
        HLUserResponse userResp = new HLUserResponse(user);

        return userResp;

    }

    @Override
    public int getUserRole(String username) {
        String sql = "SELECT role FROM hluser WHERE username = ?";
        try (Connection con = dataSource.getConnection();
                PreparedStatement statement = con.prepareStatement(sql)) {
            statement.setString(1, username);
            try (ResultSet rs = statement.executeQuery()) {
                if (rs.next()) {
                    return rs.getInt("role");
                }
            }
        } catch (SQLException e) {
            logger.error(e.getMessage());
        }
        return 0;
    }

    @Override
    public ResponseEntity<HLUserResponse> editUser(HLUserResponse user) {
        String sql = "UPDATE hluser_response SET username=?, profileimg=?, statusmsg=? WHERE id=?";
        try (Connection con = dataSource.getConnection();
                PreparedStatement statement = con.prepareStatement(sql)) {
            statement.setString(1, user.getUsername());
            statement.setString(2, user.getProfileimg());
            statement.setString(3, user.getStatusmsg());
            statement.setLong(4, user.getId());
            int rowsAffected = statement.executeUpdate();
            if (rowsAffected > 0) {
                return ResponseEntity.ok(user);
            } else {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
            }
        } catch (SQLException e) {
            // Log error and handle exception
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }

    @Override
    public ResponseEntity<HLUser> changeStatus(HLUser user) throws SQLException {
        String sql = "UPDATE hluser SET statusmsg = ? WHERE id = ?";
        try (Connection con = dataSource.getConnection();
                PreparedStatement statement = con.prepareStatement(sql)) {
            statement.setString(1, user.getStatusmsg());
            statement.setLong(2, user.getId());
            int rowsAffected = statement.executeUpdate();
            if (rowsAffected > 0) {
                return ResponseEntity.ok(user);
            } else {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
            }
        } catch (SQLException e) {
            logger.error("Error changing status", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @Override
    public ResponseEntity<HLUser> changeProfileImg(HLUser user) throws SQLException {
        String sql = "UPDATE hluser SET profileimg = ? WHERE id = ?";
        try (Connection con = dataSource.getConnection();
                PreparedStatement statement = con.prepareStatement(sql)) {
            statement.setString(1, user.getProfileimg());
            statement.setLong(2, user.getId());
            int rowsAffected = statement.executeUpdate();
            if (rowsAffected > 0) {
                return ResponseEntity.ok(user);
            } else {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
            }
        } catch (SQLException e) {
            logger.error("Error changing profile image", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @Override
    public ResponseEntity<HLUser> changeRole(HLUser user) throws SQLException {
        String sql = "UPDATE hluser SET role = ? WHERE id = ?";
        try (Connection con = dataSource.getConnection();
                PreparedStatement statement = con.prepareStatement(sql)) {
            statement.setString(1, StringUtils.toString(user.getRole()));
            statement.setLong(2, user.getId());
            int rowsAffected = statement.executeUpdate();
            if (rowsAffected > 0) {
                return ResponseEntity.ok(user);
            } else {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
            }
        } catch (SQLException e) {
            logger.error("Error changing role", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @Override
    public ResponseEntity<HLUser> changeUsername(HLUser user) throws SQLException {
        String sql = "UPDATE hluser SET username = ? WHERE id = ?";
        try {
            HLUser user2 = new HLUser();
            user2 = getUserByName(user.getUsername());
            if (user2 != null) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
            }
        } catch (Exception e) {
            logger.error("Error changing username", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
        try (Connection con = dataSource.getConnection();
                PreparedStatement statement = con.prepareStatement(sql)) {
            statement.setString(1, user.getUsername());
            statement.setLong(2, user.getId());
            int rowsAffected = statement.executeUpdate();
            if (rowsAffected > 0) {
                return ResponseEntity.ok(user);
            } else {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
            }
        } catch (SQLException e) {
            logger.error("Error changing username", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @Override
    public ResponseEntity<HLUser> awardBadge(HLUser user, HLBadge badge) throws SQLException {
        String sql = "UPDATE hluser SET badges = ? WHERE id = ?";
        try (Connection con = dataSource.getConnection();
                PreparedStatement statement = con.prepareStatement(sql)) {
            statement.setString(1, StringUtils.toString(user.getBadges()));
            statement.setLong(2, user.getId());
            int rowsAffected = statement.executeUpdate();
            if (rowsAffected > 0) {
                return ResponseEntity.ok(user);
            } else {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
            }
        } catch (SQLException e) {
            logger.error("Error awarding badge", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @Override
    public ResponseEntity<HLUser> changeEmail(HLUser user) throws SQLException {
        String sql = "UPDATE hluser SET email = ? WHERE id = ?";
        try (Connection con = dataSource.getConnection();
                PreparedStatement statement = con.prepareStatement(sql)) {
            statement.setString(1, user.getEmail());
            statement.setLong(2, user.getId());
            int rowsAffected = statement.executeUpdate();
            if (rowsAffected > 0) {
                return ResponseEntity.ok(user);
            } else {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
            }
        } catch (SQLException e) {
            logger.error("Error changing email", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @Override
    public void deleteUser(Long id) throws SQLException {
        String sql = "DELETE FROM hluser WHERE id = ?";
        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                System.getenv("PGUSER"), System.getenv("PGPW"));
                PreparedStatement statement = con.prepareStatement(sql)) {
            statement.setLong(1, id);
            int rowsAffected = statement.executeUpdate();
            if (rowsAffected == 0) {
                throw new SQLException("Delete user failed, no rows affected.");
            }
        } catch (SQLException e) {
            logger.error("Error deleting user", e);
            throw e;
        }
    }

    @Override
    public List<ResponseEntity<HLUser>> getAllUsers() throws SQLException {
        String sql = "select * from hluser";
        List<ResponseEntity<HLUser>> users = new ArrayList<>();
        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                System.getenv("PGUSER"), System.getenv("PGPW"))) {
            PreparedStatement statement = con.prepareStatement(sql);
            ResultSet rs = statement.executeQuery();
            while (rs.next()) {
                HLUser user = new HLUser();
                user.setId(rs.getLong("id"));
                user.setUsername(rs.getString("username"));
                user.setPassword(rs.getString("password"));
                user.setEmail(rs.getString("email"));
                switch (rs.getInt("role")) {
                    case 0:
                        user.setRole(HLRole.Banned);
                        break;
                    case 1:
                        user.setRole(HLRole.Guest);
                        break;
                    case 2:
                        user.setRole(HLRole.Standard);
                        break;
                    case 3:
                        user.setRole(HLRole.VIP);
                        break;
                    case 4:
                        user.setRole(HLRole.Moderator);
                        break;
                    case 5:
                        user.setRole(HLRole.Admin);
                        break;
                    case 6:
                        user.setRole(HLRole.Owner);
                    default:
                        user.setRole(HLRole.Standard);
                        break;
                }
                if (rs.getInt("role") == 0 || rs.getInt("role") == 1) {
                    user.setUserloggedin(false);
                } else {
                    user.setUserloggedin(true);
                    user.setProfileimg(rs.getString("profileimg"));
                    user.setStatusmsg(rs.getString("statusmsg"));
                    user.setUserloggedin(rs.getBoolean("userloggedin"));
                    user.setRegisterdate(rs.getDate("registerdate"));
                    user.setUnbandate(rs.getDate("unbandate"));
                    user.setLastlogindate(rs.getDate("lastlogindate"));
                }
                users.add(ResponseEntity.ok(user));
            }
        } catch (SQLException e) {
            logger.error("Error getting all users", e);
            throw e;
        }
        return users;
    }

    @Override
    public ResponseEntity<HLUser> banUser(Long id) throws SQLException {
        String sql = "UPDATE hluser SET role = ?, unbandate = ? WHERE id = ?";
        try (Connection con = dataSource.getConnection();
                PreparedStatement statement = con.prepareStatement(sql)) {
            statement.setString(1, StringUtils.toString(HLRole.Banned));
            statement.setDate(2, new java.sql.Date(new Date().getTime()));
            statement.setLong(3, id);
            int rowsAffected = statement.executeUpdate();
            if (rowsAffected > 0) {
                return ResponseEntity.ok(null);
            } else {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
            }
        } catch (SQLException e) {
            logger.error("Error banning user", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @Override
    public ResponseEntity<HLUser> updateUser(HLUser user) throws SQLException {
        String sql = "UPDATE hluser SET username = ?, email = ?, role = ?, statusmsg = ?, profileimg = ?, unbandate = ? WHERE id = ?";
        try (Connection con = dataSource.getConnection();
                PreparedStatement statement = con.prepareStatement(sql)) {
            statement.setString(1, user.getUsername());
            statement.setString(2, user.getEmail());
            statement.setString(3, StringUtils.toString(user.getRole()));
            statement.setString(4, user.getStatusmsg());
            statement.setString(5, user.getProfileimg());
            statement.setDate(6, user.getUnbandate());
            statement.setLong(7, user.getId());
            int rowsAffected = statement.executeUpdate();
            if (rowsAffected > 0) {
                return ResponseEntity.ok(user);
            } else {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
            }
        } catch (SQLException e) {
            logger.error("Error updating user", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @Override
    public ResponseEntity<HLUser> unbanUser(HLUser user) throws SQLException {
        String sql = "UPDATE hluser SET unbandate = ? WHERE id = ?";
        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                System.getenv("PGUSER"), System.getenv("PGPW"));
                PreparedStatement statement = con.prepareStatement(sql)) {
            statement.setDate(1, null);
            int rowsAffected = statement.executeUpdate();
            if (rowsAffected > 0) {
                return ResponseEntity.ok(user);
            } else {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
            }
        } catch (SQLException e) {
            logger.error("Error unbanning user", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @Override
    public ResponseEntity<HLUser> changePassword(HLUser user) {
        String sql = "UPDATE hluser SET password = ? WHERE id = ?";
        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                System.getenv("PGUSER"), System.getenv("PGPW"));
                PreparedStatement statement = con.prepareStatement(sql)) {
            statement.setString(1, user.getPassword());
            statement.setLong(2, user.getId());
            int rowsAffected = statement.executeUpdate();
            if (rowsAffected > 0) {
                return ResponseEntity.ok(user);
            } else {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
            }
        } catch (SQLException e) {
            logger.error("Error changing password", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    // end of user code
    // start of art code
    @Override
    public ResponseEntity<?> addArt(Art art) {
        String sql = "INSERT INTO art (artname, artauthor, dateuploaded, artimagefilepath) VALUES (?, ?, ?, ?)";

        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                System.getenv("PGUSER"), System.getenv("PGPW"));
                PreparedStatement statement = con.prepareStatement(sql)) {
            if (art.getArtImageFilePath() == null || art.getArtImageFilePath().isEmpty()
                    || art.getArtImageFilePath().isBlank()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Art image file path is null");
            } else if (art.getArtName() == null || art.getArtName().isEmpty() || art.getArtName().isBlank()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Art name is null");
            } else if (art.getArtAuthor() == null || art.getArtAuthor().isEmpty() || art.getArtAuthor().isBlank()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Art author is null");
            } else {
                statement.setString(1, art.getArtName());
                statement.setString(2, art.getArtAuthor());
                statement.setDate(3, new java.sql.Date(new Date().getTime()));
                statement.setString(4, art.getArtImageFilePath());

                int rowsInserted = statement.executeUpdate();
                if (rowsInserted > 0) {
                    HttpHeaders headers = new HttpHeaders();
                    headers.setContentType(MediaType.TEXT_PLAIN);
                    String path = art.getArtImageFilePath();
                    System.out.println("Art path: " + path);
                    return new ResponseEntity<>(path, headers, HttpStatus.CREATED);
                } else {
                    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed to add art");
                }
            }

        } catch (SQLException ex) {
            ex.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Database error");
        }
    }

    // end of art code
    // start of message code
    @Override
    public List<Message> fetchAllMessages() {
        String sql = "select * from messages order by id";
        List<Message> messages = new ArrayList<>();
        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                System.getenv("PGUSER"), System.getenv("PGPW"))) {
            PreparedStatement statement = con.prepareStatement(sql);
            ResultSet rs = statement.executeQuery();
            while (rs.next()) {
                Message message = new Message();
                message.setId(rs.getLong("id"));
                message.setContent(rs.getString("content"));
                message.setDateSent(rs.getTimestamp("date_sent").toLocalDateTime());
                HLUser user = new HLUserServiceImpl().getUserById(rs.getLong("sender_id"));
                HLUserResponse hluser = new HLUserResponse(user);
                message.setSender(hluser);
                messages.add(message);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return messages;
    }

    @Override
    public void postMessage(Message message) throws SQLException {
        String sql = "INSERT INTO messages (content, sender_id, date_sent) VALUES (?, ?, ?)";
        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                System.getenv("PGUSER"), System.getenv("PGPW"))) {
            PreparedStatement statement = con.prepareStatement(sql);
            statement.setString(1, message.getContent());
            statement.setLong(2, message.getSender().getId());
            statement.setTimestamp(3, Timestamp.valueOf(LocalDateTime.now()));
            statement.executeUpdate();
            System.out.println("Message posted postMessage service: " + message);

        } catch (SQLException e) {
            e.printStackTrace();

        }
    }
    // end of message code

    // start of product code
    @Override
    public Product getProductById(Long id) throws SQLException {

        String sql = "select * from product where id=?";
        Product product = new Product();
        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                System.getenv("PGUSER"), System.getenv("PGPW"))) {

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
        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                System.getenv("PGUSER"), System.getenv("PGPW"))) {

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
        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                System.getenv("PGUSER"), System.getenv("PGPW"))) {

            if (getProductByName(product.getProductname()).getStatusCode() == HttpStatus.NOT_FOUND) {
                PreparedStatement statement = con.prepareStatement(sql);
                statement.setString(1, product.getProductname());
                statement.setBigDecimal(2, product.getPrice());
                statement.setString(3, product.getInventorystatus());
                statement.setString(4, product.getImage());
                statement.setString(5, product.getShoplink());
                statement.executeUpdate();
                return ResponseEntity.status(HttpStatus.OK).body(product);
            } else {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(product);

            }

        } catch (SQLException ex) {
            ex.printStackTrace();
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(product);
        }

    }

    @Override
    public ResponseEntity<Product> getProductByName(String productname) throws SQLException {
        String sql = "select * from product where productname=?";
        Product product = new Product();
        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                System.getenv("PGUSER"), System.getenv("PGPW"))) {

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
        if (product.getId() != null) {
            String sql = "update product set productname=?, price=?, inventorystatus=?, image=?, shoplink=? where id=?";
            try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                    System.getenv("PGUSER"), System.getenv("PGPW"))) {
                Product prod = getProductById(product.getId());
                if (prod.getId() > 0) {
                    PreparedStatement statement = con.prepareStatement(sql);
                    statement.setString(1, product.getProductname());
                    statement.setBigDecimal(2, product.getPrice());
                    statement.setString(3, product.getInventorystatus());
                    statement.setString(4, product.getImage());
                    statement.setString(5, product.getShoplink());
                    statement.setLong(6, product.getId());
                    statement.executeUpdate();
                    return ResponseEntity.status(HttpStatus.OK).body(product);
                } else {
                    return ResponseEntity.status(HttpStatus.NOT_FOUND).body(product);
                }
            }

            catch (SQLException ex) {
                ex.printStackTrace();
            }
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(product);

    }

    @Override
    public void deleteProduct(Long id) throws SQLException {
        if (id > 0 && id instanceof Long) {
            String sql = "delete from product where id=?";
            try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                    System.getenv("PGUSER"), System.getenv("PGPW"))) {

                PreparedStatement statement = con.prepareStatement(sql);
                statement.setLong(1, id);
                statement.executeUpdate();
            }

            catch (SQLException ex) {
                ex.printStackTrace();
            }
        }
    }
    // end of product code

    // start of forum code

    @Override
    public ResponseEntity<?> addPost(Message message) throws SQLException {
        String sql = "INSERT INTO messages (content, sender_id, date_sent, message_context) VALUES (?, ?, ?, ?)";
        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                System.getenv("PGUSER"), System.getenv("PGPW"));
                PreparedStatement statement = con.prepareStatement(sql)) {
            if (message.getContent() == null || message.getContent().isEmpty()
                    || message.getContent().isBlank()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Message content is null");
            } else if (message.getSender() == null || message.getSender().getId() == null) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Message sender is null");
            } else if (message.getMessageContext() == null
                    || StringUtils.isEmpty(StringUtils.toString(message.getMessageContext()))
                    || StringUtils.toString(message.getMessageContext()).isBlank()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Message context is null");
            } else {
                statement.setString(1, message.getContent());
                statement.setLong(2, message.getSender().getId());
                statement.setTimestamp(3, Timestamp.valueOf(LocalDateTime.now()));
                statement.setString(4, StringUtils.toString(MessageContext.Post));

                int rowsInserted = statement.executeUpdate();
                if (rowsInserted > 0) {
                    HttpHeaders headers = new HttpHeaders();
                    headers.setContentType(MediaType.TEXT_PLAIN);
                    String path = message.getContent();
                    System.out.println("Message path: " + path);
                    return new ResponseEntity<>(path, headers, HttpStatus.CREATED);
                } else {
                    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed to add message");
                }
            }

        } catch (SQLException ex) {
            ex.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Database error");
        }

    }

    @Override
    public ResponseEntity<?> addThread(Message message) throws SQLException {
        String sql = "INSERT INTO messages (content, sender_id, date_sent, message_context,title, category) VALUES (?, ?, ?, ?, ?, ?)";
        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                System.getenv("PGUSER"), System.getenv("PGPW"));
                PreparedStatement statement = con.prepareStatement(sql)) {
            if (message.getContent() == null || message.getContent().isEmpty()
                    || message.getContent().isBlank()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Message content is null");
            } else if (message.getSender() == null || message.getSender().getId() == null) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Message sender is null");
            } else if (message.getMessageContext() == null
                    || StringUtils.isEmpty(StringUtils.toString(message.getMessageContext()))
                    || StringUtils.toString(message.getMessageContext()).isBlank()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Message context is null");
            } else {
                statement.setString(1, message.getContent());
                statement.setLong(2, message.getSender().getId());
                statement.setTimestamp(3, Timestamp.valueOf(LocalDateTime.now()));
                statement.setString(4, StringUtils.toString(MessageContext.Thread));
                statement.setString(5, message.getTitle());
                statement.setString(6, message.getCategory());
                int rowsInserted = statement.executeUpdate();
                if (rowsInserted > 0) {
                    HttpHeaders headers = new HttpHeaders();
                    headers.setContentType(MediaType.TEXT_PLAIN);
                    String path = message.getContent();
                    System.out.println("Message path: " + path);
                    return new ResponseEntity<>(path, headers, HttpStatus.CREATED);
                } else {
                    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed to add message");
                }
            }

        } catch (SQLException ex) {
            ex.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Database error");
        }
    }

    @Override
    public ResponseEntity<?> getThreadById(Long id) throws SQLException {
        String sql = "SELECT * FROM messages WHERE id = ? AND message_context = ?"
                + StringUtils.toString(MessageContext.Thread);
        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                System.getenv("PGUSER"), System.getenv("PGPW"));
                PreparedStatement statement = con.prepareStatement(sql)) {
            statement.setLong(1, id);
            statement.setString(2, StringUtils.toString(MessageContext.Thread));
            try (ResultSet rs = statement.executeQuery()) {
                if (rs.next()) {
                    Message message = new Message();
                    message.setId(rs.getLong("id"));
                    message.setContent(rs.getString("content"));
                    message.setDateSent(rs.getTimestamp("date_sent").toLocalDateTime());
                    HLUser user = new HLUserServiceImpl().getUserById(rs.getLong("sender_id"));
                    HLUserResponse hluser = new HLUserResponse(user);
                    message.setSender(hluser);
                    return ResponseEntity.ok(message);
                }
            }
        } catch (SQLException e) {
            logger.error(e.getMessage());
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Thread not found");
    }

    @Override
    public ResponseEntity<?> addProfileComment(Message message) throws SQLException {
        String sql = "INSERT INTO messages (content, sender_id, date_sent, message_context) VALUES (?, ?, ?,"
                + StringUtils.toString(MessageContext.Comment) + ")";
        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                System.getenv("PGUSER"), System.getenv("PGPW"));
                PreparedStatement statement = con.prepareStatement(sql)) {
            if (message.getContent() == null || message.getContent().isEmpty()
                    || message.getContent().isBlank()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Message content is null");
            } else if (message.getSender() == null || message.getSender().getId() == null) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Message sender is null");
            } else if (message.getMessageContext() == null
                    || StringUtils.isEmpty(StringUtils.toString(message.getMessageContext()))
                    || StringUtils.toString(message.getMessageContext()).isBlank()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Message context is null");
            } else {
                statement.setString(1, message.getContent());
                statement.setLong(2, message.getSender().getId());
                statement.setTimestamp(3, Timestamp.valueOf(LocalDateTime.now()));

                int rowsInserted = statement.executeUpdate();
                if (rowsInserted > 0) {
                    HttpHeaders headers = new HttpHeaders();
                    headers.setContentType(MediaType.TEXT_PLAIN);
                    String path = message.getContent();
                    System.out.println("Message path: " + path);
                    return new ResponseEntity<>(path, headers, HttpStatus.CREATED);
                } else {
                    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed to add message");
                }
            }

        } catch (SQLException ex) {
            ex.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Database error");
        }

    }

    @Override
    public ResponseEntity<?> addCredits(HLUser user, int credits) throws SQLException {
        String sql = "UPDATE hluser SET credits = ? WHERE id = ?";
        try (Connection con = dataSource.getConnection();
                PreparedStatement statement = con.prepareStatement(sql)) {
            statement.setInt(1, user.getCredits() + credits);
            statement.setLong(2, user.getId());
            int rowsAffected = statement.executeUpdate();
            if (rowsAffected > 0) {
                return ResponseEntity.ok(user);
            } else {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
            }
        } catch (SQLException e) {
            logger.error("Error adding credits", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    // end of forum code
}