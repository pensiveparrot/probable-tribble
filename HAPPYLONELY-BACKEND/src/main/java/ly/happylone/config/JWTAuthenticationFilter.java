package ly.happylone.config;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import ly.happylone.component.CustomAuthentication;
import ly.happylone.component.DatabaseServiceImpl;
import ly.happylone.service.DatabaseService;
import ly.happylone.service.JwtService;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.GenericFilterBean;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.JwtException;

public class JWTAuthenticationFilter extends GenericFilterBean {

    // Make sure this key is at
    // least 256 bits
    @Autowired
    private JwtService jwtService;
    @Autowired
    private DatabaseService databaseService;

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        HttpServletRequest httpRequest = (HttpServletRequest) request;
        String authorizationHeader = httpRequest.getHeader("Authorization");
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            String jwt = authorizationHeader.substring(7);
            try {
                Jws<Claims> claims = jwtService.parseToken(jwt);
                String username = claims.getPayload().getSubject();
                List<?> authoritiesClaim = (List<?>) claims.getPayload().get("authorities");
                List<GrantedAuthority> authorities = new ArrayList<>();
                if (authoritiesClaim != null) {
                    authorities = authoritiesClaim.stream()
                            .map(authority -> new SimpleGrantedAuthority((String) authority))
                            .collect(Collectors.toList());
                }
                Authentication authentication = new UsernamePasswordAuthenticationToken(username, null, authorities);
                CustomAuthentication customAuthentication = databaseService
                        .authenticateAndGenerateToken(authentication);
                SecurityContextHolder.getContext().setAuthentication(customAuthentication);
            } catch (JwtException e) {
                // The JWT token's signature doesn't match the locally computed signature.
                // You can handle this case as you see fit.
            }
        }
        chain.doFilter(request, response);
    }
}