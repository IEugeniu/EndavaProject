package com.endava.OnlineCourses.repositories;

import com.endava.OnlineCourses.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersRepository extends JpaRepository<User, Long> {
    User findOneByLogin(String login);
}
