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

////////////////// while loop tree house lecture/////////////////

 // function getRandomNUmber(upper) {
 //     return Math.floor(Math.random() * upper ) + 1;
 // }
 //
 // let counter = 0;
 //
 // while ( counter < 10 ) {
 //     console.log(`The random number is ${getRandomNUmber(10)}`);
 //     counter += 1;
 // }

//////////////// do while loop lecture ///////////////////

 // function getRandomNUmber(upper) {
 //     return Math.floor(Math.random() * upper ) + 1;
 // }
 //
 // let counter = 0;
 // do {
 //     console.log(`The random number is ${getRandomNUmber(10)}`);
 //     counter ++;
 // } while (counter < 10);



 // let count = 1;
 // while (count < 26) {
 //     console.log(count);
 //     count += 1;
 // }
 // console.log(count);



 ///////////////////coderbyte////////////////////////////////

 // Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.
 //     Examples


 // Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
 // Output: 1,4,13
 // Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
 // Output: 1,9,10


 //
 // function FindIntersection(strArr) {
 //  const list1 = strArr[0].split(", ");
 //  const list2 = strArr[1].split(", ");
 //  const intersection = [];
 //
 //  let i = 0;
 //  let j = 0;
 //
 //  while (i < list1.length && j < list2.length) {
 //   const num1 = parseInt(list1[i]);
 //   const num2 = parseInt(list2[j]);
 //
 //   if (num1 === num2) {
 //    intersection.push(num1);
 //    i++;
 //    j++;
 //   } else if (num1 < num2) {
 //    i++;
 //   } else {
 //    j++;
 //   }
 //  }
 //
 //  if (intersection.length === 0) {
 //   return "false";
 //  } else {
 //   return intersection.join(",");
 //  }
 // }
 //
 // console.log(FindIntersection(readline()));


 /////////////////////ChatGPT loops exercises//////////////////////////////////////


 // /////Problem 1: Print numbers from 1 to 10///////
 //
 // for (let i = 1; i <= 10; i++) {
 //  console.log(i);
 // }
 //
 //

 //////////////Problem 2: Print even numbers from 1 to 20///////////

 // for (let i = 2; i <= 20; i += 2) {
 //  console.log(i);
 // }
 //
 //
 // ///////////Problem 3: Calculate the sum of numbers from 1 to 100////////////////////
 //
 //
 // let sum = 0;
 // for (let i = 1; i <= 100; i++) {
 //  sum += i;
 // }
 // console.log(sum);
 //
 // //////////////Problem 4: Print the elements of an array////////////////
 //
 // const arr = [1, 2, 3, 4, 5];
 // for (let i = 0; i < arr.length; i++) {
 //  console.log(arr[i]);
 // }









//  1. Print numbers from 1 to 10 using a for loop.

 for (let i = 1; i <= 10; i++) {
  console.log(i);
 }



//   2. Print even numbers from 1 to 20 using a while loop.
//
//   3.Calculate the sum of all numbers from 1 to 100 using a for loop.
//
//   4.Given an array of numbers, find the maximum number using a for loop.
//
//   5.Given a string, count the number of vowels (a, e, i, o, u) using a for loop.
//
// 6. Print the multiplication table of a given number (e.g., 5) using a nested for loop.
//
// 7.Write a program to check if a given number is prime or not using a for loop.
//
// 8.Given an array of names, print each name on a new line using a for...of loop.
//
// 9.Generate a Fibonacci sequence up to a given number (e.g., 100) using a while loop.
//
// 10.Write a program to reverse a given string using a for loop.










///////////////////Bills loops//////////////////////////////////

 // Use the following array for these practice exercises
 const cars = ["Charger", "Equinox", "Malibu", "Soul", "Fusion", "Focus", "Avenger", "Town and Country"];

 //Using the cars array, log the car with the fewest letters in it's name

 //log the car with the most letters

 //Use a loop to output the following text in the console:
 //1
 //1 2
 //1 2 3
 //1 2 3 4
 //1 2 3 4 5
 //1 2 3 4
 //1 2 3
 //1 2
 //1


function pyramid() {
 for (let i = 1; i <= 5; ++i){
  let levelPyramid = '';
  for (let j = 5; j <= 1; --j) {
  return  levelPyramid = levelPyramid = i;
  }
  console.log(levelPyramid);
 }
}

 console.log(pyramid());

for (let i = 1; i <= 50; ++i){

}



const fewestLetters = array => {
 const sortedArray = [...array];
 return sortedArray.sort((a, b) => a.length - b.length);
}

 console.log(fewestLetters(cars));

const mostLetters = array => {
 const sortedArray = [...array];
 return sortedArray.sort((a, b) => b.length - a.length);
}

 console.log(mostLetters(cars));









//////////////////loops session with steve/////////////////////


// make a loop that goes through 50 times

 for (let i = 0; i < 50; ++i){

 }