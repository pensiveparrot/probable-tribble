package ly.happylone.service;

import java.sql.SQLException;
import java.util.List;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;

import ly.happylone.model.Message;

public interface MessageService {
    List<Message> fetchAllMessages();

    void postMessage(Message message) throws SQLException;

    public String contactChatGPT(String message, String apiKey) throws SQLException, JsonMappingException, JsonProcessingException;

    public boolean userHasChatGptApiKey() throws SQLException;
}
