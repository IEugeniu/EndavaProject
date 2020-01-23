$(document).ready (function getCourse() {
    $.ajax({
        url: 'http://localhost:8080/courses/' + localStorage.getItem("courseId") + "?token=" + getCookie('Auth-Token'),
        type: 'get',
        dataType: 'JSON',
        success: function(response) {
            console.log(response);
            const course = response;
            document.getElementById('courseName').value = course.name;
            document.getElementById('category').value = course.category;
            document.getElementById('image').value = course.image;
            document.getElementById('video').value = course.video;
            document.getElementById('description').value = course.description;

            console.log(localStorage.getItem("courseId"));
        }
    });
});

function updateCourse(courseName, category, image, video, description) {
    var json = '{ "id": "' + localStorage.getItem("courseId") + '" ,"name":"' + courseName + '" ,"category":"' + category + '" ,"image":"' + image + '" ,"video":"' + video + '" ,"description":"' + description + '" ,"authorLogin":"' + localStorage.getItem("user") + '"}';
    console.log(json);
    $.ajax({
        url: 'http://localhost:8080/courses/update/' + localStorage.getItem("courseId") + "?token=" + getCookie('Auth-Token'),
        type: 'put',
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        data: json,
        error: function (request, error) {
            console.log(error);
            console.log(request);
            //alert(" Can't do because: " + error);
        },
        success: function (data, textStatus, request) {
            window.location = '/usersCourses.html';
        }
    });
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}