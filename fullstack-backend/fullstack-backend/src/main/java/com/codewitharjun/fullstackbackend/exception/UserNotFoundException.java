package com.codewitharjun.fullstackbackend.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long nomorregistrasi){
        super("could not found the user with id " + nomorregistrasi);
    }
}
