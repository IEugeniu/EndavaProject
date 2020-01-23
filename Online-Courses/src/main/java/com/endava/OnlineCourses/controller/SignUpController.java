package com.endava.OnlineCourses.controller;

import com.endava.OnlineCourses.form.UserForm;
import com.endava.OnlineCourses.services.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SignUpController {

    @Autowired
    private UsersService usersService;

    @PostMapping("/signup")
    public ResponseEntity<Object> addUser(@RequestBody UserForm userForm) {
        usersService.signUp(userForm);
        return ResponseEntity.ok().build();
    }
}
