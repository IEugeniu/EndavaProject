package com.endava.OnlineCourses.services;

import com.endava.OnlineCourses.form.LoginForm;
import com.endava.OnlineCourses.form.TokenForm;
import com.endava.OnlineCourses.model.Token;
import com.endava.OnlineCourses.model.User;
import com.endava.OnlineCourses.repositories.TokensRepository;
import com.endava.OnlineCourses.repositories.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.apache.commons.lang.RandomStringUtils;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Component
public class LoginServiceImpl implements LoginService {

    @Autowired
    private TokensRepository tokensRepository;

    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public TokenForm login(LoginForm loginForm) {
        User user = usersRepository.findOneByLogin(loginForm.getLogin());

        if(user != null) {
            if(passwordEncoder.matches(loginForm.getPassword(), user.getHashPassword())) {
                String value = RandomStringUtils.random(10, true, true);
                Token token = new Token(value, user);
                tokensRepository.save(token);
                TokenForm tokenForm = new TokenForm(token.getValue());
                return tokenForm;
            }
        } throw  new IllegalArgumentException("User not found");
    }
}
