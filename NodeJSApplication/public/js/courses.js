const setEditModal = (isbn) => {
    // We will implement this later
}

const deleteBook = (isbn) => {
    // We will implement this later
}

const loadCourses = () => {
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost:8080"  + '/courses?token=' + getCookie("Auth-Token"), false);
    xhttp.send();

    console.log(xhttp.responseText.toString())
    const courses = JSON.parse(xhttp.responseText);

    for (let course of courses) {
        const x = `
            <!--<div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <div class="col-md-4">
                            <img src="https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="card-img" alt="${course.name}">
                        </div>
                        <h5 class="card-title">${course.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Category</h6>

                        <div>Author: </div>

                        <hr>

                        <button type="button" class="btn btn-danger">Delete</button>
                        <button types="button" class="btn btn-primary" data-toggle="modal"
                            data-target="#editBookModal" onClick="setEditModal()">
                            Edit
                        </button>
                    </div>
                </div>
            </div>-->
            <div class="row justify-content-center">
            <div class="col-auto mb-3">
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="https://www.itl.cat/pngfile/big/30-303191_background-images-for-editing-editing-pictures-background-background.jpg" class="card-img" alt="${course.name}">
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                        <h5 class="card-title">${course.name}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">Category</h6>
                        
                                    <div>Author: </div>
                        
                                    <hr>
                        
                                    <!--<button type="button" class="btn btn-danger">Delete</button>
                                    <button types="button" class="btn btn-primary" data-toggle="modal"
                                        data-target="#editBookModal" onClick="setEditModal()">
                                        Edit
                                    </button>-->
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

loadCourses();

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

/*function getCourses() {
    $.ajax({
        url: 'http://localhost:8080' + '/courses?token=' + getCookie("Auth-Token"),
        type: 'get',
        success: function (data, textStatus, request) {
            const table = document.getElementById("courses");
            for (let i = 0; i < data.length; i++) {
                let row = table.insertRow(i + 1);
                const cellId = row.insertCell(0);
                const cellName = row.insertCell(1);
                cellId.innerHTML = data[i]["id"];
                cellName.innerHTML = data[i]["name"];
                console.log("+++");
                console.log(cellName.toString());
            }
        }
    })
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}*/