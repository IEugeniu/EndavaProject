package com.endava.OnlineCourses.services;

import com.endava.OnlineCourses.form.LoginForm;
import com.endava.OnlineCourses.form.TokenForm;


public interface LoginService {
    TokenForm login(LoginForm loginForm);
}
