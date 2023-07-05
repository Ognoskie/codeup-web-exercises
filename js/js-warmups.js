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





// const salesData = [
//     {
//         month: 'January',
//         totalItemsSold: 0
//     },
//     {
//         month: 'February',
//         totalItemsSold: 5
//     },
//     {
//         month: 'March',
//         totalItemsSold: 2
//     },
//     {
//         month: 'April',
//         totalItemsSold: 10
//     },
//     {
//         month: 'May',
//         totalItemsSold: 30
//     }
// ];

// const total = salesData[0].totalItemsSold +
//     salesData[1].totalItemsSold +
//     salesData[2].totalItemsSold +
//     salesData[3].totalItemsSold +
//     salesData[4].totalItemsSold;
// console.log(total)


// console.log(salesData[0].totalItemsSold);

// function returnTotalSales(salesData) {
//     let sum = 0
//     //for
//     for (let i = 0; i < salesData.length; i++) {
//         sum += salesData[i].totalItemsSold;
//     }
//     return sum;
// }
//
// console.log(returnTotalSales(salesData));

//// for each

// salesData.forEach(element => {
//     sum += element.totalItemsSold;
//     return sum;
//
// });



// ================================= WARM UP

// Create a function, returnAvgSales, that takes in an array of sales data objects and returns the average of all
// total items sold. Assume all elements in the input array are valid sales data objects with a totalItemsSold
// property. If the array is empty, return 0. If the array has one element, return the value of the totalItemsSold.
//
//     EXAMPLE...

// const salesData = [
//     {
//         month: 'January',
//         totalItemsSold: 0
//     },
//     {
//         month: 'February',
//         totalItemsSold: 5
//     },
//     {
//         month: 'March',
//         totalItemsSold: 2
//     },
//     {
//         month: 'April',
//         totalItemsSold: 10
//     },
//     {
//         month: 'May',
//         totalItemsSold: 30
//     }
// ];

// returnAvgSales(salesData) // returns 9.4

// function returnAvgSales() {
//
//     if (salesData.length === 0) return 0;
//     if (salesData.length === 1) return salesData[0].totalItemsSold;
//
//     let total = 0
//     salesData.forEach(salesDataObj => {
//         total += salesDataObj.totalItemsSold;
//     })
//     return total / salesData.length;
//
// }
//
// console.log(returnAvgSales(salesData))



//
// ================================= WARM UP
//
// Create a function, returnAdmins, that takes in an array of user objects
// and returns an array of only the admin user objects. Assume the array
// has at least one user object and all elements have an isAdmin property.
//
//     Example:


// const users = [
//
//     {
//         username: 'fred123',
//         password: 'letmein',
//         email: 'fred123@email.com',
//         isAdmin: true
//     },
//     {
//         username: 'cindy123',
//         password: 'hello123',
//         email: 'cindy123@email.com',
//         isAdmin: false
//     },
//     {
//         username: 'kathy123',
//         password: 'letmein',
//         email: 'kathy123@email.com',
//         isAdmin: true
//     },
//     {
//         username: 'kyle123',
//         password: 'letmein',
//         email: 'kyle123@email.com',
//         isAdmin: false
//     }
// ]


// function returnAdmins(users) {
//     const admins = users.filter(users => users.isAdmin);
//     return admins;
// }
// const adminUsers = returnAdmins(users);
// console.log(adminUsers)
/*

returnAdmins(users) returns...

[

    {
        username: 'fred123',
        password: 'letmein',
        email: 'fred123@email.com',
        isAdmin: true
    },
    {
        username: 'kathy123',
        password: 'letmein',
        email: 'kathy123@email.com',
        isAdmin: true
    }
]

*/



//
// const users = [
//
//     {
//         username: 'fred123',
//         password: 'letmein',
//         email: 'fred123@email.com',
//         isAdmin: true
//     },
//     {
//         username: 'cindy123',
//         password: 'hello123',
//         email: 'cindy123@email.com',
//         isAdmin: false
//     },
//     {
//         username: 'kathy123',
//         password: 'letmein',
//         email: 'kathy123@email.com',
//         isAdmin: true
//     },
//     {
//         username: 'kyle123',
//         password: 'letmein',
//         email: 'kyle123@email.com',
//         isAdmin: false
//     }
// ]
//
//
//
//
//
// function returnAdmins(users) {
//     const admins = [];
//     for (let i = 0; i < users.length; i += 1){
//         if (users[i].isAdmin === true){
//             admins.push(users[i].username);
//         }
//     }
//     return admins
// }
//
// console.log(returnAdmins(users))












