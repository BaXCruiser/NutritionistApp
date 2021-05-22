package com.learn.apigateway.filter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
public class JwtFilter extends GenericFilterBean {

    public static final String OPTIONS = "OPTIONS";
    public static final String AUTHORIZATION = "Authorization";
    public static final String BEARER = "Bearer";
    //Secret key
    public static final String MYSTRONGKEY = "secret";

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain)
            throws IOException, ServletException {

        //Typecasting
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        HttpServletResponse response = (HttpServletResponse) servletResponse;

        String path = request.getRequestURI();
        if (path.contains("/api/v1/userservice/")) {
            filterChain.doFilter(request, response); // Just continue chain.
            return;
        }

        //Checking if request is OPTIONS request
        if(request.getMethod().equals(OPTIONS)) {
            response.setStatus(HttpServletResponse.SC_OK);
        }else{
            //Checking if request contains JWT Token
            final String authHeader = request.getHeader(AUTHORIZATION);
            if(authHeader == null || !authHeader.startsWith(BEARER)) {
                throw new ServletException("Auth Header Missing");
            }else {
                final String token = authHeader.substring(7);
                final Claims payload;
                try {
                    payload = Jwts.parser()
                            .setSigningKey(MYSTRONGKEY)
                            .parseClaimsJws(token)
                            .getBody();
                } catch (JwtException e) {
                    logger.error("Token Invalid", e);
                    throw new ServletException("Invalid Token");
                }

                request.setAttribute("food", payload.getSubject());
            }
        }
        filterChain.doFilter(servletRequest, servletResponse);
    }
}