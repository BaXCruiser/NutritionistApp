package com.stackroute.favouriteservice.exception;

@SuppressWarnings("serial")
public class UserNotFoundException extends Exception {

    private String message;

    public UserNotFoundException(String message) {
        super(message);
        this.message = message;
    }

    public String getMessage()
    {return this.message;}

    @Override
    public String toString() {
        return "UserNotFoundException  -> "+message;
    }

}
