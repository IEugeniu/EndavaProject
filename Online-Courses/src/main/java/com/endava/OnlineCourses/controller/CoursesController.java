package com.endava.OnlineCourses.controller;

import com.endava.OnlineCourses.form.CourseAddForm;
import com.endava.OnlineCourses.model.Course;
import com.endava.OnlineCourses.repositories.CoursesRepository;
import com.endava.OnlineCourses.response.EmptyJsonResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost")
public class CoursesController {

    @Autowired
    private CoursesRepository coursesRepository;

    @GetMapping("/courses")
    public List<Course> getCourses() {
        return coursesRepository.findAll();
    }

    @GetMapping("/courses/search/{course_name}")
    public List<Course> getCoursesByName(@PathVariable("course_name") String courseName ) {
        return coursesRepository.findByNameContainingIgnoreCase(courseName);
    }

    @GetMapping("/courses/author/{author}")
    public List<Course> getCoursesByAuthor(@PathVariable("author") String authorLogin ) {
        return coursesRepository.findCoursesByAuthorLogin(authorLogin);
    }

    @GetMapping("/courses/{id}")
    public Optional<Course> getCoursesById(@PathVariable("id") Long courseId ) {
        return coursesRepository.findById(courseId);
    }

    @PostMapping("/courses/add")
    public ResponseEntity<Object> addCourse(@RequestBody Course newCourse) {
        coursesRepository.save(newCourse);
        return ResponseEntity.ok().build();
    }

    @Transactional
    @PutMapping("/courses/update/{id}")
    public ResponseEntity updateCourse(@PathVariable("id") Long courseId, @RequestBody Course courseUpdate) {
        Optional<Course> optionalCourse = coursesRepository.findById(courseId);

        if(optionalCourse.isPresent()) {
            coursesRepository.save(courseUpdate);
            return new ResponseEntity(new EmptyJsonResponse(), HttpStatus.OK);
        } else {
            System.out.println("is not present");
            return ResponseEntity.noContent().build();
        }
    }

    @Transactional
    @DeleteMapping("/courses/delete/{id}")
    public ResponseEntity<Object> deleteCourse(@PathVariable("id") Long courseId) {
        coursesRepository.deleteCourseById(courseId);
        return ResponseEntity.ok().build();
    }
}
