$(document).ready (function () {
    var x = document.getElementById("profile");
    console.log(getCookie("Auth-Token"));
    if (getCookie("Auth-Token") === undefined || getCookie("Auth-Token") === '""') {
        x.style.display = "none";
        console.log("No token");

    } else {
        console.log("Yes token!");
        x.style.display = "block";
    }
});
function registerUser(firstName, lastName, login, password) {
    var json = '{ "firstName": "' + firstName + '" ,"lastName":"' + lastName + '", "login": "' + login + '", "password":"' + password + '"}';
    console.log(json);
    $.ajax({
        url: 'http://localhost:8080/signup',
        type: 'post',
        contentType: "application/json; charset=utf-8",
        data: json,
        error: function (request, error) {
            alert(" Can't do because: " + error);
        },
        success: function () {
            window.location = '/login.html';
        }
    })
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}