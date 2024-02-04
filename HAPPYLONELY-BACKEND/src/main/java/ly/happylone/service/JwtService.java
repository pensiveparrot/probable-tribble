package ly.happylone.service;

import org.springframework.security.core.Authentication;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;

public interface JwtService {

    public String generateToken(Authentication authentication);

    public Jws<Claims> parseToken(String jwt);

}
