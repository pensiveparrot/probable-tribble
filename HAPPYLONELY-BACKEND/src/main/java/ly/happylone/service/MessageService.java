package ly.happylone.service;

import java.sql.SQLException;
import java.util.List;

import ly.happylone.model.Message;

public interface MessageService {
    List<Message> fetchAllMessages();

    void postMessage(Message message) throws SQLException;
}
