// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
//
// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
//
// Note: The function accepts an integer and returns an integer.


// function squareDigits(num){
//     return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
//
// }

// Unfinished Loop - Bug Fixing #1
// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!


// function createArray(number){
//     let newArray = [];
//
//     for(let counter = 1; counter >= number;){
//         newArray.push(counter);
//     }
//
//     return newArray;
// }
//
// console.log(createArray(7,8,5))




/////////////////////////////////////js book while loop//////////////////////////////////////////////////

// while (condition) {
//  code that gets executed as long as the condition is true
// }


// let nr1 = 0;
// let nr2 = 1;
// let temp;
//
// fibonacciArray = [];
//
// function name() {
//     while (fibonacciArray.length < 25) {
//         fibonacciArray.push(nr1);
//         temp = nr1 + nr2;
//         nr1 = nr2;
//         nr2 = temp;
//     }
//     console.log(fibonacciArray)
// }
//
// name();




// practice exercise 5.1

// const max = 25;
//
// function getRandom (userInput) {
//     prompt("pick a random number from 1 to 25")
//
//     if (`${userInput === Math.floor(Math.random() * max + 1)}congrats you got it right!`){
//         return true
//     }else {
//         return "Sorry that is incorrect"
//     }
// }
//
// console.log(getRandom());

// const max = 25;
// const ranNumber = Math.floor(Math.random() * max) + 1;
// // console.log(ranNumber)
// let correct = false;
// while (!correct) {
//     let guess = prompt("Guess a number 1 - " + max);
//     guess = Number(guess);
//     if (guess === ranNumber) {
//         correct = true;
//         console.log("You got it " + ranNumber);
//     } else if (guess > ranNumber) {
//         console.log("Too high");
//     }else{
//         console.log("Too low");
//     }
// }

//////////////////////////////do while loop example////////////////////////////////////////////


// do {
//     code to be executed if the condition is true
// } while (condition);

// let number;
// function enterNum(userInput) {
//     do {
//         number = prompt("Please enter a number between 0 and 100: ");
//     } while (!(number >= 0 && number < 100));
//     console.log(number);
// }
//
// enterNum();


// practice exercise 5.2

// let counter = 0;
// let step;
// do {
//
// } while ()

// prototype method




// class person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     greet() {
//         console.log("Hi, there!");
//     }
//
// }
//
// person.prototype.introduce = function () {
//     console.log("Hi, Im", this.firstname, this.lastname);
// };
//
// person.prototype.favoriteColor = "green";
//
// let p = new person("Maria", "Saga");
// console.log(p.favoriteColor);
// p.introduce();

// for loop 100 items in an array and make an array out of it

// let arr = [];
// for (let i = 0; i < 100; i++) {
//     arr.push(i);
// }
// console.log(arr)

// only positive now

// let arr = []
// for (let i = 0; i < 100; i = i + 2) {
//     arr.push(i)
// }
// console.log(arr)

//////////////////////////////////////// practice exercise 5.3////////////////////////////////////////

// let myWork = []
// for (let i = 1; i <= 10; i++) {
//     if (2 % 1 === 0) {
//         console.log("flamingos")
//     }
// }
// console.log(myWork)





////////////////////////////////////////Nested loops///////////////////////////////////////////////



let arrOfArrays = [];
for (let i = 0; i < 3; i++) {
    arrOfArrays.push([]);
    for (let j = 0; j < 7; j++) {
        arrOfArrays[i].push(j);
    }
}
console.table(arrOfArrays);




/////////////////////////////////////////////////Nested loops into a table in console log exercise walkthrough/////////////
// create an empty array called "myTable" to hold your data
let myTable = [];
// set variable values for the number of rows = y and cols = x
const rows = 4;
const cols = 7;
// set up a counter variable with an initial value of 0. The counter will be used to set the content and count the values of the cells within the table.
let counter = 0;
// create a loop with conditions to set the number of iterations to construct each row of the table
// within the loop make a temporary array (tempTable) to hold the row of data.
// the columns will be nested within the rows, generating each cell needed for the column

for (let y = 0; y < rows; y++) {
    let tempTable = [];
    // nest a second loop within the first to count the columns. columns are run within the row loop so that we have a uniform number of columns within the table.
    // increment the main counter each iteration of the inner loop, so that we track a master counter of each one of the cells and how many cells are created.
    for (let x = 0; x < cols; x++){
        counter++;
        // push the counter values to the temporary array, tempTable. since the array is a nested array representing a table, the values of the counter can also be used to illustrate the cell values next to each other in the table. Although these are separate arrays representing new rows, the values of the counter will help illustrate the overall sequence of cells in the final table.
        tempTable.push(counter);
    }
    // push the temporary array to the main table. as each iteration builds a new row of array items, this will continue to build the main table in the array.
    myTable.push(tempTable);
}
// out put into the console with console.table(myTable). this will show you a visual representation of the table structure.
console.table(myTable);






///////////////////////////////////////////LOOPS AND ARRAYS//////////////////////////////////////////////////////////////

// example of how arrays and loops are made

// let arr = [some array];
// for (initialize variable; variable smaller than arr.length; statement) {
//     code to be exectued
// }

// let names = ["john", "bobo", "lil jimmy", "sim sim", "max"];
// for (let i = 0; i < names.length; i++) {
//     console.table(names[i]);
// }
//

// the length property is used to determine the maximum value of our index.
// the index of an array starts counting at 0, but the length property does not.
// the index is always one smaller than the length.
// which is why we loop over the values of the array by increasing the length.

// we are simply printing the arrays.
// but we can be changing the values of the array in a loop, for example, like below:

let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
for (let i = 0; i < names.length; i++) {
    names[i] = "hello " + names[i];
}
console.log(names)

// this adds hello to all the objects in the array above

console.log(2+"2"-1);



















