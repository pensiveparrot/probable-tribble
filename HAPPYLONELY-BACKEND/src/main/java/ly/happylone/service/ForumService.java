package ly.happylone.service;

import java.sql.SQLException;

import org.springframework.http.ResponseEntity;

import ly.happylone.model.Message;

public interface ForumService {
    // forum code
    public ResponseEntity<?> addForum(Message message) throws SQLException;

    public ResponseEntity<?> addThread(Message message) throws SQLException;

    public ResponseEntity<?> getThreadById(String id) throws SQLException;

    public ResponseEntity<?> addPost(Message message) throws SQLException;
}
