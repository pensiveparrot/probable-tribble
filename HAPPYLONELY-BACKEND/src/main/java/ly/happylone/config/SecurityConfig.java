package ly.happylone.config;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.Arrays;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.authorization.AuthorizationDecision;
import org.springframework.security.authorization.AuthorizationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.security.web.access.intercept.RequestAuthorizationContext;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;

import ly.happylone.service.CustomUserDetailsService;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    private CustomUserDetailsService customUserDetailsService;

    @Bean
    public AuthenticationProvider authProvider() {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setUserDetailsService(customUserDetailsService);
        provider.setPasswordEncoder(encoder());
        return provider;
    }

    @Bean
    public PasswordEncoder encoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        // CSRF Configuration
        CookieCsrfTokenRepository tokenRepository = CookieCsrfTokenRepository.withHttpOnlyFalse();

        // Custom CSRF failure handler
        AccessDeniedHandler customCsrfFailureHandler = (request, response, accessDeniedException) -> {
            response.getWriter().write("Custom CSRF check failed");
        };

        // CORS Configuration
        CorsConfigurationSource corsConfigurationSource = request -> {
            CorsConfiguration configuration = new CorsConfiguration();
            configuration.setAllowedOrigins(Arrays.asList("http://localhost:4200"));
            configuration.setAllowedMethods(Arrays.asList("HEAD", "GET", "POST", "PUT", "DELETE", "PATCH"));
            configuration.setAllowCredentials(true);
            configuration.setAllowedHeaders(
                    Arrays.asList("Authorization", "Cache-Control", "Content-Type", "X-XSRF-TOKEN", "X-CSRF-TOKEN"));
            return configuration;
        };

        // HTTP Security Configuration
        http
                .csrf(csrf -> csrf
                        .csrfTokenRepository(tokenRepository)
                        .requireCsrfProtectionMatcher(request -> {
                            String token = request.getHeader("XSRF-TOKEN"); // Fetch the token from the request header;
                                                                            // IMPORTANT
                            if (token == null) {
                                return false;

                            }
                            return tokenRepository.loadToken(request).getToken().equals(token);
                        })

                )
                .exceptionHandling(exceptionHandling -> exceptionHandling
                        .accessDeniedHandler(customCsrfFailureHandler))
                .cors(cors -> cors.configurationSource(corsConfigurationSource))
                .httpBasic(httpBasic -> httpBasic.disable())
                .formLogin(login -> login.loginPage("/login").permitAll())
                .logout(logout -> logout.permitAll())
                .authorizeHttpRequests(authorize -> authorize
                        .requestMatchers("/getProductByName/**").access(adminAuthorizationManager())
                        .requestMatchers(HttpMethod.POST, "/addProduct/**")
                        .access(adminAuthorizationManager())
                        .requestMatchers(HttpMethod.POST, "/messages/**").authenticated()
                        .requestMatchers(HttpMethod.GET, "/messages/**").authenticated()
                        .requestMatchers(HttpMethod.PUT, "updateProduct/**")
                        .access(adminAuthorizationManager())
                        .requestMatchers("/#/admin/**").access(adminAuthorizationManager())
                        .requestMatchers("/login/**", "/register/**").permitAll()
                        .requestMatchers("/websocket/**").authenticated()
                        .anyRequest().authenticated());

        return http.build();
    }

    @Bean
    public AuthorizationManager<RequestAuthorizationContext> adminAuthorizationManager() {
        return (authenticationSupplier, context) -> {
            try {
                Authentication authentication = authenticationSupplier.get();
                String username = authentication.getName();
                int role = 0; // Fetch the role from the database using the username
                String sql = "select role from hluser where username = ?";
                try (Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/happylonely",
                        System.getenv("PGUSER"), System.getenv("PGPW"))) {

                    PreparedStatement statement = con.prepareStatement(sql);
                    statement.setString(1, username);
                    ResultSet rs = statement.executeQuery();
                    if (rs.next()) {
                        role = rs.getInt("role");
                    }
                }
                boolean isAdmin = role == 5; // Check if the role corresponds to the "admin" role
                System.out.println("Username: " + username + ", Role: " + role + ", Is Admin: " + isAdmin);
                return new AuthorizationDecision(isAdmin);
            } catch (Exception e) {
                e.printStackTrace();
                return new AuthorizationDecision(false);
            }
        };
    }
}
