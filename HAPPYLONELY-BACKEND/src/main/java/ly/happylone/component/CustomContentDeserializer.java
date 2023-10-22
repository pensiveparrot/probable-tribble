package ly.happylone.component;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Base64;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;

public class CustomContentDeserializer extends JsonDeserializer<byte[]> {
    @Override
    public byte[] deserialize(JsonParser p, DeserializationContext ctxt) throws IOException {
        String value = p.getText();

        if (value.startsWith("IMG_START:")) {
            return value.getBytes(StandardCharsets.UTF_8);
        }

        try {
            return Base64.getDecoder().decode(value);
        } catch (IllegalArgumentException e) {
            throw new IOException("Failed to decode base64 content.", e);
        }
    }
}
