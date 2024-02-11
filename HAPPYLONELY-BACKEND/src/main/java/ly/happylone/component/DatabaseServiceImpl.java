package ly.happylone.component;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.ObjectProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;

import org.springframework.stereotype.Component;
import org.thymeleaf.util.StringUtils;

import ly.happylone.model.Art;
import ly.happylone.model.EmailRequest;
import ly.happylone.model.HLBadge;
import ly.happylone.model.HLRole;
import ly.happylone.model.HLUser;
import ly.happylone.model.HLUserResponse;
import ly.happylone.model.LoginRequest;
import ly.happylone.model.Message;
import ly.happylone.model.Thread;
import ly.happylone.model.Post;
import ly.happylone.model.Product;
import ly.happylone.model.RegisterRequest;

import javax.sql.DataSource;

import java.io.IOException;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.UUID;
import java.util.regex.Pattern;
import java.util.stream.IntStream;

import ly.happylone.service.DatabaseService;
import ly.happylone.service.JwtService;
import org.springframework.mail.javamail.JavaMailSenderImpl;

import ly.happylone.model.Email;

@Component
public class DatabaseServiceImpl implements DatabaseService {
    private static final Logger logger = LoggerFactory.getLogger(DatabaseService.class);

    private PasswordEncoder passwordEncoder;
    private DataSource dataSource;
    private ObjectProvider<AuthenticationManager> authenticationManagerProvider;

    public DatabaseServiceImpl(@Lazy PasswordEncoder passwordEncoder, DataSource dataSource,
            ObjectProvider<AuthenticationManager> authenticationManagerProvider,
            JwtService jwtService) {
        this.passwordEncoder = passwordEncoder;
        this.dataSource = dataSource;
        this.authenticationManagerProvider = authenticationManagerProvider;
        this.jwtService = jwtService;
    }

    @Autowired
    private JwtService jwtService;

    // start of hlauth code DatabaseServiceImpl
    // 54.39.246.104:2304

    @Override
    public ResponseEntity<?> login(LoginRequest loginRequest) {
        try {
            HLUser user = getUserFromDatabase(loginRequest.getUsername());
            if (user == null || !passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
            }

            Authentication authentication = authenticateUser(user, loginRequest.getPassword());
            String token = jwtService.generateToken(authentication);
            setAuthenticationInContext(authentication, token);
            user.setLastlogindate(new java.sql.Date(System.currentTimeMillis()));
            user.setToken(token);
            user.setPassword(null);
            loginRequest.setPassword(null);

            return ResponseEntity.ok(user);
        } catch (SQLException ex) {
            ex.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred");
        }
    }

