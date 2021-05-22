package com.stackroute.userservice.service;

import com.stackroute.userservice.domain.User;
import com.stackroute.userservice.domain.UserCredentialsDTO;
import com.stackroute.userservice.exception.UserAlreadyExistException;
import com.stackroute.userservice.exception.UserNotFoundException;

import java.util.Map;

public interface UserService {

    /*
        Method for registering new user
     */
    User saveUser(User user) throws UserAlreadyExistException;

    /*
        Method to authenticate user and implement JWT token
     */

    Map<?,?> authenticateUser(UserCredentialsDTO credentials);

    /*
        Method to get user details
     */
    User getUser(String emailId) throws UserNotFoundException;

}
