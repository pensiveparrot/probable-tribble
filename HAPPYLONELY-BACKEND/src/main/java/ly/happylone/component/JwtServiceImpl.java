package ly.happylone.component;

import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.stream.Collectors;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import ly.happylone.service.JwtService;

@Component
public class JwtServiceImpl implements JwtService {
    @Override
    public String generateToken(Authentication authentication) {
        // Generate JWT token
        return Jwts.builder()
                .subject(authentication.getName())
                .claim("roles", authentication.getAuthorities().stream()
                        .map(GrantedAuthority::getAuthority)
                        .collect(Collectors.toList()))
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + DatabaseServiceImpl.EXPIRATION_TIME))
                .signWith(Keys.hmacShaKeyFor(DatabaseServiceImpl.SECRET.getBytes(StandardCharsets.UTF_8)))
                .compact();
    }

    @Override
    public Jws<Claims> parseToken(String jwt) {
        return Jwts.parser()
                .verifyWith(Keys.hmacShaKeyFor(DatabaseServiceImpl.SECRET.getBytes(StandardCharsets.UTF_8)))
                .build().parseSignedClaims(jwt);
    }
}
