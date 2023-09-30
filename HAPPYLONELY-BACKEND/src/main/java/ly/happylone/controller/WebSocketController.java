package ly.happylone.controller;

import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import ly.happylone.model.Message;
import ly.happylone.service.MessageService;

@Controller
public class WebSocketController {
    @Autowired
    private MessageService messageService;

    @MessageMapping("/chat/send")
    @SendTo("/topic/messages")
    public void sendMessage(Message message) throws SQLException {
        System.out.println("Message posted postMessage controller: " + message);
        messageService.postMessage(message); // This will broadcast the message to all clients subscribed to
                                             // "/topic/messages"
    }
}