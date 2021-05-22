package com.stackroute.favouriteservice.domain;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;



/**
 * Document annotation for storing data into the mongo database collection
 */
@Document
/**
 * Lombok annotations for generating no argument constructor
 * For generating all argument constructor
 * For generating Getters and Setters
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

    /**
     * Annotating emailId with @Id to specify primary key
     */
    @Id
    private String emailId;
    List<Food> foods;
}
