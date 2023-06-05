"use strict";

// function addTen(input) {
//     if(typeof input === "number") {
//         return `${input + 10}`;
//     } else {
//         return "false";
//     }
// }
//
// console.log(addTen(20));
// console.log(addTen("cat"));

////////////


// ================================= WARM UP 06/05/2023

// Copy and paste the following warm up in your `js-warmups.html` file and complete the TODO...

/* TODO

Write a function, makeUpperCase, that takes in an input and returns the input in uppercase if it is a string.
If the input is not a string, return false.

Examples:

makeUpperCase('cat') // returns 'CAT'
makeUpperCase('DoG') // returns 'DOG'
makeUpperCase('CODEUP') // returns 'CODEUP'
makeUpperCase(54) // returns false
makeUpperCase(true) // returns false
makeUpperCase(null) // returns false

*/
function makeUpperCase(input) {
        if (typeof input === "string" ) {
            return input.toUpperCase();
        }else{
            return false;
        }
}

console.log(makeUpperCase('cat')); // returns 'CAT'
console.log(makeUpperCase('DoG')); // returns 'DOG'
console.log(makeUpperCase('CODEUP')); // returns 'CODEUP'
console.log(makeUpperCase(54)); // returns false
console.log(makeUpperCase(true)); // returns false
console.log(makeUpperCase(null)); // returns false