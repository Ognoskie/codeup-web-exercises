// //
// const secsPerMin = 60;
// const minsPerHour = 60;
// const hoursPerDay = 24;
// const daysPerWeek = 7;
// const weeksPerYear = 52;
//
// const secondsPerDay = secsPerMin * minsPerHour * hoursPerDay;
// console.log(`There are ${secondsPerDay} seconds in a day.`);
//
// const yearsAlive = 23
// console.log("I've been alive for more than [x] seconds!")
//
// //
// const wholesalePrice = 5.45;
// const retailPrice = 9.99;
// const quantity = 47;
//
// const salesTotal = retailPrice * quantity;
//
// const profit = salesTotal - wholesalePrice * quantity;
//
// const profitPerUnit = profit / quantity;
//
// //
// const HTMLBadges = parseFloat(prompt("How many HTML badges do you have?"));
// const CSSBadges = parseFloat(prompt("How many CSS badges do you have?"));
//
// const totalBadges = HTMLBadges + CSSBadges;
// console.log(totalBadges);
// console.log(typeof HTMLBadges, typeof CSSBadges) //verifies the "type of" operator that is being used.
//
// // parseInt() coverts a string to an integer (an whole number without a decimal point ex. 26.50
// // parseFloat() is used for getting a string value and returns a floating point value. basically used for decimal numbers and whole numbers.
//

// to generate random numbers use Math.random() times however many numbers you want to include so Ex. "Math.random() * 6" this will generate random numbers between 0 to 6 but it will be in decimal numbers if you want whole numbers you can us the parseInt example below or Math.floor() or Math.ceil().

console.log(parseInt(Math.random() * 6));

// Math.floor() rounds the number down to the floor Ex. Math.floor(1.2) will come out to 1
// Math.ceil() rounds the number up to the ceiling if you will Ex. Math.ceil(1.2) will come out to 2

// Ex. Math.floor(Math.random() * 6); or Math.ceil(Math.random() * 6);

const dieRoll = Math.floor(Math.random() * 6 ) + 1;
console.log(`You rolled a ${dieRoll}.`);

const temperature = 37.5;
const tempRounded = Math.round(temperature)
const tempRoundDown = Math.floor(temperature)

// collect input from a user
const inputHigh = prompt(`Please provide a number`);

// convert the input to a number
const highNumber = parseInt(inputHigh);


if (highNumber) {

    // use Math.random() and the users number to generate a random number
    const randomNumber = Math.floor( Math.random() * highNumber ) + 1;


    // create a message displaying the random number
    console.log(`${randomNumber} is a random number between 1 and ${highNumber}.`);


} else{
    console.log(`You need to provide a number. Try again.`);
}




// alert(prompt("Please pick a random number"))
//  function randomNumber (input) {
//     if (typeof input === "number") {
//         return Math.random()
//     }else {
//         return false
//     }
//  }

