package com.endava.OnlineCourses.security.details;

import com.endava.OnlineCourses.model.User;
import com.endava.OnlineCourses.repositories.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UsersRepository usersRepository;

    @Override
    public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {

        User user = usersRepository.findOneByLogin(login);
        if(user != null) {
            return new UserDetailsImpl(user);
        } else throw new IllegalArgumentException("User not found");
    }
}
