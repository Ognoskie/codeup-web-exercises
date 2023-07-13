$(() => {

    $.ajax('data/blog.json')
        .done((data, status) => {
            alert("AJAX loaded up");
            console.log("Request status: " + status);
            console.log("Data returned to the server: ");
            console.log(data);
        });




});
