"use strict";
$(() => {



        // TODO: Create an AJAX GET request for the file under data/inventory.json

        // TODO: Take the data from inventory.json and append it to the products table
        //       HINT: Your data should come back as a JSON object; use console.log() to inspect
        //             its contents and fields
        //       HINT: You will want to target #insertProducts for your new HTML elements


    // Your online tool store should load data from the JSON file using a get request and append the data to the table. You will need to use either $.ajax() or $.get(), and a .done() callback.

    //     Add some new entries to inventory.json and see how the data on the page gets updated.

    //     Add a "Refresh" button that will load inventory.json for you without having to refresh the entire page.

    //     Add Twitter Bootstrap to your online store with some custom CSS to make the style your own.


    $.ajax('data/inventory.json')
        .done((data, status) => {
            alert("AJAX loaded up");
            console.log("Request status: " + status);
            console.log("Data returned to the server: ")
            console.log(data);
            let html = " ";
            data.forEach(function (product) {
                html += "<tr>";
                html += "<td>" + product.title + "</td>";
                html += "<td>" + product.quantity + "</td>";
                html += "<td>" + product.price + "</td>";
                html += "<td>" + product.categories + "</td>";
                html += "</tr>";
            });
            $("#insertProducts").html(html);
        });




    // $.post("data/inventory.json", {
    //     "title": "Saw",
    //     "quantity": 45,
    //     "categories": [
    //         "tool",
    //         "powered"
    //     ],
    //     "price": 50
    // }).done((data) => {
    //     console.log(data)
    // })


    $('button').on('click', () => {
        $.ajax(`data/inventory.json`)
            .done((data) => {
                console.log(data);
                refresh(data);
            })
            .fail((response) => {
                console.log("This failed")
            })
    })


const refresh = () => {
        window.location.reload("Refresh")
}



    // [
    //     {
    //         "title": "Hammer",
    //         "quantity": 25,
    //         "categories": [
    //             "tool"
    //         ],
    //         "price": 20
    //     }, {
    //     "title": "Drill",
    //     "quantity": 5,
    //     "categories": [
    //         "tool",
    //         "powered"
    //     ],
    //     "price": 100
    // }, {
    //     "title": "Mower",
    //     "quantity": 5,
    //     "categories": [
    //         "tool",
    //         "gas",
    //         "outdoor"
    //     ],
    //     "price": 200
    // }, {
    //     "title": "Screwdrivers",
    //     "quantity": 25,
    //     "categories": [
    //         "tool"
    //     ],
    //     "price": 10
    // }
    // ]











})
