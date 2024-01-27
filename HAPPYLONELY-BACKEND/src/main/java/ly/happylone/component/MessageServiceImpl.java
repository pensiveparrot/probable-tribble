package ly.happylone.component;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import com.fasterxml.jackson.databind.ObjectMapper;

import ly.happylone.model.Message;
import ly.happylone.service.MessageService;
import ly.happylone.service.DatabaseService;

@Service
public class MessageServiceImpl implements MessageService {
    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    @Autowired
    private DatabaseService databaseService;

    @Override
    public List<Message> fetchAllMessages() {
        try {
            return databaseService.fetchAllMessages();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public void postMessage(Message message) throws SQLException {
        try {
            databaseService.postMessage(message);
            // Send the message to the topic after saving it to the database
            broadcastMessageToClients(message);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void broadcastMessageToClients(Message message) {
        System.out.println("Message posted broadcastMessageToClients method: " + message);
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            String messageJson = objectMapper.writeValueAsString(message);
            if (simpMessagingTemplate != null && messageJson != null) {
                simpMessagingTemplate.convertAndSend("/topic/messages", messageJson);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}
