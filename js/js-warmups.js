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
// function makeUpperCase(input) {
//         if (typeof input === "string" ) {
//             return input.toUpperCase();
//         }else{
//             return false;
//         }
// }
//
// console.log(makeUpperCase('cat')); // returns 'CAT'
// console.log(makeUpperCase('DoG')); // returns 'DOG'
// console.log(makeUpperCase('CODEUP')); // returns 'CODEUP'
// console.log(makeUpperCase(54)); // returns false
// console.log(makeUpperCase(true)); // returns false
// console.log(makeUpperCase(null)); // returns false



// function sumIsEqual(input1, input2, input3) {
//     if (input1 + input2 === input3) {
//         return true
//     } else{
//         return false
//     }
// }

// console.log(sumIsEqual(1, 2, 3));
// console.log(sumIsEqual(2, 2, 4));
// console.log(sumIsEqual(10, 2, 12));
// console.log(sumIsEqual(10, false, 12));
// console.log(sumIsEqual("10", "2", "12"));
// console.log(sumIsEqual("fred", "bob", "hello"));
//
//
// // walk through
// function sumIsEqual(input1, input2, input3) {
//     if (typeof input1 !== "number" || typeof input2 !== "number" || typeof input3 !== "number" ) {
//         return false
//     } else if (input1 + input2 === input3){
//         return true;
//     } else {
//         return false
//     }
// }


// ================================= WARM UP
//
// Write a function, returnUserObject, that takes in three String arguments: a username, password, and email. The function should return a user object with username, password and email properties.
//
// returnUserObject('jreich', 'password123', 'jreich@email.com') // returns...
//
// {
//     username: 'jreich',
//         password: 'password123',
//     email: 'jreich@email.com'
// }
//
// Assume all inputs are non-empty strings. The order of the properties on the object output do not matter but the order of the INPUTS do matter.

// my example
// function returnUserObject(input1, input2, input3) {
//     if (typeof input1 === "string") {
//         return input1.username
//     } else if (typeof input2 === "string") {
//         return input2.password
//     } else if (typeof input3 === "string") {
//         return input3.email
//     } else {
//         return false
//     }
// }




/// walkthrough

// function returnUserObject(username, password, email) {
//     return {
//         username: username,
//         password: password,
//         email: email
//
//     }
// }
//
// console.log(returnUserObject('jreich', 'password123', 'jreich@email.com'));


// ================================= WARM UP
// Create a function, returnProduct, that takes in an array of numbers and returns the product of all the numbers.
//     Assume all element in the input array are valid numbers. Assume all array inputs have at least 1 number.
// returnProduct([1, 2, 3]) // returns 1 * 2 * 3 = 6
// returnProduct([3, 3, 3]) // returns 3 * 3 * 3 = 27
// returnProduct([4, 1, 2]) // returns 4 * 1 * 2 = 8
// returnProduct([4, 0, 2]) // returns 4 * 0 * 2 = 0
// returnProduct([5, 3, 2]) // returns 5 * 3 * 2 = 30

// function returnProduct(numbers) {
//     let product = 1;
//     for (let i = 0; i < numbers.length; i++) {
//         product *= numbers[i];
//     }
//     return product;
// }
//
// // walkthrough
//
//
//
//
// console.log(returnProduct([1, 2, 3])); // returns 1 * 2 * 3 = 6
// console.log(returnProduct([3, 3, 3])); // returns 3 * 3 * 3 = 27
// console.log(returnProduct([4, 1, 2])); // returns 4 * 1 * 2 = 8





const salesData = [
    {
        month: 'January',
        totalItemsSold: 0
    },
    {
        month: 'February',
        totalItemsSold: 5
    },
    {
        month: 'March',
        totalItemsSold: 2
    },
    {
        month: 'April',
        totalItemsSold: 10
    },
    {
        month: 'May',
        totalItemsSold: 30
    }
];

// const total = salesData[0].totalItemsSold +
//     salesData[1].totalItemsSold +
//     salesData[2].totalItemsSold +
//     salesData[3].totalItemsSold +
//     salesData[4].totalItemsSold;
// console.log(total)


// console.log(salesData[0].totalItemsSold);

function returnTotalSales(salesData) {
    let sum = 0
    //for
    for (let i = 0; i < salesData.length; i++) {
        sum += salesData[i].totalItemsSold;
    }
    return sum;
}

console.log(returnTotalSales(salesData));

//// for each

// salesData.forEach(element => {
//     sum += element.totalItemsSold;
//     return sum;
//
// });



