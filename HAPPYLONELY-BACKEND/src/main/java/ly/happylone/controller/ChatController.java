package ly.happylone.controller;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;

import ly.happylone.model.Message;
import ly.happylone.service.MessageService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/chat")
public class ChatController {

    @Autowired
    private MessageService messageService;

    @GetMapping("/messages")
    public List<Message> fetchMessages() {
        return messageService.fetchAllMessages();
    }

    @PostMapping("/useChatGPT")
    public String chat(@RequestBody Map<String, String> request)
            throws SQLException, JsonMappingException, JsonProcessingException {
        String message = request.get("message");
        String apiKey = request.get("apiKey");
        return messageService.contactChatGPT(message, apiKey);
    }

    @GetMapping("/userHasChatGptApiKey")
    public boolean userHasChatGptApiKey() throws SQLException {
        return messageService.userHasChatGptApiKey();
    }
}
