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

function verifyUser(login, password) {
    console.log("login")
    var json = '{ "login": "' + login + '" ,"password":"' + password + '"}';
    console.log(json);
    $.ajax({
        url: 'http://localhost:8080/login',
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
        }*/
        success: function (data, textStatus, request) {
            token = data["value"];
            console.log(token);
            document.cookie = "Auth-Token=" + token;
            if (token !== null) {
                window.location = '/index.html';
            }
        }
    })
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}