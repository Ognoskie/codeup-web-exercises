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

const max = 25;
const ranNumber = Math.floor(Math.random() * max) + 1;
// console.log(ranNumber)
let correct = false;
while (!correct) {
    let guess = prompt("Guess a number 1 - " + max);
    guess = Number(guess);
    if (guess === ranNumber) {
        correct = true;
        console.log("You got it " + ranNumber);
    } else if (guess > ranNumber) {
        console.log("Too high");
    }else{
        console.log("Too low");
    }
}