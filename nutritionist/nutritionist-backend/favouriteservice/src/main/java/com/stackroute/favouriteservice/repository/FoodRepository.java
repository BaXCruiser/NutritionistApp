package com.stackroute.favouriteservice.repository;

import com.stackroute.favouriteservice.domain.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodRepository extends MongoRepository<User,String> {
    public User findByEmailId(String emailId);
}
