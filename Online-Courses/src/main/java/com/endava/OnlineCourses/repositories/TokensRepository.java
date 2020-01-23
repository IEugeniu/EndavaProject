package com.endava.OnlineCourses.repositories;

import com.endava.OnlineCourses.model.Token;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TokensRepository extends JpaRepository<Token, Long> {
    Token findOneByValue(String value);
}
