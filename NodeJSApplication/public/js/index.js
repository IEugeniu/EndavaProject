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

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}