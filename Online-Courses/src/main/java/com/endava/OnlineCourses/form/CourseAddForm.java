package com.endava.OnlineCourses.form;

import java.sql.Time;

public class CourseAddForm {
    private Long id;
    private String name;
    private String category;
    private String image;
    private String video;
    private String description;
    private String authorLogin;

    public CourseAddForm() {
    }

    public CourseAddForm(Long id, String name, String category, String image, String video, String description, String authorLogin) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.video = video;
        this.description = description;
        this.image = image;
        this.authorLogin = authorLogin;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getVideo() {
        return video;
    }

    public void setVideo(String video) {
        this.video = video;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAuthorLogin() {
        return authorLogin;
    }

    public void setAuthorLogin(String authorLogin) {
        this.authorLogin = authorLogin;
    }
}
