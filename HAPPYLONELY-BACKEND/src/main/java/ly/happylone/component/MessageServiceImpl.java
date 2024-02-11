package ly.happylone.component;

import java.io.IOException;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import ly.happylone.model.HLUser;
import ly.happylone.model.HLUserResponse;
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
    public boolean userHasChatGptApiKey() throws SQLException {
        HLUser user = databaseService.getLoggedInUser();
        return databaseService.userHasChatGptApiKey(user.getUsername());
    }

    @Override
    public String contactChatGPT(String message, String apiKey)
            throws SQLException, JsonMappingException, JsonProcessingException {
        HLUser user = databaseService.getLoggedInUser();
        HttpStatusCode status = databaseService.getUserByUsernameMin("chatgpt").getStatusCode();
        HLUserResponse chatGPT;
        if (status != HttpStatusCode.valueOf(200)) {
            chatGPT = new HLUserResponse();
            chatGPT.setId("000");
            chatGPT.setUsername("chatgpt");

            chatGPT.setProfileimg("https://openai.com/favicon.ico");
            chatGPT.setStatusmsg("I am a helpful assistant.");
            databaseService.addChatGptUser(chatGPT);
        }
        if (apiKey == null || apiKey.isEmpty()) {
            if (user.getGptapikey() != null) {
                apiKey = user.getGptapikey();
            } else {
                throw new IllegalStateException("No API key provided");
            }
        }

        // Update the GPT API key for the user
        if (databaseService.userHasChatGptApiKey(user.getUsername()) == false) {
            try {
                databaseService.updateUserGptApiKey(user.getUsername(), apiKey);
            } catch (SQLException ex) {
                ex.printStackTrace();
            }
        }

        String url = "https://api.openai.com/v1/chat/completions";

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Authorization", "Bearer " + apiKey);

        Map<String, Object> systemMessage = new HashMap<>();
        systemMessage.put("role", "system");
        systemMessage.put("content", "You are a helpful assistant.");

        Map<String, Object> userMessage = new HashMap<>();
        userMessage.put("role", "user");
        userMessage.put("content", message);

        Map<String, Object> body = new HashMap<>();
        body.put("model", "gpt-4-turbo-preview");
        body.put("messages", List.of(systemMessage, userMessage));

        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(body, headers);

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.POST, entity, String.class);

        // Create a new message with the API response and post it
        ObjectMapper mapper = new ObjectMapper();
        JsonNode root = mapper.readTree(response.getBody());
        JsonNode choices = root.path("choices");
        if (choices.isArray() && choices.size() > 0) {
            JsonNode firstChoice = choices.get(0);
            JsonNode messageNode = firstChoice.path("message");
            String content = messageNode.path("content").asText();
            // Create a new message with the content from the API response and post it
            Message apiResponseMessage = new Message();
            chatGPT = new HLUserResponse();
            chatGPT.setUsername("ChatGPT");
            chatGPT.setProfileimg("https://openai.com/favicon.ico");
            chatGPT.setId("000");
            chatGPT.setStatusmsg("I am a helpful assistant.");
            apiResponseMessage.setSender(chatGPT);
            apiResponseMessage.setContent(content);
            postMessage(apiResponseMessage);

            return content;
        } else {
            throw new IllegalStateException("No choices in response");
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
