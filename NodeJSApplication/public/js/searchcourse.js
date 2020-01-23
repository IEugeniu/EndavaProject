function search(courseName) {
    if(document.contains(document.getElementById('courses'))) {
        const nodes = document.getElementById('courses');
        while (nodes.firstChild) {
            nodes.firstChild.remove();
        }
    }
    console.log(courseName);
    $.ajax({
        url: 'http://localhost:8080/courses/search/'  + courseName,
        type: 'get',
        dataType: 'JSON',
        success: function(response){
            console.log(response);
            const courses = response;
            for (let course of courses) {
                const x = `
            <div class="row justify-content-center" onclick="getID(${course.id})">
            <a href="courseDetails.html">
            <div class="col-auto mb-3">
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row no-gutters">
                    <div class="col-md-4"  style="width: 600px;">
                        <img src="${course.image}" class="card-img" alt="${course.name}">
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                        <h5 class="card-title" id="courseName">${course.name}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">Category: ${course.category}</h6>
                        
                                    <div>Author: ${course.authorLogin}</div>
                        
                                    <hr>
                    </div>
                </div>
                </div>
            </div>
            </div>
            </div>
           `

                document.getElementById('courses').innerHTML = document.getElementById('courses').innerHTML + x;
            }
        }
    });
}

function getID(cId){
    localStorage.setItem("courseId", cId);
}