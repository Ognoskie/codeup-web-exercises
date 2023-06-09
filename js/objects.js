// const ambulance = {
//     medCabinet: "Normal saline, Lactated ringers, Drip Set",
//     airwayCabinet: "Igel, King tube, Laryngoscope",
//     traumaCabinet: "Kerlix, Spear, Combat gauze "
// };
// console.log(ambulance.medCabinet);
// console.log(ambulance.airwayCabinet);
// console.log(ambulance.traumaCabinet);


(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

const person = {
    firstName: "Braden",
    lastName: "Wittkop"
    };
    console.log(person);











    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

  // const person = {
  //     firstName: "Braden",
  //     LastName: "Wittkop",
  //       sayHello: function () {
  //           console.log(`Hello from ${this.firstName + ' ' + this.LastName}!` )
  //       }
  //   }
  //   console.log(person.sayHello());


    person.sayHello =function () {
        return `Hello from ${this.firstName} ${this.lastName}`;
    }
    console.log(person.sayHello());





  /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

  function hebDiscountString(shopper) {
      let name = shopper.name;
      let amount = (shopper.amount).toFixed(2);
      let discount = (shopper.amount * 0.12).toFixed(2);
      let discountedAmount = (shopper.amount * 0.88).toFixed(2);
      let message = "";
      if(shopper.amount > 200) {
          message = message + `${name} spent $${amount}. `;
          message += `You got the discount! You just saved: $${discount} `;
          message += `Your new total is: $${discountedAmount}`;
          return message;
      } else {
          return (`${name} spent $${amount}. You did not get the discount. You saved nothing :( Your total is: $${amount}`);
      }
  }

    const shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach((shopper) => {
        console.log(hebDiscountString(shopper));
    })




    // const shoppers = [
    //     {name: 'Cameron', amount: 180},
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320}
    // ];

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */


    const foundationBook = {title: "Foundation", author: {firstName: "Isaac", lastName: "Asimov"}};


    // let books = [
    //     {
    //         title: "Lord of the Rings",
    //         author: {
    //             firstName: "J.R.R",
    //             lastName: "Tolkien"
    //         }
    //     },
    //     {title: "Foundation", author: {firstName: "Isaac", lastName: "Asimov"}},
    //     {title: "Hitchhiker's Guide to the Galaxy", author: {firstName: "Douglas", lastName: "Adams"}},
    //     {title: "Lamb: The Gospel According to Biff, Christ's Childhood Pal", author: {firstName: "Christopher", lastName: "Moore"}},
    //     {title: "Coraline", author: {firstName: "Neil", lastName: "Gaiman"}},
    // ];
    //
    // // console.log(books);
    //
    // books.push({
    //     title: "Twilight",
    //     author: {
    //         firstName: "Stephenie",
    //         lastName: "Meyer",
    //     },
    // });

    // console.log(books);

    // console.log(books[0].author.lastName);
    // console.log(books.indexOf(foundationBook));









    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */


    function createBook(title, authorFirstName, authorLastName) {
        return {
            title: title,
            author: {
                firstName: authorFirstName,
                lastName: authorLastName}
        };
    }

    let books = [
        createBook("Lord of the Rings", "J.R.R.", "Tolkien"),
        createBook("Foundation", "Isaac", "Asimov"),
        createBook("Hitchhiker's Guide to the Galaxy", "Douglass", "Adams"),
        createBook("Lamb: The Gospel According to Biff, Christ's Childhood Pal", "Christopher", "Moore"),
        createBook("Coraline", "Neil", "Gaiman"),
    ];

    books.push(createBook("Twilight", "Stephenie", "Meyer"));


    function showBookInfo(book) {
        console.log(`Title: ${book.title}`);
        console.log(`Author: ${book.author.firstName} ${book.author.lastName}`);
    }
    showBookInfo(books[2]);


})();












    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */













})();