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
    private static final long EXPIRATION_TIME = 864_000_000; // 10 days
    private static final String SECRET = "hwND#iGZUUB}o.3m}HVZHf*0\\!<lVv\"_-YzgKG_DiW7"; // Make sure this key is at
    // least 256 bits

    @Override
    public String generateToken(Authentication authentication) {
        // Generate JWT token
        return Jwts.builder()
                .subject(authentication.getName())
                .claim("roles", authentication.getAuthorities().stream()
                        .map(GrantedAuthority::getAuthority)
                        .collect(Collectors.toList()))
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(Keys.hmacShaKeyFor(SECRET.getBytes(StandardCharsets.UTF_8)))
                .compact();
    }

    @Override
    public Jws<Claims> parseToken(String jwt) {
        return Jwts.parser()
                .verifyWith(Keys.hmacShaKeyFor(SECRET.getBytes(StandardCharsets.UTF_8)))
                .build().parseSignedClaims(jwt);
    }

}
