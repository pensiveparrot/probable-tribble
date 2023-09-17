package ly.happylone.component;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import ly.happylone.model.HLUser;
import ly.happylone.model.HLUserResponse;
import ly.happylone.model.Message;
import ly.happylone.service.MessageService;

@Service
public class MessageServiceImpl implements MessageService {

    @Autowired
    private SimpMessagingTemplate template; // Inject the SimpMessagingTemplate

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
    public ResponseEntity<Message> postMessage(Message message) throws SQLException {
        String sql = "INSERT INTO messages (content, sender_id, date_sent) VALUES (?, ?, ?)";
        try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                System.getenv("PGUSER"), System.getenv("PGPW"))) {
            PreparedStatement statement = con.prepareStatement(sql);
            statement.setString(1, message.getContent());
            statement.setLong(2, message.getSender().getId());
            statement.setTimestamp(3, Timestamp.valueOf(LocalDateTime.now()));
            statement.executeUpdate();

            // Send the message to the topic after saving it to the database
            template.convertAndSend("/topic/messages", message);

            return ResponseEntity.status(HttpStatus.OK).body(message);
        } catch (SQLException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(message);
        }
    }

}
