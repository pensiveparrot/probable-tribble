package ly.happylone.config;

import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.FilterConfig;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.security.web.csrf.CsrfTokenRepository;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class CsrfTokenResponseCookieSettingFilter implements Filter {

    private CsrfTokenRepository csrfTokenRepository;

    @Autowired
    @Lazy
    public void setCsrfTokenRepository(CsrfTokenRepository csrfTokenRepository) {
        this.csrfTokenRepository = csrfTokenRepository;
    }

    @Override
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain)
            throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) req;
        HttpServletResponse response = (HttpServletResponse) res;

        // Process the request first
        chain.doFilter(request, response);

        // Get the authentication object
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();

        // Only generate a new CSRF token for authenticated users
        if (auth != null && auth.isAuthenticated()) {
            // Generate a new CSRF token
            CsrfToken csrf = csrfTokenRepository.generateToken(request);
            csrfTokenRepository.saveToken(csrf, request, response);
            String csrfTokenValue = csrf.getToken();
            if (csrfTokenValue != null) {
                // Set the CSRF token in a header
                response.addHeader("X-XSRF-TOKEN", csrfTokenValue);

                // Set the CSRF token in a cookie
                Cookie csrfCookie = new Cookie("XSRF-TOKEN", csrfTokenValue);
                csrfCookie.setPath("/");
                response.addCookie(csrfCookie);
            }
        }
    }
    // @Override
    // public void doFilter(ServletRequest req, ServletResponse res, FilterChain
    // chain)
    // throws IOException, ServletException {
    // HttpServletRequest request = (HttpServletRequest) req;
    // HttpServletResponse response = (HttpServletResponse) res;

    // CsrfToken csrf = (CsrfToken) request.getAttribute(CsrfToken.class.getName());
    // if (csrf == null) {
    // csrf = csrfTokenRepository.generateToken(request);
    // csrfTokenRepository.saveToken(csrf, request, response);
    // }

    // String csrfTokenValue = csrf.getToken();
    // if (csrfTokenValue != null) {
    // response.addHeader("Set-Cookie",
    // "XSRF-TOKEN=" + csrfTokenValue + "; Path=/; SameSite=None; Secure");
    // }

    // chain.doFilter(request, response);
    // }

    @Override
    public void destroy() {
    }

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
    }
}
