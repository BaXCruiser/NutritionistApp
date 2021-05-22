package com.stackroute.favouriteservice.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



/**
 * Lombok annotations for generating no argument constructor
 * For generating all argument constructor
 * For generating Getters and Setters
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Nutrients {

    private int nutrientId;
    private String nutrientName;
    private int nutrientNumber;
    private String unitName;
    private Double value;

}
