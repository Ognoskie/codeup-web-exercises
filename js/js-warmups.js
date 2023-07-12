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
// function fizzBuzz() {
//     for (let i = 1; i <= 100; i++){
//         if (i % 3 === 0 && i % 5 === 0){
//             console.log("fizzbuzz");
//         } else if (i % 5 === 0){
//             console.log("buzz");
//         }else if (i % 3 === 0){
//             console.log("fizz")
//         }else{
//             console.log(i)
//         }
//     }
// }
// fizzBuzz();




// You are given an array of runner objects, where each object represents a
// runner with properties name, age, and lapTimes (in seconds). Write a
// function called getTopRunners that takes the runners array as input and
// returns an array of top runners. A runner is considered top if their
// average lap time is 50 seconds or faster. If there are no top runners in
// the input array, the function should return an empty array


// HINT: You might want to create a function called calculateLapTimeAverage
// that takes in an array of numbers and returns the average


// // Input:
// const runners = [
//     { name: "Alice", age: 25, lapTimes: [50.5, 45.2, 48.8, 47.1],
//
//     },
//     { name: "Bob", age: 28, lapTimes: [55.2, 50.7, 53.3, 52.9] },
//     { name: "Charlie", age: 24, lapTimes: [48.9, 46.3, 50.1, 49.5] },
//     { name: "David", age: 27, lapTimes: [51.4, 50.2, 49.8, 52.3] },
//     { name: "Eve", age: 26, lapTimes: [47.7, 45.9, 46.6, 48.3] },
// ];
//
//
//
// function getTopRunners() {
//
//     // declare a variable to store every top runner (array)
// let topRunners = [];
//     for (let i = 0; i < runners.length; i++) {
//         const sum = runners[i].lapTimes.reduce((acc, current) => acc + current, 0);
//         const runnersAverage = sum / runners[i].lapTimes.length;
//
//         if (runnersAverage <= 50) {
//             topRunners.push(runners[i])
//             // dont return
//
//             // push the current runner to the top runners array
//         }
//     }
//     // return the top runners array
// return topRunners
//
// }
//
// console.log(getTopRunners())


// Expected Output:
// [
//     { name: 'Alice', age: 25, lapTimes: [50.5, 45.2, 48.8, 47.1] },
//     { name: 'Charlie', age: 24, lapTimes: [48.9, 46.3, 50.1, 49.5] },
//     { name: 'Eve', age: 26, lapTimes: [47.7, 45.9, 46.6, 48.3] }
// ]
//
//
//
// // BONUS: Each runner in the resulting array should be represented as an
// // object containing only the name and age properties.
//
//
// // Expected Bonus Output:
//     [
//     { name: "Alice", age: 18 },
//         { name: "Charlie", age: 19 },
//         { name: "Eve", age: 17 }
//     ]










// get top runner










// Given the following ARRAY of objects, write a function that LOOPS through
// the array and console logs the following for each Hogwarts House:
// Name:
// Animal:
// Founder:
// Common Room:
// First and Last Name of at least one house head:



// HINT:
// When you copy the object into IntelliJ, make sure to expand and collapse
// the different properties to get a good idea of what is going on and keep
// from being overwhelmed


// BONUS:
// - Log a random house head each time
// - Throw some traits in there
// - Write a conditional statement to log something special for your favorite house





