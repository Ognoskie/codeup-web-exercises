// 1. Write a function named isNegative that accepts a number and returns true or false based on whether the input is negative.
//
// isNegative(-1) // true
// isNegative(-5) // true
// isNegative(0) // false
// isNegative(6) // false


const isNegative = (number) => {
    return number < 0;
};

// 2. Write a function named isTen that accepts a number and returns a boolean that indicates whether or not that number is equal to 10.
//
// isTen(1) // false
// isTen(10) // true
// isTen('10') // false

const isTen = (number) => {
    return number === 10
};

// 3. Write a function named double that accepts a number and returns the number doubled.
//
// double(5) // 10
// double(20) // 40

const double = (number) => {
    return number * 2;
};


// 4. Write a function named remove9s that accepts an array of numbers and returns an array with all the same numbers except for 9.
//
//     remove9s([7, 8, 9, 10]) // [7, 8, 10]
// remove9s([1, 2, 3])     // [1, 2, 3]
// remove9s([9, 9, 9])     // []

const remove9s = (arr) => {
    let output = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 9) {
            output.push(arr[i]);
        }
    }
    return output
};



// 5. Write a function named average that accepts an array of numbers and returns the average of those numbers.
//
// average([1, 2, 3]) // 2
// average([4, 6, 8, 10, 12]) // 8
// average([1, 2]) // 1.5

const average = () => {
    let output = 0;

    for (let i = 0; i < arr.length; i++) {
        output += arr[i];


    }
    const avg = output / arr.length;

    return avg;
}


// 6. Write a function named countOdds that accepts an array of numbers and returns the number of odd numbers in the array.
//
// countOdds([1, 2, 3]) // 2
// countOdds([4, 6, 8, 10]) // 0
// countOdds([1, 2, 1, 1]) // 3

const countOdd = (arr) => {
    let output = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
            output++
        }
    }
    return output;
}



// 7. Write a function named averageSales that accepts an array of objects where each object represents a person, and has a sales property. The function should return the average of every object's sales property.
//
// averageSales([
//     {name: 'Jim Halpert', sales: 100},
//     {name: 'Dwight Schrute', sales: 50},
//     {name: 'Andy Bernard', sales: 150},
// ])
// // 100


const averageSales = (arr) => {
    let output = 0;

    for (let i = 0; i < arr.length; i++) {
        output += arr[i].sales;
    }
    const avg = output / arr.length;

    return avg;
};


// 8. Write a function named convertNameToObject that accepts a string that contains a first name and last name separated by a space character, and returns an object with properties firstName and lastName.
//
// convertNameToObject('Harry Potter') // {firstName: 'Harry', lastName: 'Potter'}
// convertNameToObject('Ron Weasley') // {firstName: 'Ron', lastName: 'Weasley'}



const convertNameToObject = (string) => {
    const splitName = string.split(" ");
    const firstName = splitName[0];
    const lastName = splitName[1];

    const nameObj = {
        firstName,
        lastName,
    }

    return nameObj;
}


// 9. Write a function named countVowels that accepts a string and returns the number of vowels in that string. (Don't worry about or count "y" as a vowel)
//
// countVowels('Hello, Codeup!') // 5
// countVowels('ABCDE!') // 2


const countVowels = (string) => {
    let count = 0;
    const vowels = ["a", "e", "i", "o", "u"];

    for (let i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
            count++;
        }
    }
    return count;
}



// 10. Write a function named analyzeWord. It should take in a string and return an object with information about the input word. The object returned should have the following properties:
//
//     word: the original word that was passed into the function
// numberOfLetters: the number of letters in the word
// numberOfVowels: the number of vowels in the word
// analyzeWord('codeup')
// // { word: 'codeup', numberOfLetters: 6, numberOfVowels: 3 }

const analyzeWorld = (string) => {
    const output = {
        word: string,
        numberOfLetters: string.length,
        numberOfVowels: countVowels(string),
    }
    return output;
}


// 11. Write a function named capitalizeName that accepts a string that is a first and last name separated by a space, and returns a string that that has the first and last names capitalized.
//
//     For this problem, you may assume that the function will only ever be called with a string that has two words separated by a single space.
//
// capitalizeName('ron weasley') // "Ron Weasley"
// capitalizeName('Harry Potter') // "Harry Potter"
// capitalizeName('Nathan drake') // "Nathan Drake"

const capitalizeName = (string) => {
    const splitName = string.split(" ");
    const firstName = splitName[0];
    const lastName = splitName[1];


    const capitalizeFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);

    const capitalizeLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

    return capitalizeFirstName + " " + capitalizeLastName;
}





















