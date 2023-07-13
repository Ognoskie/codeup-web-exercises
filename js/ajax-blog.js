$(() => {



    // Use Ajax to load the contents of blog.json and add the data from it to your #posts div.

    //     Add additional entries to blog.json and make sure your changes are reflected on the page.


    $.ajax('data/blog.json')
        .done((data, status) => {
            alert("AJAX loaded up");
            console.log("Request status: " + status);
            console.log("Data returned to the server: ");
            console.log(data);
        });

    // function renderPokemon(pokemonData) {
    //     $('div.pokemon').html(`
    //         <div class="card">
    //             <h3>${pokemonData.name}</h3>
    //             <img src="${pokemonData.sprites.front_default}">
    //         </div>
    //     `)
    // }






    // [
    //     {
    //         "title": "My First Blog Post",
    //         "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //         "categories": [
    //             "greek"
    //         ],
    //         "date": "January 25, 2015"
    //     }, {
    //     "title": "The Second Post",
    //     "content": "Cupcake ipsum dolor sit amet gummies. Cake chocolate sweet ice cream oat cake biscuit bear claw dessert. Jujubes marzipan toffee apple pie pastry dragée jujubes marshmallow. Dragée chocolate gingerbread liquorice chocolate bar jujubes. Sweet chocolate bar jelly-o chocolate cake candy carrot cake cotton candy macaroon marzipan. Sweet roll biscuit sweet gummies topping sesame snaps tootsie roll sugar plum pie. Sweet muffin croissant chocolate cake chupa chups. Donut croissant gummies donut powder ice cream. Chupa chups halvah apple pie topping jelly beans donut candy canes donut. Bonbon cake gummi bears cheesecake tart topping powder liquorice gummi bears.",
    //     "categories": [
    //         "family",
    //         "candy",
    //         "sweets",
    //         "sugar"
    //     ],
    //     "date": "February 14, 2015"
    // }
    // ]

});
