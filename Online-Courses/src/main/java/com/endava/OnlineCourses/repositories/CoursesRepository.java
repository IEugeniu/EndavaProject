package com.endava.OnlineCourses.repositories;

import com.endava.OnlineCourses.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CoursesRepository extends JpaRepository<Course, Long> {
    List<Course> findByNameContainingIgnoreCase(String name);
    List<Course> findCoursesByAuthorLogin(String login);
    void deleteCourseById(Long id);
}