    private HLUser getUserFromDatabase(String username) throws SQLException {
        String sql = "select * from hluser where username=?";
        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                System.getenv("PGUSER"), System.getenv("PGPW"))) {

            PreparedStatement statement = con.prepareStatement(sql);
            statement.setString(1, username);
            ResultSet rs = statement.executeQuery();

            if (rs.next()) {
                HLUser user = new HLUser();
                user.setUsername(username);
                user.setPassword(rs.getString("password"));
                user.setRole(HLRole.values()[rs.getInt("role")]); // assuming the role is stored as an integer in the
                                                                  // database
                return user;
            } else {
                return null;
            }
        }
    }

    private Authentication authenticateUser(HLUser user, String rawPassword) {
        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(user.getRole().getRoleName()));
        AuthenticationManager authenticationManager = authenticationManagerProvider.getIfAvailable();
        if (authenticationManager != null) {
            return authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                    user.getUsername(), rawPassword, authorities));
        }
        throw new IllegalStateException("AuthenticationManager is not available.");
    }

    private void setAuthenticationInContext(Authentication authentication, String token) {
        CustomAuthentication customAuthentication = new CustomAuthentication(
                authentication.getPrincipal(),
                authentication.getCredentials(),
                authentication.getAuthorities(),
                token);
        SecurityContextHolder.getContext().setAuthentication(customAuthentication);
    }

    @Override
    public Boolean isProfaneUsername(String username) {
        Pattern p = Pattern.compile("[^a-z0-9 ]", Pattern.CASE_INSENSITIVE);

        List<String> a = Arrays.asList("^[a@][s\\$][s\\$]$", "[a@][s\\$][s\\$]h[o0][l1][e3][s\\$]?",
                "b[a@][s\\$][t\\+][a@]rd ", "b[e3][a@][s\\$][t\\+][i1][a@]?[l1]([i1][t\\+]y)?",
                "b[e3][a@][s\\$][t\\+][i1][l1][i1][t\\+]y", "b[e3][s\\$][t\\+][i1][a@][l1]([i1][t\\+]y)?",
                "b[i1][t\\+]ch[s\\$]?", "b[i1][t\\+]ch[e3]r[s\\$]?", "b[i1][t\\+]ch[e3][s\\$]", "b[i1][t\\+]ch[i1]ng?",
                "b[l1][o0]wj[o0]b[s\\$]?", "c[l1][i1][t\\+]", "^(c|k|ck|q)[o0](c|k|ck|q)[s\\$]?$",
                "(c|k|ck|q)[o0](c|k|ck|q)[s\\$]u", "(c|k|ck|q)[o0](c|k|ck|q)[s\\$]u(c|k|ck|q)[e3]d ",
                "(c|k|ck|q)[o0](c|k|ck|q)[s\\$]u(c|k|ck|q)[e3]r", "(c|k|ck|q)[o0](c|k|ck|q)[s\\$]u(c|k|ck|q)[i1]ng",
                "(c|k|ck|q)[o0](c|k|ck|q)[s\\$]u(c|k|ck|q)[s\\$]", "^cum[s\\$]?$", "cumm??[e3]r", "cumm?[i1]ngcock",
                "(c|k|ck|q)um[s\\$]h[o0][t\\+]", "(c|k|ck|q)un[i1][l1][i1]ngu[s\\$]",
                "(c|k|ck|q)un[i1][l1][l1][i1]ngu[s\\$]", "(c|k|ck|q)unn[i1][l1][i1]ngu[s\\$]",
                "(c|k|ck|q)un[t\\+][s\\$]?", "(c|k|ck|q)un[t\\+][l1][i1](c|k|ck|q)",
                "(c|k|ck|q)un[t\\+][l1][i1](c|k|ck|q)[e3]r", "(c|k|ck|q)un[t\\+][l1][i1](c|k|ck|q)[i1]ng",
                "cyb[e3]r(ph|f)u(c|k|ck|q)", "d[a@]mn", "d[i1]ck", "d[i1][l1]d[o0]", "d[i1][l1]d[o0][s\\$]",
                "d[i1]n(c|k|ck|q)", "d[i1]n(c|k|ck|q)[s\\$]", "[e3]j[a@]cu[l1]", "(ph|f)[a@]g[s\\$]?",
                "(ph|f)[a@]gg[i1]ng", "(ph|f)[a@]gg?[o0][t\\+][s\\$]?", "(ph|f)[a@]gg[s\\$]",
                "(ph|f)[e3][l1][l1]?[a@][t\\+][i1][o0]", "(ph|f)u(c|k|ck|q)", "(ph|f)u(c|k|ck|q)[s\\$]?",
                "g[a@]ngb[a@]ng[s\\$]?", "g[a@]ngb[a@]ng[e3]d", "g[a@]y", "h[o0]m?m[o0]", "h[o0]rny",
                "j[a@](c|k|ck|q)\\-?[o0](ph|f)(ph|f)?", "j[e3]rk\\-?[o0](ph|f)(ph|f)?", "j[i1][s\\$z][s\\$z]?m?",
                "[ck][o0]ndum[s\\$]?", "mast(e|ur)b(8|ait|ate)", "n+[i1]+[gq]+[e3]*r+[s\\$]*",
                "[o0]rg[a@][s\\$][i1]m[s\\$]?", "[o0]rg[a@][s\\$]m[s\\$]?", "p[e3]nn?[i1][s\\$]", "p[i1][s\\$][s\\$]",
                "p[i1][s\\$][s\\$][o0](ph|f)(ph|f) ", "p[o0]rn", "p[o0]rn[o0][s\\$]?", "p[o0]rn[o0]gr[a@]phy",
                "pr[i1]ck[s\\$]?", "pu[s\\$][s\\$][i1][e3][s\\$]", "pu[s\\$][s\\$]y[s\\$]?", "[s\\$][e3]x",
                "[s\\$]h[i1][t\\+][s\\$]?", "[s\\$][l1]u[t\\+][s\\$]?", "[s\\$]mu[t\\+][s\\$]?", "[s\\$]punk[s\\$]?",
                "[t\\+]w[a@][t\\+][s\\$]?");
        if (p.matcher(username).find()
                || a.stream().anyMatch(username::matches)) {
            return true;
        }
        return false;

    }

    public HLUser findHlUserByUsername(String username) {
        return getUserByName(username);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        if (username == null || username.isEmpty() || username.isBlank()) {
            throw new UsernameNotFoundException("Username cannot be null");
        }
        if (isProfaneUsername(username)) {
            throw new UsernameNotFoundException("Username cannot contain profanity");
        }
        HLUser hlUser = getUserByName(username);
        if (hlUser == null) {
            throw new UsernameNotFoundException("User not found");
        }

        // Update last login and other fields
        hlUser.setLastlogindate(new java.sql.Date(System.currentTimeMillis()));
        hlUser.setUserloggedin(true);
        HLUserResponse hlUserResponse = new HLUserResponse(hlUser);
        String sql = "insert into hluser_response (id, username, profileimg, statusmsg, gptapikey) values (?, ?, ?, ?, ?)";
        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                System.getenv("PGUSER"), System.getenv("PGPW"))) {

            if (getUserByUsernameMin(hlUserResponse.getUsername())
                    .getStatusCode() == HttpStatus.NOT_FOUND) {
                System.out.println("User not found, adding to hluser_response");
                PreparedStatement statement = con.prepareStatement(sql);
                statement.setString(1, hlUser.getId()); // Use hluser id for hluser_response id
                statement.setString(2, hlUserResponse.getUsername());
                statement.setString(3, hlUserResponse.getProfileimg());
                statement.setString(4, hlUserResponse.getStatusmsg());
                statement.setString(5, hlUser.getGptapikey());
                statement.executeUpdate();
            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }

        return User.builder()
                .username(hlUser.getUsername())
                .password(hlUser.getPassword())
                .roles(hlUser.getRole().name())
                .accountLocked(hlUser.getUnbandate() != null)
                .build();
    }

    public ResponseEntity<?> register(RegisterRequest registerRequest) throws SQLException {
        String sql = "insert into hluser (id, email, username, password, registerdate, unbandate, statusmsg, profileimg, userloggedin, role) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        System.out.println("in register service");
        if (registerRequest.getUsername() == null || registerRequest.getUsername().isEmpty()
                || registerRequest.getUsername().isBlank()) {
            throw new UsernameNotFoundException("Username cannot be null");
        }
        if (isProfaneUsername(registerRequest.getUsername())) {
            throw new UsernameNotFoundException("Username cannot contain profanity");
        }
        boolean userExists = userExists(registerRequest.getUsername().trim());
        System.out.println("Does user exist? " + userExists);
        if (!userExists) {
            HLUser hlUser = new HLUser();

            try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                    System.getenv("PGUSER"), System.getenv("PGPW"))) {
                PreparedStatement statement = con.prepareStatement(sql);
                String id = UUID.randomUUID().toString();
                statement.setString(1, id); // Generate UUID for id
                statement.setString(2, registerRequest.getEmail());
                statement.setString(3, registerRequest.getUsername());
                statement.setString(4, passwordEncoder.encode(registerRequest.getPassword()));
                statement.setDate(5, new java.sql.Date(System.currentTimeMillis()));
                statement.setDate(6, null);
                statement.setString(7, "I'm new here!");
                statement.setString(8, "https://i.imgur.com/mCHMpLT.png");
                statement.setBoolean(9, false);
                statement.setInt(10, HLRole.Standard.ordinal());

                int rowsUpdated = statement.executeUpdate();
                if (rowsUpdated > 0) {
                    System.out.println("User added successfully");
                    hlUser.setId(id);
                    return ResponseEntity.ok(hlUser);
                } else {
                    System.out.println("User not added");
                    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed to add user");
                }
            } catch (Exception e) {
                System.out.println("Exception while adding user: " + e.getMessage());
                e.printStackTrace();
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred");
            }
        } else {
            System.out.println("User already exists");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User already exists");
        }
    }

    // start of user code DatabaseServiceImpl

    @Override
    public HLUserResponse addChatGptUser(HLUserResponse user) throws SQLException {
        String sql = "insert into hluser_response (id, username, profileimg, statusmsg) values (?, ?, ?, ?)";
        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                System.getenv("PGUSER"), System.getenv("PGPW"))) {
            PreparedStatement statement = con.prepareStatement(sql);
            statement.setString(1, user.getId());
            statement.setString(2, user.getUsername());
            statement.setString(3, user.getProfileimg());
            statement.setString(4, user.getStatusmsg());
            int rowsUpdated = statement.executeUpdate();
            if (rowsUpdated > 0) {
                return user;
            }
        }
        return null;
    }

    @Override
    public HLUser getUserById(String id) throws SQLException {
        String sql = "select * from hluser where id=?";
        HLUser user = new HLUser();
        user.setId(id);
        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                System.getenv("PGUSER"), System.getenv("PGPW"))) {

            PreparedStatement statement = con.prepareStatement(sql);
            statement.setString(1, user.getId());
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
    public boolean updateUserGptApiKey(String username, String apiKey) throws SQLException {
        String sql = "UPDATE hluser_response SET gptapikey = ? WHERE username = ?";
        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                System.getenv("PGUSER"), System.getenv("PGPW"))) {
            PreparedStatement statement = con.prepareStatement(sql);
            statement.setString(1, apiKey);
            statement.setString(2, username);
            int rowsUpdated = statement.executeUpdate();
            if (rowsUpdated > 0) {
                return true;
            }
        }
        return false;
    }

    @Override
    public HLUser getLoggedInUser() throws SQLException {
        // get user by authentication context
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null) {
            return null;
        }
        String username = authentication.getName();
        return getUserByName(username);
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
        user.setId(rs.getString("id"));
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
            user.setGptapikey(rs.getString("gptapikey"));
        }
        return user;

    }

    @Override
    public boolean userHasChatGptApiKey(String username) throws SQLException {
        String sql = "SELECT gptapikey FROM hluser WHERE username = ?";
        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                System.getenv("PGUSER"), System.getenv("PGPW"))) {
            PreparedStatement statement = con.prepareStatement(sql);
            statement.setString(1, username);
            ResultSet rs = statement.executeQuery();
            if (rs.next()) {
                return rs.getString("gptapikey") != null;
            }
        }
        return false;
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
        user.setId(rs.getString("id"));
        user.setUsername(rs.getString("username"));
        user.setProfileimg(rs.getString("profileimg"));
        user.setStatusmsg(rs.getString("statusmsg"));
        user.setGptapikey(rs.getString("gptapikey"));
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
    public ResponseEntity<HLUserResponse> editUser(HLUserResponse user) throws SQLException {
        if (!isUserAdmin(getLoggedInUser().getUsername())) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(null);
        }
        String sql = "UPDATE hluser_response SET username=?, profileimg=?, statusmsg=? WHERE id=?";
        try (Connection con = dataSource.getConnection();
                PreparedStatement statement = con.prepareStatement(sql)) {
            statement.setString(1, user.getUsername());
            statement.setString(2, user.getProfileimg());
            statement.setString(3, user.getStatusmsg());
            statement.setString(4, user.getId());
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
            statement.setString(2, user.getId());
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
            statement.setString(2, user.getId());
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
            statement.setString(2, user.getId());
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
            statement.setString(2, user.getId());
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
            statement.setString(2, user.getId());
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
            statement.setString(2, user.getId());
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
    public void deleteUser(String id) throws SQLException {
        if (!isUserAdmin(getLoggedInUser().getUsername())) {
            throw new SQLException("User not authorized to delete user");
        }
        String sql = "DELETE FROM hluser WHERE id = ?";
        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                System.getenv("PGUSER"), System.getenv("PGPW"));
                PreparedStatement statement = con.prepareStatement(sql)) {
            statement.setString(1, id);
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
                user.setId(rs.getString("id"));
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
    public ResponseEntity<HLUser> banUser(String id) throws SQLException {
        if (!isUserAdmin(getLoggedInUser().getUsername())) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(null);
        }
        String sql = "UPDATE hluser SET role = ?, unbandate = ? WHERE id = ?";
        try (Connection con = dataSource.getConnection();
                PreparedStatement statement = con.prepareStatement(sql)) {
            statement.setString(1, StringUtils.toString(HLRole.Banned));
            statement.setDate(2, new java.sql.Date(new Date().getTime()));
            statement.setString(3, id);
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
        String sql = "UPDATE hluser SET username = ?, email = ?, role = ?, statusmsg = ?, profileimg = ?, unbandate = ?, gptapikey = ? WHERE id = ?";
        try (Connection con = dataSource.getConnection();
                PreparedStatement statement = con.prepareStatement(sql)) {
            statement.setString(1, user.getUsername());
            statement.setString(2, user.getEmail());
            statement.setInt(3, user.getRole().ordinal());
            statement.setString(4, user.getStatusmsg());
            statement.setString(5, user.getProfileimg());
            statement.setDate(6, user.getUnbandate());
            statement.setString(7, user.getGptapikey());
            statement.setString(8, user.getId());
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
        if (!isUserAdmin(getLoggedInUser().getUsername())) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(null);
        }
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
            statement.setString(2, user.getId());
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
        String sql = "INSERT INTO art (id, artname, artauthor, dateuploaded, artimagefilepath) VALUES (?, ?, ?, ?, ?)";

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
                String id = UUID.randomUUID().toString();
                statement.setString(1, id); // Generate UUID for id
                statement.setString(2, art.getArtName());
                statement.setString(3, art.getArtAuthor());
                statement.setDate(4, new java.sql.Date(new Date().getTime()));
                statement.setString(5, art.getArtImageFilePath());

                int rowsInserted = statement.executeUpdate();
                if (rowsInserted > 0) {
                    HttpHeaders headers = new HttpHeaders();
                    headers.setContentType(MediaType.APPLICATION_JSON);
                    art.setId(id); // Set the generated id to the art object
                    return new ResponseEntity<>(art, headers, HttpStatus.CREATED);
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
                message.setId(rs.getString("id"));
                message.setContent(rs.getString("content"));
                message.setDateSent(rs.getTimestamp("date_sent").toLocalDateTime());
                HLUser user = getUserById(rs.getString("sender_id"));
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
    public void postMessage(Message message) throws SQLException, IOException {
        String content = message.getContent();
        int contentLength = content.length();
        if (contentLength > 255) {
            // Split content into chunks and insert each chunk into the database
            String sql = "INSERT INTO messages (id, content, sender_id, date_sent, prev_message_id, next_message_id) VALUES (?, ?, ?, ?, ?, ?)";
            try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                    System.getenv("PGUSER"), System.getenv("PGPW"))) {
                String[] prevMessageId = { null }; // Use an array to allow modification inside lambda
                IntStream.range(0, (contentLength + 254) / 255).forEach(i -> {
                    int start = i * 255;
                    String chunk = content.substring(start, Math.min(start + 255, contentLength));
                    String messageId = UUID.randomUUID().toString(); // Generate UUID for id
                    try {
                        PreparedStatement statement = con.prepareStatement(sql);
                        statement.setString(1, messageId);
                        statement.setString(2, chunk);
                        statement.setString(3, message.getSender().getId());
                        statement.setTimestamp(4, Timestamp.valueOf(LocalDateTime.now()));
                        statement.setString(5, prevMessageId[0]);
                        statement.setString(6, null);
                        statement.executeUpdate();
                        // Update next_message_id of previous message
                        if (prevMessageId[0] != null) {
                            PreparedStatement updateStatement = con
                                    .prepareStatement("UPDATE messages SET next_message_id = ? WHERE id = ?");
                            updateStatement.setString(1, messageId);
                            updateStatement.setString(2, prevMessageId[0]);
                            updateStatement.executeUpdate();
                        }
                        prevMessageId[0] = messageId;
                    } catch (SQLException e) {
                        e.printStackTrace();
                    }
                });
                System.out.println("Message posted postMessage service: " + message);
            } catch (SQLException e) {
                e.printStackTrace();
            }
        } else {
            // Insert into database
            String sql = "INSERT INTO messages (id, content, sender_id, date_sent) VALUES (?, ?, ?, ?)";
            try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                    System.getenv("PGUSER"), System.getenv("PGPW"))) {
                PreparedStatement statement = con.prepareStatement(sql);
                statement.setString(1, UUID.randomUUID().toString()); // Generate UUID for id
                statement.setString(2, content);
                statement.setString(3, message.getSender().getId());
                statement.setTimestamp(4, Timestamp.valueOf(LocalDateTime.now()));
                statement.executeUpdate();
                System.out.println("Message posted postMessage service: " + message);
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
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
                product.setId(rs.getString("id"));
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

    private boolean isUserAdmin(String username) {
        return getUserRole(username) >= 5;
    }

    @Override
    public ResponseEntity<Product> addProduct(Product product) throws SQLException {
        if (!isUserAdmin(getLoggedInUser().getUsername())) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(null);
        }
        String sql = "INSERT INTO product (id, productname, price, inventorystatus, image, shoplink) VALUES (?, ?, ?, ?, ?, ?)";
        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                System.getenv("PGUSER"), System.getenv("PGPW"))) {

            if (getProductByName(product.getProductname()).getStatusCode() == HttpStatus.NOT_FOUND) {
                PreparedStatement statement = con.prepareStatement(sql);
                String id = UUID.randomUUID().toString();
                statement.setString(1, id); // Generate UUID for id
                statement.setString(2, product.getProductname());
                statement.setBigDecimal(3, product.getPrice());
                statement.setString(4, product.getInventorystatus());
                statement.setString(5, product.getImage());
                statement.setString(6, product.getShoplink());
                statement.executeUpdate();
                product.setId(id);
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

                product.setId(rs.getString("id"));
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
    public Product getProductById(String id) throws SQLException {
        String sql = "select * from product where id=?";
        Product product = new Product();
        product.setId(id);
        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                System.getenv("PGUSER"), System.getenv("PGPW"))) {

            PreparedStatement statement = con.prepareStatement(sql);
            statement.setString(1, product.getId());
            ResultSet rs = statement.executeQuery();
            if (rs.next()) {
                product.setProductname(rs.getString("productname"));
                product.setPrice(rs.getBigDecimal("price"));
                product.setInventorystatus(rs.getString("inventorystatus"));
                product.setImage(rs.getString("image"));
                product.setShoplink(rs.getString("shoplink"));
            } else {
                System.out.println("No product found with ID " + product.getId());
                throw new SQLException("No product found with ID " + product.getId());
            }
        }

        catch (SQLException ex) {
            ex.printStackTrace();
        }
        return product;
    }

    @Override
    public ResponseEntity<Product> updateProduct(Product product) throws SQLException {
        if (!isUserAdmin(getLoggedInUser().getUsername())) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(null);
        }
        if (product.getId() != null) {
            String sql = "update product set productname=?, price=?, inventorystatus=?, image=?, shoplink=? where id=?";
            try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                    System.getenv("PGUSER"), System.getenv("PGPW"))) {
                Product prod = getProductById(product.getId());
                if (prod.getId() != null && prod.getId().isBlank() == false) {
                    PreparedStatement statement = con.prepareStatement(sql);
                    statement.setString(1, product.getProductname());
                    statement.setBigDecimal(2, product.getPrice());
                    statement.setString(3, product.getInventorystatus());
                    statement.setString(4, product.getImage());
                    statement.setString(5, product.getShoplink());
                    statement.setString(6, product.getId());
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
    public void deleteProduct(String id) throws SQLException {
        if (!id.isBlank() && id instanceof String) {
            String sql = "delete from product where id=?";
            try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                    System.getenv("PGUSER"), System.getenv("PGPW"))) {

                PreparedStatement statement = con.prepareStatement(sql);
                statement.setString(1, id);
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
    public ResponseEntity<?> addPost(Post post) throws SQLException {
        // Check if the thread exists
        String checkThreadSql = "SELECT COUNT(*) FROM threads WHERE id = ?";
        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                System.getenv("PGUSER"), System.getenv("PGPW"));
                PreparedStatement checkThreadStatement = con.prepareStatement(checkThreadSql)) {
            checkThreadStatement.setString(1, post.getThread().getId());
            ResultSet rs = checkThreadStatement.executeQuery();
            if (rs.next() && rs.getInt(1) == 0) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Thread does not exist");
            }
        } catch (SQLException ex) {
            ex.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Database error");
        }

        // If the thread exists, insert the post
        String sql = "INSERT INTO posts (id, content, sender_id, date_sent, thread_id) VALUES (?, ?, ?, ?, ?)";
        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                System.getenv("PGUSER"), System.getenv("PGPW"));
                PreparedStatement statement = con.prepareStatement(sql)) {
            if (post.getContent() == null || post.getContent().isEmpty()
                    || post.getContent().isBlank()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Message content is null");
            } else if (post.getSender() == null || post.getSender().getId() == null) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Message sender is null");
            } else {
                String id = UUID.randomUUID().toString();
                statement.setString(1, id); // Generate UUID for id
                statement.setString(2, post.getContent());
                statement.setString(3, post.getSender().getId());
                statement.setTimestamp(4, Timestamp.valueOf(LocalDateTime.now()));
                statement.setString(5, post.getThread().getId());
                int rowsInserted = statement.executeUpdate();
                if (rowsInserted > 0) {
                    HttpHeaders headers = new HttpHeaders();
                    headers.setContentType(MediaType.TEXT_PLAIN);
                    post.setId(id);
                    return new ResponseEntity<>(post, headers, HttpStatus.CREATED);
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
    public ResponseEntity<?> getPostsByThreadId(String id) throws SQLException {
        String sql = "SELECT * FROM posts WHERE thread_id = ?";
        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                System.getenv("PGUSER"), System.getenv("PGPW"));
                PreparedStatement statement = con.prepareStatement(sql)) {
            statement.setString(1, id);
            try (ResultSet rs = statement.executeQuery()) {
                List<Post> posts = new ArrayList<>();
                while (rs.next()) {
                    Post post = new Post();
                    post.setId(rs.getString("id"));
                    post.setContent(rs.getString("content"));
                    post.setDateSent(rs.getDate("date_sent"));
                    HLUser user = new HLUser();
                    user = getUserById(rs.getString("sender_id"));
                    HLUserResponse hluser = new HLUserResponse(user);
                    post.setSender(hluser);
                    posts.add(post);
                }
                return ResponseEntity.ok(posts);
            }
        } catch (SQLException e) {
            logger.error(e.getMessage());
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Posts not found");
    }

    @Override
    public ResponseEntity<?> addThread(Thread thread) throws SQLException {
        String sql = "INSERT INTO threads (id, content, sender_id, date_sent, title, category) VALUES (?, ?, ?, ?, ?, ?)";
        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                System.getenv("PGUSER"), System.getenv("PGPW"));
                PreparedStatement statement = con.prepareStatement(sql)) {
            System.out.println(
                    "[addThread]::Thread Sender ID: " + thread.getSender().getId()
                            + " "
                            + thread.getSender().getUsername());
            HLUser user = new HLUser();
            user = getUserById(thread.getSender().getId());
            if (user == null) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User is null");
            } else if (thread.getContent() == null || thread.getContent().isEmpty()
                    || thread.getContent().isBlank()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Message content is null");
            } else if (thread.getSender() == null || thread.getSender().getId() == null) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Message sender is null");
            } else if (user.getRole() == HLRole.Banned || user.getRole() == HLRole.Guest) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User is not allowed to post");
            } else if (thread.getTitle() == null || thread.getTitle().isEmpty() || thread.getTitle().isBlank()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Thread title is null");
            } else if (thread.getCategory() == null || thread.getCategory().isEmpty()
                    || thread.getCategory().isBlank()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Thread category is null");
            } else {
                System.out.println("content: " + thread.getContent() + " sender id: " + thread.getSender().getId()
                        + " message title: " + thread.getTitle() + "message category: "
                        + thread.getCategory());
                String id = UUID.randomUUID().toString();
                statement.setString(1, id); // Generate UUID for id
                statement.setString(2, thread.getContent());
                statement.setString(3, thread.getSender().getId());
                statement.setTimestamp(4, Timestamp.valueOf(LocalDateTime.now()));
                statement.setString(5, thread.getTitle());
                statement.setString(6, thread.getCategory());
                int rowsInserted = statement.executeUpdate();
                if (rowsInserted > 0) {
                    HttpHeaders headers = new HttpHeaders();
                    headers.setContentType(MediaType.APPLICATION_JSON);
                    thread.setId(id);
                    return new ResponseEntity<>(thread, headers, HttpStatus.CREATED);
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
    public ResponseEntity<?> getThreads() throws SQLException {
        String sql = "SELECT * FROM threads ORDER BY date_sent DESC";

        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                System.getenv("PGUSER"), System.getenv("PGPW"));
                PreparedStatement statement = con.prepareStatement(sql)) {
            try (ResultSet rs = statement.executeQuery()) {
                List<Thread> threads = new ArrayList<>();
                while (rs.next()) {
                    Thread thread = new Thread();
                    thread.setId(rs.getString("id"));
                    thread.setContent(rs.getString("content"));
                    thread.setDateSent(rs.getTimestamp("date_sent").toLocalDateTime());
                    thread.setTitle(rs.getString("title"));
                    HLUser user = new HLUser();
                    user = getUserById(rs.getString("sender_id"));
                    HLUserResponse hluser = new HLUserResponse(user);
                    thread.setSender(hluser);
                    threads.add(thread);
                }
                return ResponseEntity.ok(threads);
            }
        } catch (SQLException e) {
            logger.error(e.getMessage());
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Threads not found");
    }

    @Override
    public ResponseEntity<?> getThreadById(String id) throws SQLException {
        String sql = "SELECT * FROM threads WHERE id = ?";
        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                System.getenv("PGUSER"), System.getenv("PGPW"));
                PreparedStatement statement = con.prepareStatement(sql)) {
            statement.setString(1, id);
            try (ResultSet rs = statement.executeQuery()) {
                if (rs.next()) {
                    Thread thread = new Thread();
                    thread.setId(rs.getString("id"));
                    thread.setContent(rs.getString("content"));
                    thread.setDateSent(rs.getTimestamp("date_sent").toLocalDateTime());
                    thread.setTitle(rs.getString("title"));
                    HLUser user = new HLUser();
                    user = getUserById(rs.getString("sender_id"));
                    HLUserResponse hluser = new HLUserResponse(user);
                    thread.setSender(hluser);
                    return ResponseEntity.ok(thread);
                } else {
                    return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Thread not found");
                }
            }
        } catch (SQLException e) {
            logger.error(e.getMessage());
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Thread not found");
    }

    @Override
    public ResponseEntity<?> addProfileComment(Message message) throws SQLException {
        String sql = "INSERT INTO comments (id, content, sender_id, date_sent) VALUES (?, ?, ?, ?)";
        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                System.getenv("PGUSER"), System.getenv("PGPW"));
                PreparedStatement statement = con.prepareStatement(sql)) {
            if (message.getContent() == null || message.getContent().isEmpty()
                    || message.getContent().isBlank()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Message content is null");
            } else if (message.getSender() == null || message.getSender().getId() == null) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Message sender is null");
            } else {
                String id = UUID.randomUUID().toString(); // Generate UUID for id
                statement.setString(1, id);
                statement.setString(2, message.getContent());
                statement.setString(3, message.getSender().getId());
                statement.setTimestamp(4, Timestamp.valueOf(LocalDateTime.now()));

                int rowsInserted = statement.executeUpdate();
                if (rowsInserted > 0) {
                    HttpHeaders headers = new HttpHeaders();
                    headers.setContentType(MediaType.APPLICATION_JSON);
                    message.setId(id); // Set the generated id to the message object
                    return new ResponseEntity<>(message, headers, HttpStatus.CREATED);
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
            statement.setString(2, user.getId());
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

    // start of email code
    @Autowired
    private JavaMailSender emailSender;

    @Override
    public ResponseEntity<?> sendEmail(EmailRequest emailRequest) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(emailRequest.getEmail());
            message.setTo(emailRequest.getSendTo());
            message.setSubject(emailRequest.getSubject());
            message.setText(emailRequest.getMessage());
            emailSender.send(message);
            return ResponseEntity.ok("Email sent successfully");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to send email");
        }
    }

    @Autowired
    private JavaMailSender javaMailSender;

    @Override
    public ResponseEntity<?> getEmails() {
        List<Email> emails = new ArrayList<>();

        // Get the authenticated user
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && authentication.isAuthenticated()) {
            // Get the email from the JavaMailSender
            String email = ((JavaMailSenderImpl) javaMailSender).getUsername();

            Email emailObj = new Email();
            emailObj.setId(authentication.getName()); // Use the username as the ID
            emailObj.setEmail(email);
            emails.add(emailObj);

            return ResponseEntity.ok(emails);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User is not authenticated");
        }
    }

}