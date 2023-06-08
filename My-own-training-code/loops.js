 "use strict";

    // ================================ WHILE LOOP

    /*
    While loop syntax:

    while (conditionIsTrue) {
    do something...
}

    Used to repeat a block of code until a condition changes to break the loop
    Likely used when the number of iterations is unknown

    Diagram ***Curriculum***

    */

    // basic example
    //  let x = "Braden";
    //  while(x === 10){
    //      console.log(x);
    //      ++x;
    //  }
    // console.log(x);
    // console.log(x);
    // console.log(x);
    // console.log(x);
    // console.log(x);
    // console.log(x);
    // console.log(x);
    // console.log(x);
    // console.log(x);
    // console.log(x);

    // possible use cases

    // while(gameRunning) {
    //     drawCanvas();
    // }

    // while(timerOn) { // elsewhere: a button when clicked, sets timer to off
    //     countUp();
    // }


    // let password = "Open Sesame";
    // let guess = "";
    // while(guess !== password) {
    //     guess = prompt("Please enter the password.");
    // }

    // condition never executes

    // let x = 10;
    // while (x < 5) {
    //     console.log(x);
    //     x--;
    // }


    // infinitely executes

    // let x = 5;
    // while (x !== 4) {
    //     x++;
    // }

    // given variable x, while x is less than 100, increment x by 5. x begins at 0. Console log the value of x for each iteration;

    // let x = 0;
    // while (x < 100) {
    //     console.log(x);
    //     x += 5;
    // }

    // TODO - write a while loop that prints your name 10 times

// the let x = 1 is your start point
 // the while (x < 11) is your limit stop. since x is less than (<) 11 it stops at 10
 //    let x = 1;
 //    while(x < 11){
 //        console.log("Braden");
 //        ++x;
 //    }
 //


    /*
        TODO CHALLENGE - write a function, getNum1To10 that returns a number between 1 and 10 from the user.
          Keep prompting them until a valid number is given
     */


    // ================================ DO-WHILE LOOP

    /*
        While loop syntax:

            do {
                do something no matter what...
            } while(conditionIsTrue);

        Used to execute a block and code at least once
        and repeat it until the condition is no longer true

        Diagram ***Curriculum***

    */

    // basic example

    // let x = 10;
    // do {
    //     alert("This will run.");
    // } while (x !== 10);


    // use case

    // let password = "";
    // do {
    //     password = prompt("Please enter a valid password.");
    // }
    // while(password !== 'letmein');

    // The do-while executes at least once


    /*
        TODO - write a do-while loop that will alert the current date and time and
          continue checking with the user if they want to see the latest time.
     */
// current date can be created with new Date().toLocaleString()

 // const d = new date();
 // do {
 //     const currentDate= prompt("Do you want to see the current time?")
 // }
 // while (date === "yes")
 //
 // console.log(date.toLocaleDateString("en-US"));

// let dt = new Date();
//
// let willContinue = true;
// do {
//     alert(new Date());
//
// }

// let willContinue;
// do {
//    willContinue = confirm("It's currently: " + Date().toLocaleString() + " Would you like to see the time again?" )
// } while(willContinue);




 // ================================ FOR LOOP

 /*
        For loop diagram ***Curriculum***

        For loop syntax:

            for (initialization; test; iteration) {
                do something a set number of times
            }

        Used to perform an action based on a number of iterations

    */

    // with incrementer

    // for (let i = 1; i < 10; ++i) {
    //     console.log(i);
    // }


    // with decrementer

    // for (let i = 20; i >= 10; --i) {
    //     console.log(i);
    // }

    // nested for loops

    // for (let i = 0; i <= 10; ++i) {
    //     console.log("Badgers, badgers, badgers");
    //     for (let j = 0; j <= 1; ++j) {
    //         console.log("Mushroom");
    //     }
    // }

    // multiple iterators (less common)

    // for (let i = 0, j = 9; i < 10; ++i, --j) {
    //     console.log("value of i:" + i + " and value of j: " + j);
    // }


    // console.log each letter in a given string

    // get length of string

    // let someString = prompt("Enter a word");
    //
    // for (let i = 0; i <= someString.length; i += 1) {
    //     console.log(someString.charAt(i));
    // }

    /*
        TODO - write a for loop that prints all even numbers from 2 to 100




        TODO - write a for loop that prints all integers from 20 down to 1
     */

 // for (let i = 2; i < 102; i += 2) {
 //     console.log(i);
 // }
 //
 // for (let i = 20; i >= 1; --i) {
 //     console.log(i);
 // }
 //



    // ================================ BREAK / CONTINUE

    // break - keyword to end the execution of a loop

    // let y = 0;

    // while (true) {
    //     if (y === 10) {
    //         console.log("End of loop!");
    //         break;
    //     }
    //     ++y;
    //     console.log(y);
    // }

    // web example


    // let password = "123";
    //
    // while (true) {
    //     password = prompt("Please enter a valid password: ");
    //     if (password === "123") {
    //         break;
    //     }
    // }

    // console.log("Access granted.");

    // game example

    // let gameRunning = true;
    //
    // let lives = 3;
    //
    // while (gameRunning) {
    //     // play game
    //     if (lives === 0) {
    //         console.log("Game over");
    //         break;
    //     }
    // }



    // output values up to 50 from 0, if value is 25, stop the loop

    // let x = 0;
    //
    // while (x < 50) {
    //     if (x === 25) {
    //         break;
    //     }
    //     console.log(x);
    //     x += 1;
    // }



    // continue

    // console.log("Continue example");
    //
    // let y = 0;
    //
    // while (true) {
    //     y++;
    //     if (y === 100) {
    //         console.log("End of loop!");
    //         break;
    //     }
    //     if (y % 5 === 0) {
    //         continue;
    //     }
    //     console.log(y);
    // }

    // web example

    /*

        Display a stylized list of weather info by year
        in which a specific geographic region experienced drought conditions.
            Skip any years that do not meet the criteria.
            If the years have already been displayed in the list, continue to the next year.

     */


 function getRandomNUmber(upper) {
     return Math.floor(Math.random() * upper ) + 1;
 }

 let counter = 0;

 while ( counter < 10 ) {
     console.log(`The random number is ${getRandomNUmber(10)}`);
     counter += 1;
 }