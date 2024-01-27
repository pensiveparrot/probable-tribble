package ly.happylone.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import org.springframework.lang.NonNull;


@Configuration
public class MvcConfig implements WebMvcConfigurer {
    @Value("${app.art.path}")
    private String artPath;

    @Override
    public void addResourceHandlers(@NonNull ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/artwork/**")
                .addResourceLocations("file:" + artPath);
        registry.addResourceHandler("/assets/**", "/styles.css", "/polyfills.js", "/runtime.js", "/vendor.js",
                "/main.js")
                .addResourceLocations("classpath:/static/")
                .setCachePeriod(3600)
                .resourceChain(true);

    }
}