// ================================= WARM UP
//
// Write a function that takes a neighborhood object and determines if it is desirable. A neighborhood is desirable.
//     If the median home price is less than 300000, crime rates are low, and the total rating of schools is at least 24.
// The function should return true if the neighborhood object is desireable and false otherwise.

// example data...




//
//     const neighborhood1 = {
//     neighborhood: "Lovely Estates",
//     medianHomePrice: 280000,
//     pool: true,
//     tennis: false,
//     crimeRate: "low",
//     schools: 22
// };
//
// const neighborhood2 = {
//     neighborhood: "Luminous Estates",
//     medianHomePrice: 270000,
//     pool: true,
//     tennis: false,
//     crimeRate: "high",
//     schools: 24
// }
//
// const neighborhood3 = {
//     neighborhood: "Oak Mountain",
//     medianHomePrice: 290000,
//     pool: false,
//     tennis: false,
//     crimeRate: "low",
//     schools: 24
// }
//
// const neighborhood4 = {
//     neighborhood: "Ginormous Acres",
//     medianHomePrice: 350000,
//     pool: true,
//     tennis: true,
//     crimeRate: "low",
//     schools: 27
// }

// my code

// function neighborhoodObject(neighborhood) {
//     return neighborhood.medianHomePrice < 300000 &&
//         neighborhood.crimeRate === "low" &&
//         neighborhood.schools >= 24;
// }
//
// console.log(neighborhoodObject(neighborhood1));
// console.log(neighborhoodObject(neighborhood2));
// console.log(neighborhoodObject(neighborhood3));
// console.log(neighborhoodObject(neighborhood4));


// object destructuring

// function neighborhoodObject({medianHomePrice, crimeRate, schools}) {
//     return medianHomePrice < 300000 &&
//         crimeRate === "low" &&
//         schools >= 24;
// }
//
// console.log(neighborhoodObject(neighborhood1));
// console.log(neighborhoodObject(neighborhood2));
// console.log(neighborhoodObject(neighborhood3));
// console.log(neighborhoodObject(neighborhood4));




// ================================= WARM UP
//
//
// Write a function, returnLargestStudentCount, that takes in an array of classes returns the number of students in the largest class.
// Assume at least one class object will be present in the input array with students property set to a valid positive integer.

//     let classes = [
//     {class: "6th grade history", students: 18},
//     {class: "7th grade history", students: 20},
//     {class: "8th grade history", students: 22},
//     {class: "4th grade history", students: 30},
//     {class: "10th grade history", students: 25}
// ];

// my code
    // function returnLargestStudentCount(array, student) {
    //     for (let student of array) {
    //         if (student === array) {
    //             return student
    //         }
    //     }
    //     return "Not largest class"
    // }


// walkthrough
//     let highestStudentCount = 0;
//
//     for (let i = 0; i < classes.length; ++i) {
//         if (highestStudentCount < classes[i].students) {
//             highestStudentCount = classes[i].students;
//         }
//     }
// console.log(highestStudentCount);
// console.log(returnLargestStudentCount(classes));// returns 30

// 1. Create a function that prints 1 to 100.
//
//function printOneHundred() {
//     for (let i = 0; i <= 100; i++){
//         console.log(i)
//     }
// }
// printOneHundred();

// 2. Create a function, fizzBuzz, that prints out all numbers from 1 to 100 but instead of printing
// numbers that are evenly divisible by 3, print 'fizz' and any numbers evenly divisible
// by 5, print 'buzz'. For any numbers that are evenly divisible by 3 AND 5, print 'fizzbuzz'.



    /*
    fizzBuzz() // prints...

    1
    2
    'fizz'
    4
    'buzz'
    'fizz'
    7
    8
    'fizz'
    'buzz'
    11
    'fizz'
    13
    14
    'fizzbuzz'
    etc...

    */
// this code was fun
function fizzBuzz() {
    for (let i = 1; i <= 100; i++){
        if (i % 3 === 0 && i % 5 === 0){
            console.log("fizzbuzz");
        } else if (i % 5 === 0){
            console.log("buzz");
        }else if (i % 3 === 0){
            console.log("fizz")
        }else{
            console.log(i)
        }
    }
}
fizzBuzz();










