package ly.happylone.service;

import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Arrays;
import java.util.List;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import ly.happylone.model.HLRole;
import ly.happylone.model.HLUser;
import ly.happylone.model.HLUserResponse;
import ly.happylone.model.RegisterRequest;

@Service
public class CustomUserDetailsService implements UserDetailsService {
    @Autowired
    HLUserService hlUserService;
    private PasswordEncoder passwordEncoder;

    @Autowired
    public CustomUserDetailsService(@Lazy PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    public HLUser findHlUserByUsername(String username) {
        return hlUserService.getUserByName(username);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Pattern p = Pattern.compile("[^a-z0-9 ]", Pattern.CASE_INSENSITIVE);
        if (username == null || username.isEmpty() || username.isBlank()) {
            throw new UsernameNotFoundException("Username cannot be null");
        }
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
            throw new UsernameNotFoundException("Username cannot contain special characters or profanity");
        }
        HLUser hlUser = hlUserService.getUserByName(username);
        if (hlUser == null) {
            throw new UsernameNotFoundException("User not found");
        }

        // Update last login and other fields
        hlUser.setLastlogindate(new Date(System.currentTimeMillis()));
        hlUser.setUserloggedin(true);
        HLUserResponse hlUserResponse = new HLUserResponse(hlUser);
        String sql = "insert into hluser_response (username, profileimg, statusmsg) values (?, ?, ?)";
        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                System.getenv("PGUSER"), System.getenv("PGPW"))) {

            if (hlUserService.getUserByUsernameMin(hlUserResponse.getUsername())
                    .getStatusCode() == HttpStatus.NOT_FOUND) {
                System.out.println("User not found, adding to hluser_response");
                PreparedStatement statement = con.prepareStatement(sql);
                statement.setString(1, hlUserResponse.getUsername());
                statement.setString(2, hlUserResponse.getProfileimg());
                statement.setString(3, hlUserResponse.getStatusmsg());
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

    public HLUser register(RegisterRequest registerRequest) throws SQLException {
        String sql = "insert into hluser (email, username, password, registerdate, lastlogindate, unbandate, statusmsg, profileimg, userloggedin, role) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        System.out.println("in register service");
        if (registerRequest.getUsername() == null || registerRequest.getUsername().isEmpty()
                || registerRequest.getUsername().isBlank()) {
            throw new UsernameNotFoundException("Username cannot be null");
        }
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
        Pattern p = Pattern.compile("[^a-z0-9 ]", Pattern.CASE_INSENSITIVE);
        if (p.matcher(registerRequest.getUsername()).find()
                || a.stream().anyMatch(registerRequest.getUsername()::matches)) {
            throw new UsernameNotFoundException("Username cannot contain special characters or profanity");
        }
        boolean userExists = hlUserService.userExists(registerRequest.getUsername().trim());
        System.out.println("Does user exist? " + userExists);
        if (!userExists) {
            HLUser hlUser = new HLUser();

            try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                    System.getenv("PGUSER"), System.getenv("PGPW"))) {
                PreparedStatement statement = con.prepareStatement(sql);
                statement.setString(1, registerRequest.getEmail());
                statement.setString(2, registerRequest.getUsername());
                statement.setString(3, passwordEncoder.encode(registerRequest.getPassword()));
                statement.setDate(4, new Date(System.currentTimeMillis()));
                statement.setDate(5, new Date(System.currentTimeMillis()));
                statement.setDate(6, null);
                statement.setString(7, "I'm new here!");
                statement.setString(8, "https://i.imgur.com/mCHMpLT.png");
                statement.setBoolean(9, true);
                statement.setInt(10, HLRole.Standard.ordinal());

                int rowsUpdated = statement.executeUpdate();
                if (rowsUpdated > 0) {
                    System.out.println("User added successfully");
                    return hlUser;
                } else {
                    System.out.println("User not added");
                    return null;
                }
            } catch (Exception e) {
                System.out.println("Exception while adding user: " + e.getMessage());
                e.printStackTrace();
                return null;
            }
        } else {
            System.out.println("User already exists");
            return null;
        }
    }

}
