package ly.happylone.component;

import java.sql.SQLException;
import java.util.Arrays;
import java.util.List;
import java.util.regex.Pattern;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import ly.happylone.model.HLBadge;
import ly.happylone.model.HLUser;
import ly.happylone.model.HLUserResponse;
import ly.happylone.service.DatabaseService;
import ly.happylone.service.HLUserService;

@Component
public class HLUserServiceImpl implements HLUserService {

    private static final Logger logger = LoggerFactory.getLogger(HLUserServiceImpl.class);

    @Autowired
    private DatabaseService databaseService;

    @Override
    public HLUser getUserById(Long id) {
        try {
            return databaseService.getUserById(id);
        } catch (SQLException e) {
            logger.error("Error getting user by ID", e);
            return null;
        }
    }

    @Override
    public ResponseEntity<HLUser> awardBadge(HLUser user, HLBadge badge) throws SQLException {
        try {
            return databaseService.awardBadge(user, badge);
        } catch (SQLException e) {
            logger.error("Error getting user by ID", e);
            return null;
        }
    }

    @Override
    public int getUserRole(String username) {
        try {
            return databaseService.getUserRole(username);
        } catch (Exception e) {
            logger.error("Error getting user role", e);
            return -1;
        }
    }

    @Override
    public ResponseEntity<HLUserResponse> editUser(HLUserResponse user) {
        try {
            return databaseService.editUser(user);
        } catch (Exception e) {
            logger.error("Error editing user", e);
            return ResponseEntity.badRequest().body(null);
        }

    }

    @Override
    public boolean userExists(String username) {
        try {
            return databaseService.userExists(username);
        } catch (Exception e) {
            logger.error("Error checking if user exists", e);
            return false;
        }

    }

    @Override
    public HLUser getUserByName(String username) {
        try {
            return databaseService.getUserByName(username);
        } catch (Exception e) {
            logger.error("Error getting user by name", e);
            return null;
        }

    }

    @Override
    public List<ResponseEntity<HLUser>> getAllUsers() throws SQLException {
        try {
            return databaseService.getAllUsers();
        } catch (Exception e) {
            logger.error("Error getting user by name", e);
            return null;
        }

    }

    @Override
    public void deleteUser(Long id) throws SQLException {
        try {
            databaseService.deleteUser(id);
        } catch (Exception e) {
            logger.error("Error getting user by name", e);
        }
    }

    @Override
    public ResponseEntity<HLUser> banUser(Long id) throws SQLException {
        try {
            return databaseService.banUser(id);
        } catch (Exception e) {
            logger.error("Error getting user by name", e);
            return null;
        }
    }

    @Override
    public ResponseEntity<HLUser> unbanUser(HLUser user) throws SQLException {
        try {
            return databaseService.unbanUser(user);
        } catch (Exception e) {
            logger.error("Error unbanning user", e);
            return null;
        }
    }

    @Override
    public ResponseEntity<HLUser> changePassword(HLUser user) throws SQLException {
        try {
            return databaseService.changePassword(user);
        } catch (Exception e) {
            logger.error("Error changing password", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @Override
    public ResponseEntity<HLUser> changeStatus(HLUser user) throws SQLException {
        try {
            return databaseService.changeStatus(user);
        } catch (Exception e) {
            logger.error("Error changing status", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @Override
    public ResponseEntity<HLUser> changeRole(HLUser user) throws SQLException {
        try {
            return databaseService.changeRole(user);
        } catch (Exception e) {
            logger.error("Error changing role", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @Override
    public ResponseEntity<HLUser> changeUsername(HLUser user) throws SQLException {
        try {
            return databaseService.changeUsername(user);
        } catch (Exception e) {
            logger.error("Error changing username", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @Override
    public ResponseEntity<HLUser> changeEmail(HLUser user) throws SQLException {
        try {
            return databaseService.changeEmail(user);
        } catch (Exception e) {
            logger.error("Error changing email", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @Override
    public HLUser getUserByUsername(String username) {
        return getUserByName(username);

    }

    @Override
    public ResponseEntity<HLUserResponse> getUserByUsernameMin(String username) {
        return databaseService.getUserByUsernameMin(username);
    }

    @Override
    public ResponseEntity<HLUser> changeProfileImg(HLUser user) throws SQLException {
        try {
            return databaseService.changeProfileImg(user);
        } catch (Exception e) {
            logger.error("Error changing profile image", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
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

}
