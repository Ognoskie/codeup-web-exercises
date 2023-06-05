"use strict";

// function getRandomNumber(upper) {
//     const randomNumber = Math.floor( Math.random() * upper) + 1;
//     return randomNumber;
// }
//
// console.log(getRandomNumber(6));
// console.log(getRandomNumber(334));
// console.log(getRandomNumber(46677));
// console.log(getRandomNumber(57));

/////////////////////

// function goToCoffeeShop(drink, pastry) {
//     alert(`Your ${drink} and ${pastry} are on the way!`);
// }
// goToCoffeeShop("Espresso", "Croissant");

/////////////////////

// function getArea(width, length, unit) {
//     const area = width * length;
//     return `${area} ${unit}`
// }
//
// getArea(10,20);

// FUNCTION DRILLS FROM CODEUP
// 'typeof' in js functions takes a specific data type and singles it out.
//example // Copy and paste the following warm up in your `js-warmups.html` file and complete the TODO...
//
// /* TODO
//
// Write a function, makeUpperCase, that takes in an input and returns the input in uppercase if it is a string.
// If the input is not a string, return false.
//
// Examples:
//


function makeUpperCase(input) {
    if (typeof input === "string" ) {
        return input.toUpperCase();
    }else{
        return false;
    }
}

makeUpperCase('cat') // returns 'CAT'
makeUpperCase('DoG') // returns 'DOG'
makeUpperCase('CODEUP') // returns 'CODEUP'
makeUpperCase(54) // returns false
makeUpperCase(true) // returns false
makeUpperCase(null) // returns false


///////the typeof operator in this function is telling js that everything that is a string make it upper case.


///so basically the typeof operator performs operations specifically to strings or whatever you assign it as.


function isOdd(number) {

}
function isEven(number) {

}

function identity(input) {
    return input
}

console.log(identity("apples"));

function isFive(input) {

}

function addFive(input) {
    return `${input + 5}`
}

console.log(addFive(23));

function isMultipleOfFive(input) {

}

function isThree(input) {

}

function isMultipleOfThree(input) {

}

function isMultiplesOfThreeAndFive(input) {

}

function isMultipleOf(target, n) {
    if (target % n === 0) {
        return ture;
    } else {
        return false;
    }
}

console.log(isMultipleOf(3, 5));

function isTrue(boolean) {

}

function isFalse(boolean) {

}

function isTruthy(input) {
    return !!input;
}

function isFalsy(input) {
    return !!input
}


function isVowel(letter) {

}

function isConsonant(letter) {

}

function isCapital(letter) {

}

function isLowerCase(letter) {

}

function hasLowerCase(string) {
    return /[a-z]/.test(string);
}