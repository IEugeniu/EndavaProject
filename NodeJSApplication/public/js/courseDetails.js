$(document).ready (function getCourseDetails() {
    $.ajax({
        url: 'http://localhost:8080/courses/' + localStorage.getItem("courseId") + "?token=" + getCookie("Auth-Token"),
        type: 'get',
        dataType: 'JSON',
        success: function(response) {
            console.log(response);
            const course = response;
            document.getElementById('courseName').innerHTML = course.name;
            document.getElementById('author').innerHTML = "Author: " + course.authorLogin;
            document.getElementById('description').innerHTML = course.description;
            document.getElementById('video').src = "https://www.youtube.com/embed/" + course.video;
        }
    });
});
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}