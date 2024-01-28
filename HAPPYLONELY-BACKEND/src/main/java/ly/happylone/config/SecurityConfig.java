package ly.happylone.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.security.web.csrf.CsrfTokenRepository;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;

import ly.happylone.service.DatabaseService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.authorization.AuthorizationDecision;
import org.springframework.security.authorization.AuthorizationManager;
import org.springframework.security.config.annotation.web.configurers.CsrfConfigurer;
import org.springframework.security.web.access.intercept.RequestAuthorizationContext;
import java.util.Arrays;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private static final Logger logger = LoggerFactory.getLogger(SecurityConfig.class);

    @Autowired
    private DatabaseService databaseService;

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
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http
                .csrf(this::configureCsrf)
                .exceptionHandling(exceptionHandling -> exceptionHandling
                        .accessDeniedHandler((request, response, accessDeniedException) -> response.getWriter()
                                .write("Custom CSRF check failed")))
                .cors(cors -> cors.configurationSource(configureCors()))
                .httpBasic(httpBasic -> httpBasic.disable())
                .formLogin(formLogin -> formLogin.disable())
                .authorizeHttpRequests(authorize -> authorize
                        .requestMatchers("/index.html", "/").permitAll() // Allow unauthenticated access to the Angular
                        .requestMatchers("/login", "/register").permitAll()
                        .requestMatchers("/api/user/isAuthenticated").permitAll() // application.
                        .requestMatchers("/styles.css", "/polyfills.js", "polyfills.js.map",
                                "/runtime.js", "/vendor.js", "vendor.js.map",
                                "/main.js", "favicon.ico", "runtime.js.map",
                                "/poppins-v15-latin-ext_latin-regular.woff2",
                                "/poppins-v15-latin-ext_latin-700.woff2",
                                "/poppins-v15-latin-ext_latin-600.woff2", "main.js.map", "styles.css.map",
                                "/assets/HL.png")
                        .permitAll()
                        .requestMatchers("/getProductByName/**").access(adminAuthorizationManager())
                        .requestMatchers(HttpMethod.POST, "/addProduct/**")
                        .access(adminAuthorizationManager())
                        .requestMatchers(HttpMethod.POST, "/messages/**").authenticated()
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
                        .requestMatchers("/websocket/**").authenticated()
                        .requestMatchers(HttpMethod.POST, "/download/**").authenticated()
                        .anyRequest().authenticated());

        return http.build();
    }

    private void configureCsrf(CsrfConfigurer<HttpSecurity> csrf) {
        CsrfTokenRepository tokenRepository = csrfTokenRepository();
        csrf.csrfTokenRepository(tokenRepository)
                .requireCsrfProtectionMatcher(request -> {
                    String token = request.getHeader("XSRF-TOKEN"); // Fetch the token from the request header
                    return token != null && token.equals(tokenRepository.loadToken(request).getToken());
                });
    }

    @Bean
    public CsrfTokenRepository csrfTokenRepository() {
        CookieCsrfTokenRepository repository = CookieCsrfTokenRepository.withHttpOnlyFalse();
        return repository;
    }

    private CorsConfigurationSource configureCors() {
        return request -> {
            CorsConfiguration configuration = new CorsConfiguration();
            configuration.setAllowedOrigins(Arrays.asList("http://localhost:4200"));
            configuration.setAllowedMethods(Arrays.asList("HEAD", "GET", "POST", "PUT", "DELETE", "PATCH"));
            configuration.setAllowCredentials(true);
            configuration.setAllowedHeaders(Arrays.asList(
                    "Authorization", "Cache-Control", "Content-Type", "X-XSRF-TOKEN", "X-CSRF-TOKEN"));
            return configuration;
        };
    }

    @Bean
    public AuthorizationManager<RequestAuthorizationContext> adminAuthorizationManager() {
        return (authenticationSupplier, context) -> {
            try {
                Authentication authentication = authenticationSupplier.get();
                String username = authentication.getName();
                int role = databaseService.getUserRole(username);
                boolean isAdmin = role == 5;
                logger.info("Username: {}, Role: {}, Is Admin: {}", username, role, isAdmin);
                return new AuthorizationDecision(isAdmin);
            } catch (Exception e) {
                logger.error("Authorization error", e);
                return new AuthorizationDecision(false);
            }
        };
    }
}