$(document).ready (function getProfile() {
    $.ajax({
        url: 'http://localhost:8080/profile'  + "?token=" + getCookie("Auth-Token"),
        type: 'get',
        dataType: 'JSON',
        success: function(response) {
            console.log(response);
            const user = response;
            document.getElementById('firstName').innerHTML = user.firstName;
            document.getElementById('lastName').innerHTML = user.lastName;
            document.getElementById('login').innerHTML = user.login;
            localStorage.setItem("user", user.login);
            console.log(localStorage.getItem("user"));
        }
    });
});

function logout() {
    deleteCookie('Auth-Token');
    //document.cookie = "Auth-Token=undefined; path=/";
    window.location = '/login.html';
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function deleteCookie(name) {
    document.cookie = name+'="";-1; path=/';
}

function goToAddCourse(){
    window.location = '/addCourse.html';
}