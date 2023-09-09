package ly.happylone.service;

import java.sql.SQLException;
import java.util.List;

import org.springframework.http.ResponseEntity;

import ly.happylone.model.Message;

public interface MessageService {
    List<Message> fetchAllMessages();

    ResponseEntity<Message> postMessage(Message message) throws SQLException;
}
