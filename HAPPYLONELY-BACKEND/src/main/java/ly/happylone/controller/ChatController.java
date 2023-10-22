package ly.happylone.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ly.happylone.model.Message;
import ly.happylone.service.MessageService;

@RestController
@RequestMapping("/api/chat")
public class ChatController {

    @Autowired
    private MessageService messageService;

    @GetMapping("/messages")
    public List<Message> fetchMessages() {
        return messageService.fetchAllMessages();
    }

}
