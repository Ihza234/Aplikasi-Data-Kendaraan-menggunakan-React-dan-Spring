package com.codewitharjun.fullstackbackend.controller;

import com.codewitharjun.fullstackbackend.exception.UserNotFoundException;
import com.codewitharjun.fullstackbackend.model.User;
import com.codewitharjun.fullstackbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user")
    User newUser(@RequestBody User newUser){
        return userRepository.save(newUser);
    }
     @GetMapping("/users")
     List<User> getAllUsers(){
        return userRepository.findAll();
     }

     @GetMapping("/user/{nomorregistrasi}")
    User getUserById(@PathVariable Long nomorregistrasi){
        return userRepository.findById(nomorregistrasi)
                .orElseThrow(()->new UserNotFoundException(nomorregistrasi));
     }
     @PutMapping("/user/{nomorregistrasi}")
    User updateUser(@RequestBody User newUser, @PathVariable Long nomorregistrasi){
        return userRepository.findById(nomorregistrasi)
                .map(user ->{
                   user.setNamapemilik(newUser.getNamapemilik());
                    user.setNomorkendaran(newUser.getNomorkendaran());
                    user.setTahunpembuatan(newUser.getTahunpembuatan());
                    user.setBahanbakar(newUser.getBahanbakar());
                    user.setMerkkendaraan(newUser.getMerkkendaraan());
                    user.setWarnakendaran(newUser.getWarnakendaran());

                    return userRepository.save(user);
                }).orElseThrow(()->new UserNotFoundException(nomorregistrasi));
     }

     @DeleteMapping("/user/{nomorregistrasi}")
    String deleteUser(@PathVariable Long nomorregistrasi) {
        if(!userRepository.existsById(nomorregistrasi)){
            throw new UserNotFoundException(nomorregistrasi);
        }
        userRepository.deleteById(nomorregistrasi);
        return "User with nomorregistrasi"+nomorregistrasi+" has been deleted succes.";
     }
}
