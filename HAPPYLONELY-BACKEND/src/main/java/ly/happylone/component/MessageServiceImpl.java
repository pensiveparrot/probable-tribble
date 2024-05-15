package ly.happylone.component;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

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

    private final RestTemplate restTemplate = new RestTemplate();
    private final ObjectMapper mapper = new ObjectMapper();

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
    public String contactChatGPT(String message, String apiKey) throws SQLException, IOException {
        HLUser user = databaseService.getLoggedInUser();
        HttpStatusCode status = databaseService.getUserByUsernameMin("chatgpt").getStatusCode();
        HLUserResponse chatGPT = createChatGptUser();

        if (status != HttpStatus.OK) {
            databaseService.addChatGptUser(chatGPT);
        }

        apiKey = resolveApiKey(apiKey, user);

        if (!userHasChatGptApiKey()) {
            updateGptApiKey(user.getUsername(), apiKey);
        }

        String responseContent = getChatGptResponseContent(message, apiKey, chatGPT);

        postMessage(createApiResponseMessage(chatGPT, responseContent));
        return responseContent;
    }

    private String resolveApiKey(String apiKey, HLUser user) {
        if (apiKey == null || apiKey.isEmpty()) {
            if (user.getGptapikey() != null) {
                return user.getGptapikey();
            } else {
                throw new IllegalStateException("No API key provided");
            }
        }
        return apiKey;
    }

    private void updateGptApiKey(String username, String apiKey) throws SQLException {
        try {
            databaseService.updateUserGptApiKey(username, apiKey);
        } catch (SQLException ex) {
            ex.printStackTrace();
        }
    }

    private String getChatGptResponseContent(String message, String apiKey, HLUserResponse chatGPT) throws IOException {
        String url = "https://api.openai.com/v1/chat/completions";
        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(createBody(message), createHeaders(apiKey));
        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.POST, entity, String.class);

        JsonNode root = mapper.readTree(response.getBody());
        JsonNode choices = root.path("choices");

        if (choices.isArray() && choices.size() > 0) {
            return choices.get(0).path("message").path("content").asText();
        } else {
            throw new IllegalStateException("No choices in response");
        }
    }

    private HttpHeaders createHeaders(String apiKey) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(apiKey);
        return headers;
    }

    private Map<String, Object> createBody(String message) {
        Map<String, Object> systemMessage = Map.of("role", "system", "content", "You are a helpful assistant.");
        Map<String, Object> userMessage = Map.of("role", "user", "content", message);

        return Map.of("model", "gpt-4o", "messages", List.of(systemMessage, userMessage));
    }

    private HLUserResponse createChatGptUser() {
        HLUserResponse chatGPT = new HLUserResponse();
        chatGPT.setId("000");
        chatGPT.setUsername("chatgpt");
        chatGPT.setProfileimg("https://openai.com/favicon.ico");
        chatGPT.setStatusmsg("I am a helpful assistant.");
        return chatGPT;
    }

    @Override
    public void postMessage(Message message) throws SQLException {
        try {
            databaseService.postMessage(message);
            broadcastMessageToClients(message);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void broadcastMessageToClients(Message message) {
        try {
            String messageJson = mapper.writeValueAsString(message);
            simpMessagingTemplate.convertAndSend("/topic/messages", messageJson);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private Message createApiResponseMessage(HLUserResponse chatGPT, String content) {
        Message apiResponseMessage = new Message();
        apiResponseMessage.setSender(chatGPT);
        apiResponseMessage.setContent(content);
        return apiResponseMessage;
    }
}
