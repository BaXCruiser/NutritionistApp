package com.stackroute.userservice.service;

import com.stackroute.userservice.domain.User;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import io.jsonwebtoken.Jwts;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

/*
 * This class is implementing the JWTTokenGenerator interface.
 * @Service indicates annotated class is a service
 * which hold business logic in the Service layer
 *
 * */

@Component
@Slf4j
public class JWTTokenGeneratorImpl implements JWTTokenGenerator{


    public static final int VALIDITY_PERIOD = 600*10000;

    @Value("${jwt.secret:secret}")
    private  String secret;

    /*
     * Method for generating JWT token
     */
    @Override
    public Map<String,String> generateToken(String emailId){
        log.info("Secret Key : {}",secret);
        final String jwt = Jwts.builder()
                .setIssuer("AuthApi")
                .setSubject(emailId)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + VALIDITY_PERIOD))
                .signWith(SignatureAlgorithm.HS512,secret)
                .compact();

        Map jwtTokenMap = new HashMap();
        jwtTokenMap.put("token",jwt);
        return jwtTokenMap;

    }

}
