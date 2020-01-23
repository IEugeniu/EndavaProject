$(document).ready (function search() {
    $.ajax({
        url: 'http://localhost:8080/courses/author/'  + localStorage.getItem("user") + "?token=" + getCookie('Auth-Token'),
        type: 'get',
        dataType: 'JSON',
        success: function(response){
            console.log(response);
            const courses = response;
            for (let course of courses) {
                const x = `
            <div class="row justify-content-center" onclick="getID(${course.id})">

            <div class="col-auto mb-3">
            <a href="courseDetails.html">
                        <div class="card mb-3" style="max-width: 540px;" >
                <div class="row no-gutters">
                    <div class="col-md-4" style="width: 600px;">
                        <img src="${course.image}" class="card-img" alt="${course.name}">
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                        <h5 class="card-title" id="courseName">${course.name}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">Category: ${course.category}</h6>
                        
                                    <div>Author: ${course.authorLogin}</div>
                        
                                    <hr>
                        <button type="button" class="btn btn-danger" name="deleteButton" onclick="event.preventDefault(); getID(${course.id}); deleteCourse();">Delete</button>
                        <button types="button" class="btn btn-primary" onClick="event.preventDefault(); getID(${course.id}); goToUpdateCourse();">
                            Edit
                        </button>
                    </div>
                </div>
                </div>
            </div>
</a>

            </div>
            </div>
           `

                document.getElementById('usersCourses').innerHTML = document.getElementById('usersCourses').innerHTML + x;
            }
        }
    });
}, function checkToken() {
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

function getID(cId){
    localStorage.setItem("courseId", cId);
}

function deleteCourse() {
    /*$.ajax({
        url: 'http://localhost:8080/courses/delete/' + localStorage.getItem("courseId"),
        type: 'delete',
        error: function (request, error) {
            console.log(request);
            alert(" Can't do because: " + error);
        },
        success: function(result) {
            alert(" Deleted ");
        }
    });*/
    $.ajax({
        url: 'http://localhost:8080/courses/delete/' + localStorage.getItem("courseId") + "?token=" + getCookie('Auth-Token'),
        type: 'delete',
        success: function (data) {
            console.log(data);
            console.log("+++");
            location.reload();
            //$("#url" + url_id).remove();
        },
        error: function (data, response) {
            console.error('Error:', data);
            console.log(response);
        }
    });
}

function goToUpdateCourse() {
    window.location = "/updateCourse.html";
}