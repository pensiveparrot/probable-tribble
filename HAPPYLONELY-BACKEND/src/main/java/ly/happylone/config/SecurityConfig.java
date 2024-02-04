package ly.happylone.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import ly.happylone.model.HLRole;
import ly.happylone.service.DatabaseService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.authorization.AuthorizationDecision;
import org.springframework.security.authorization.AuthorizationManager;
import org.springframework.security.web.access.intercept.RequestAuthorizationContext;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import java.util.Arrays;
import java.util.Collection;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private static final Logger logger = LoggerFactory.getLogger(SecurityConfig.class);
    private DatabaseService databaseService;

    @Autowired
    public void setDatabaseService(DatabaseService databaseService) {
        this.databaseService = databaseService;
    }

    @Bean
    public PasswordEncoder encoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationProvider authProvider() {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setUserDetailsService(databaseService); // Use the service, not the method
        provider.setPasswordEncoder(encoder());
        return provider;
    }

    @Bean
    public AuthenticationManager authenticationManager() {
        return new ProviderManager(Arrays.asList(authProvider()));
    }

    @Bean
    public JWTAuthenticationFilter jwtAuthenticationFilter() throws Exception {
        return new JWTAuthenticationFilter();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http, JWTAuthenticationFilter jwtAuthenticationFilter)
            throws Exception {

        http.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class)
                .cors(cors -> cors.configurationSource(corsConfigurationSource()))
                .csrf(csrf -> csrf.disable())
                .httpBasic(httpBasic -> httpBasic.disable())
                .formLogin(formLogin -> formLogin.disable())
                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class)
                .authorizeHttpRequests(authorize -> authorize
                        .requestMatchers("/index.html", "/").permitAll() // Allow unauthenticated access to the Angular
                        .requestMatchers("/login", "/register").permitAll()
                        .requestMatchers("/api/user/isAuthenticated").permitAll() // application.
                        .requestMatchers("**.woff2", "**.woff", "**.ttf", "**.eot", "**.svg", "**.png", "**.jpg",
                                "**.jpeg", "**.gif", "**.ico", "*.css", "*.js", "*.html", "*.map", "*.json",
                                "/assets/**")
                        .permitAll()
                        .requestMatchers("/getProductByName/**").access(adminAuthorizationManager())
                        .requestMatchers(HttpMethod.POST, "/addProduct/**")
                        .access(adminAuthorizationManager())
                        .requestMatchers(HttpMethod.POST, "/messages/**").authenticated()
                        .requestMatchers("/api/forum/**").authenticated()
                        .requestMatchers(HttpMethod.GET, "/messages/**").authenticated()
                        .requestMatchers(HttpMethod.PUT, "updateProduct/**")
                        .access(adminAuthorizationManager())
                        .requestMatchers(HttpMethod.PUT, "/banUser/**").access(adminAuthorizationManager())
                        .requestMatchers(HttpMethod.PUT, "/unbanUser/**").access(adminAuthorizationManager())
                        .requestMatchers(HttpMethod.POST, "/changeRole/**").authenticated()
                        .requestMatchers(HttpMethod.POST, "/changeUsername/**").authenticated()
                        .requestMatchers(HttpMethod.POST, "/changeEmail/**").authenticated()
                        .requestMatchers(HttpMethod.POST, "/changePassword/**").authenticated()
                        .requestMatchers(HttpMethod.POST, "/editUser/**").access(adminAuthorizationManager())
                        .requestMatchers(HttpMethod.DELETE, "/deleteUser/**").access(adminAuthorizationManager())
                        .requestMatchers("/websocket/**").permitAll() // Allow unauthenticated
                        // access to WebSocket
                        // endpoint
                        .requestMatchers(HttpMethod.POST, "/download/**").authenticated()

                        .anyRequest().authenticated());
        return http.build();
    }

    public CorsConfigurationSource corsConfigurationSource() {
        return request -> {
            CorsConfiguration configuration = new CorsConfiguration();
            // replace with your actual origins
            configuration.setAllowedOriginPatterns(Arrays.asList("http://localhost:4200"));
            configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "PATCH",
                    "DELETE", "OPTIONS"));
            configuration.setAllowedHeaders(Arrays.asList("Authorization",
                    "Content-Type"));
            configuration.setAllowCredentials(true);
            UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
            source.registerCorsConfiguration("/**", configuration);
            return configuration;
        };
    }

    @Bean
    public AuthorizationManager<RequestAuthorizationContext> adminAuthorizationManager() {
        return (authenticationSupplier, context) -> {
            try {
                Authentication authentication = authenticationSupplier.get();
                String username = authentication.getName();
                Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
                boolean isAdmin = authorities.contains(new SimpleGrantedAuthority("ROLE_" + HLRole.Admin.name()));
                logger.info("Username: {}, Is Admin: {}", username, isAdmin);
                return new AuthorizationDecision(isAdmin);
            } catch (Exception e) {
                logger.error("Authorization error", e);
                return new AuthorizationDecision(false);
            }
        };
    }
}