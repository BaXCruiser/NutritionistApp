package com.stackroute.userservice.service;

import com.stackroute.userservice.domain.User;
import com.stackroute.userservice.domain.UserCredentialsDTO;
import com.stackroute.userservice.exception.UserAlreadyExistException;
import com.stackroute.userservice.exception.UserNotFoundException;
import com.stackroute.userservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

/**
 * Annotating with @Service
 */
@Service
public class UserServiceImpl implements UserService{


    private UserRepository userRepo;
    private JWTTokenGeneratorImpl tokenGenerator;

    /*
        Using constructor autowiring
     */
    @Autowired
    public UserServiceImpl(UserRepository userRepo, JWTTokenGeneratorImpl tokenGenerator) {
        this.userRepo = userRepo;
        this.tokenGenerator = tokenGenerator;
    }

    /*
        Method for registering new user to the database
     */
    @Override
    public User saveUser(User user) throws UserAlreadyExistException {
        Optional optional = userRepo.findById(user.getEmailId());
        if(!optional.isEmpty())
            throw new UserAlreadyExistException("User already exists with this email id");
        return userRepo.save(user);
    }

    /*
        Method for authenticating existing user
     */

    @Override
    public Map<?,?> authenticateUser(UserCredentialsDTO credentials) {
        final Optional<User> userOptional = userRepo.findById(credentials.getEmailId());
        final User user = userOptional.orElseThrow(() -> {
            throw new RuntimeException("User does not exist");
        });
        if(user.getPassword().equals(credentials.getPassword())){
            Map authenticateMap = tokenGenerator.generateToken(credentials.getEmailId());
            authenticateMap.put("user",user);
            return authenticateMap;
        } else{
            throw new RuntimeException("Credentials mismatch");
        }
    }

    /*
        Method to get user details
     */

    @Override
    public User getUser(String emailId) throws UserNotFoundException {
        Optional optional = userRepo.findById(emailId);
        if(optional.isEmpty())
            throw new UserNotFoundException("User Not found");
        return userRepo.findById(emailId).get();
    }
}