package com.stackroute.userservice.domain;


import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * Entity class for storing data into the database using JPA
 */

@Entity

/**
 * Lombok annotations for generating no argument constructor
 * For generating all argument constructor
 * For generating Getters and Setters
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter @Setter
public class User {

    /**
     * Annotating emailId with @Id to specify primary key
     */
    @Id
    private String emailId;
    private String password;
    private String firstName;
    private String lastName;

}
