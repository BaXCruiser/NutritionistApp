package com.stackroute.favouriteservice.service;

import com.stackroute.favouriteservice.domain.Food;
import com.stackroute.favouriteservice.domain.User;
import com.stackroute.favouriteservice.exception.UserAlreadyExistsException;
import com.stackroute.favouriteservice.exception.UserNotFoundException;


public interface FoodService {

    boolean saveUser(User user) throws UserAlreadyExistsException;

    User getUser(String userId) throws UserNotFoundException;

    User updateUser(String userId,Food food) throws UserNotFoundException;

    User updateFood(Food food,String userId) throws UserNotFoundException;
}
