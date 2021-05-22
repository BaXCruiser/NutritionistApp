package com.stackroute.userservice.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/*
    This is DTO class for UserCredentials
 */

/**
 * Lombok annotations for generating no argument constructor
 * For generating all argument constructor
 * For generating Getters and Setters
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserCredentialsDTO {

    private String emailId;
    private String password;
}