const hogwartsHouses = [
    {
        "id": "0367baf3-1cb6-4baf-bede-48e17e1cd005",
        "name": "Gryffindor",
        "houseColours": "Scarlet and gold",
        "founder": "Godric Gryffindor",
        "animal": "Lion",
        "element": "Fire",
        "ghost": "Nearly-Headless Nick",
        "commonRoom": "Gryffindor Tower",
        "heads": [
            {
                "id": "530da97d-5a83-4ea6-bc15-790edf5b5efc",
                "firstName": "Minerva",
                "lastName": "McGonagall"
            },
            {
                "id": "9915c5f8-9177-4f63-bba8-d04387a404f9",
                "firstName": "Godric",
                "lastName": "Gryffindor"
            }
        ],
        "traits": [
            {
                "id": "1773bce8-7a22-4d57-b8e1-7e1cbe26fa2b",
                "name": "Courage"
            },
            {
                "id": "21f22e43-efd9-4a43-87f5-eab5fb1666ea",
                "name": "Chivalary"
            },
            {
                "id": "60d8f5d0-de4b-41f7-b152-40543555bf3a",
                "name": "Nerve"
            },
            {
                "id": "68f73efc-fae9-4a54-b3e2-04bbe72f5d63",
                "name": "Daring"
            },
            {
                "id": "7e6d321d-fe7d-4c05-8ad7-ddabda83d8cd",
                "name": "Determination"
            },
            {
                "id": "adf83e9f-859b-41c4-947d-b359a05f8f3c",
                "name": "Bravery"
            }
        ]
    },
    {
        "id": "805fd37a-65ae-4fe5-b336-d767b8b7c73a",
        "name": "Ravenclaw",
        "houseColours": "Blue and bronze",
        "founder": "Rowena Ravenclaw",
        "animal": "Eagle",
        "element": "Air",
        "ghost": "Grey Lady",
        "commonRoom": "Ravenclaw Tower",
        "heads": [
            {
                "id": "102ac5fc-db71-4055-8250-bc238cffb3d9",
                "firstName": "Filius",
                "lastName": "Flitwick"
            },
            {
                "id": "57c04cf4-f3dd-46d6-a78f-84c30fb42533",
                "firstName": "Rowena",
                "lastName": "Ravenclaw"
            }
        ],
        "traits": [
            {
                "id": "08a54d21-6137-4eda-9c32-004706650b44",
                "name": "Learning"
            },
            {
                "id": "5056effc-b92b-4f86-96fd-978b26a849da",
                "name": "Acceptance"
            },
            {
                "id": "78db6224-33d1-490d-a553-9bbbedb3282a",
                "name": "Inteligence"
            },
            {
                "id": "ab88a4fb-1c4d-4e14-88bf-7f55dfabb75a",
                "name": "Wisdom"
            },
            {
                "id": "e43d0b2f-dcfe-4a5f-b3ab-d39679bbfbe3",
                "name": "Wit"
            },
            {
                "id": "ffc55017-c03f-490a-9c48-2f38af6e2f0a",
                "name": "Creativity"
            }
        ]
    },
    {
        "id": "85af6295-fd01-4170-a10b-963dd51dce14",
        "name": "Hufflepuff",
        "houseColours": "Yellow and black",
        "founder": "Helga Hufflepuff",
        "animal": "Badger",
        "element": "Earth",
        "ghost": "Fat Friar",
        "commonRoom": "Hufflepuff Basement",
        "heads": [
            {
                "id": "a593e800-95dc-47ab-9243-6ac98d2f6ab4",
                "firstName": "Helga",
                "lastName": "Hufflepuff"
            },
            {
                "id": "fab07935-774e-4eb4-8ed5-621bfe416d85",
                "firstName": "Pomona",
                "lastName": "Sprout"
            }
        ],
        "traits": [
            {
                "id": "22d8bc5b-67ee-49fb-89ee-8811fc22062b",
                "name": "Hardworking"
            },
            {
                "id": "76973c67-0dd1-4aca-b0b7-b053d9eaf206",
                "name": "Patience"
            },
            {
                "id": "a8494f18-caff-491e-96e3-1ff73bd6f4ab",
                "name": "Loyalty"
            },
            {
                "id": "af80b93e-3c61-4586-824a-8f7e6ac4ae0a",
                "name": "Just"
            },
            {
                "id": "c080647f-5b31-434f-8327-376abbfb0989",
                "name": "Fairness"
            },
            {
                "id": "f62f4753-fdb5-473b-a8ac-07c1b5844eec",
                "name": "Modesty"
            }
        ]
    },
    {
        "id": "a9704c47-f92e-40a4-8771-ed1899c9b9c1",
        "name": "Slytherin",
        "houseColours": "Green and silver",
        "founder": "Salazar Slytherin",
        "animal": "Serpent",
        "element": "Water",
        "ghost": "Bloody Baron",
        "commonRoom": "Slytherin Dungeon",
        "heads": [
            {
                "id": "36ba2ceb-6b6f-48a3-b512-9c1e66321eff",
                "firstName": "Horace",
                "lastName": "Slughorn"
            },
            {
                "id": "5cac8ad3-b5fc-4c48-a951-990cdd5671bc",
                "firstName": "Salazar",
                "lastName": "Slytherin"
            },
            {
                "id": "ef90f8c9-9f03-478e-baec-8a3c487e5271",
                "firstName": "Severus",
                "lastName": "Snape"
            }
        ],
        "traits": [
            {
                "id": "0992c505-80dd-4b49-ad0b-3b7383d6ec89",
                "name": "Resourcefulness"
            },
            {
                "id": "36dad9bf-010e-47ef-8908-ecb6d5acfac5",
                "name": "Selfpreservation"
            },
            {
                "id": "42b7c304-5e62-4fae-9e52-f8c6a106e406",
                "name": "Ambition"
            },
            {
                "id": "540aaafe-6185-4dc8-94ed-bd0236b433d3",
                "name": "Cunning"
            },
            {
                "id": "d7b7c1b7-3fce-4474-9fd1-9b731e0b2649",
                "name": "Pride"
            },
            {
                "id": "df43d46b-1ebf-409d-a63e-6c6bcb049aef",
                "name": "Determination"
            }
        ]
    }
]



// Given the following ARRAY of objects, write a function that LOOPS through
// the array and console logs the following for each Hogwarts House:
// Name:
// Animal:
// Founder:
// Common Room:
// First and Last Name of at least one house head:

// const houses = () => {
//     for (let i = 0; i < hogwartsHouses.length; i++) {
//         console.log(hogwartsHouses[i].name.length)
//     }
//
// }
//
// console.log(houses)





const logHouseInfo = (houses) => {
    houses.forEach((house) => {
        console.log(`
        Hogwarts House: ${house.name}
        Animal: ${house.animal}
        Founder: ${house.founder}
        Common Room: ${house.commonRoom}
        House Head: ${house.heads[0].firstName} ${house.heads[0].lastName}
        `)
    })
}

logHouseInfo(hogwartsHouses)











