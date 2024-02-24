package ly.happylone.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import ly.happylone.service.DatabaseService;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;

import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import java.util.Arrays;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
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
                .authorizeHttpRequests(authorize -> authorize
                        // admin endpoints
                        .requestMatchers("/getProductByName/**").authenticated()
                        .requestMatchers(HttpMethod.POST, "/addProduct/**")
                        .authenticated()
                        .requestMatchers(HttpMethod.PUT, "updateProduct/**")
                        .authenticated()
                        .requestMatchers(HttpMethod.POST, "/editUser/**").authenticated()
                        .requestMatchers(HttpMethod.DELETE, "/deleteUser/**").authenticated()
                        .requestMatchers(HttpMethod.PUT, "/banUser/**").authenticated()
                        .requestMatchers(HttpMethod.PUT, "/unbanUser/**").authenticated()
                        // end admin endpoints
                        .requestMatchers(HttpMethod.POST, "/messages/**").authenticated()
                        .requestMatchers("/api/forum/**").authenticated()
                        .requestMatchers(HttpMethod.GET, "/messages/**").authenticated()

                        .requestMatchers(HttpMethod.POST, "/changeRole/**").authenticated()
                        .requestMatchers(HttpMethod.POST, "/changeUsername/**").authenticated()
                        .requestMatchers(HttpMethod.POST, "/changeEmail/**").authenticated()
                        .requestMatchers(HttpMethod.POST, "/changePassword/**").authenticated()

                        .requestMatchers("/websocket/**").permitAll() // Allow unauthenticated
                        // access to WebSocket
                        // endpoint
                        .requestMatchers(HttpMethod.POST, "/download/**").authenticated()
                        .requestMatchers("/index.html", "/").permitAll()
                        .requestMatchers("/login", "/register").permitAll()
                        .requestMatchers("/api/user/isAuthenticated").permitAll()
                        .requestMatchers("**.woff2", "**.woff", "**.ttf", "**.eot", "**.svg", "**.png", "**.jpg",
                                "**.jpeg", "**.gif", "**.ico", "*.css", "*.js", "*.html", "*.map", "*.json",
                                "/assets/**.png", "/assets/**.jpg", "/assets/**.jpeg", "/assets/*.gif",
                                "/assets/**.ico",
                                "/artwork/**.png, /artwork/**.jpg, /artwork/**.jpeg, /artwork/**.gif, /artwork/**.ico")
                        .permitAll()
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

}