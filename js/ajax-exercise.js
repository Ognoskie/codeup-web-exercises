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


    $.ajax('data/inventory-data-ajax.json')
        .done((data) => {
            console.log(data);
        })




























})
