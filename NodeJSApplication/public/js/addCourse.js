function postCourse(courseName, category, image, video, description) {
    var json = '{ "name": "' + courseName + '" ,"category":"' + category + '" ,"image":"' + image + '" ,"video":"' + video + '" ,"description":"' + description + '" ,"authorLogin":"' + localStorage.getItem("user") + '"}';
    console.log(json);
    $.ajax({
        url: 'http://localhost:8080/courses/add?token=' + getCookie('Auth-Token'),
        type: 'post',
        contentType: "application/json; charset=utf-8",
        data: json,
        error: function (request, error) {
            alert(" Can't do because: " + error);
        },
        success: function (data, textStatus, request) {

            window.location = '/profile.html';
        }
    })
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
/*function postCourse(courseName, duration, image) {
    console.log("login")
    var json = '{ "name": "' + courseName + '" ,"time":"' + duration + '" ,"image":"' + image + '"}';
    console.log(json);
    $.ajax({
        url: 'http://localhost:8080/courses/add',
        type: 'post',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: json,
        error: function (request, error) {
            alert(" Can't do because: " + error);
        },
        /*success: function () {
            alert("Success");
            //window.location = '/login.html';
        }
        success: function (data, textStatus, request) {

            window.location = '/profile.html';
        }
    })
}*/