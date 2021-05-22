package com.stackroute.favouriteservice.exception;

public class UserAlreadyExistsException extends Exception {

    private String message;

    public UserAlreadyExistsException(String message) {
        super(message);
        this.message = message;
    }

    public String getMessage()
    {return this.message;}

    @Override
    public String toString() {
        return "UserAlreadyExistsException -> "+message;
    }
}
