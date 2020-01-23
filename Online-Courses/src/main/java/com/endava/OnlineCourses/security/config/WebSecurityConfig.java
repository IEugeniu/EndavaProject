package com.endava.OnlineCourses.security.config;

import com.endava.OnlineCourses.security.filters.TokenAuthFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

@ComponentScan("com.endava")
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private AuthenticationProvider authenticationProvider;

    @Autowired
    private TokenAuthFilter tokenAuthFilter;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .addFilterBefore(tokenAuthFilter, BasicAuthenticationFilter.class)
                .antMatcher("/**")
                .authenticationProvider(authenticationProvider)
                .authorizeRequests()
                .antMatchers("/courses").permitAll()
                .antMatchers("/courses/{id}").authenticated()
                .antMatchers("/courses/search/{course_name}").permitAll()
                .antMatchers("/courses/author/{author}").authenticated()
                .antMatchers("/courses/add").authenticated()
                .antMatchers("/courses/update/{id}").authenticated()
                .antMatchers("/courses/delete/{id}").authenticated()
                .antMatchers("/profile").authenticated()
                .antMatchers("/login").permitAll()
                .antMatchers("/signup").permitAll();
        http.csrf().disable();
    }
}
