package com.endava.OnlineCourses.services;

import com.endava.OnlineCourses.form.UserForm;
import com.endava.OnlineCourses.model.User;
import com.endava.OnlineCourses.repositories.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
public class UsersServiceImpl implements UsersService {

    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void signUp(UserForm userForm) {
        String hashPassword = passwordEncoder.encode(userForm.getPassword());

        User user = new User(userForm.getFirstName(), userForm.getLastName(), userForm.getLogin(), hashPassword);
        usersRepository.save(user);
    }
}
