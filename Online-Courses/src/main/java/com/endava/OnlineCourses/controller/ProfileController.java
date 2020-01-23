package com.endava.OnlineCourses.controller;

import com.endava.OnlineCourses.form.UserForm;
import com.endava.OnlineCourses.model.Token;
import com.endava.OnlineCourses.model.User;
import com.endava.OnlineCourses.repositories.TokensRepository;
import com.endava.OnlineCourses.repositories.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProfileController {

    @Autowired
    private UsersRepository usersRepository;


    @Autowired
    private TokensRepository tokensRepository;

    @GetMapping("/profile")
    public UserForm getProfile() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Token token = tokensRepository.findOneByValue(authentication.getName());
        User user = usersRepository.findOneByLogin(token.getUser().getLogin());
        UserForm userForm = new UserForm();
        userForm.setFirstName(user.getFirstName());
        userForm.setLastName(user.getLastName());
        userForm.setLogin(user.getLogin());
        return userForm;
    }
}
