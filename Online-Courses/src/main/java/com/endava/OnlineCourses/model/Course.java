package com.endava.OnlineCourses.model;

import org.jvnet.staxex.Base64Data;
import org.postgresql.util.Base64;

import javax.persistence.*;
import javax.sql.rowset.serial.SerialBlob;
import java.awt.*;
import java.sql.Time;

@Entity
@Table(name = "courses")
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String category;

    private String base64Image;

    private String video;

    private String description;

    private String authorLogin;

    public Course() {
    }

    public Course(Long id, String name, String category, String base64Image, String video, String description, String authorLogin) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.base64Image = base64Image;
        this.video = video;
        this.description = description;
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

    public String getCategory() {
        return category;
    }

    public String getBase64Image() {
        return base64Image;
    }

    public void setBase64Image(String base64Image) {
        this.base64Image = base64Image;
    }

    public String getAuthorLogin() {
        return authorLogin;
    }

    public void setAuthorLogin(String authorLogin) {
        this.authorLogin = authorLogin;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getImage() {
        return base64Image;
    }

    public void setImage(String image) {
        this.base64Image = image;
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
}
