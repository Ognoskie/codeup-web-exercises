// iaANumber walkthrough

// Define a function named isANumber that takes in a value and returns true if the input is numeric, or false if the input is not numeric. Numeric strings should not be considered as numbers in this function, and should return false.
//
// isANumber(23)               // true
// isANumber("42")             // false
// isANumber(3.141)            // true
// isANumber("")               // false
// isANumber(true)             // false
// isANumber("Bob")            // false
// isANumber([1,2,3])          // false



function isANumber(input){
    if (typeof input === "boolean" || input === null) {
        return false
    }
    if (isNaN(input)){
        return false
    }else{
        return true
    }
}

// increment walkthrough

// Define a function named increment that takes in an input and adds 1 to it if the input is numeric. If the input is not numeric, then return false.
//
// increment(0)                // 1
// increment("10")             // 11
// increment(-5)               // -4
// increment("Bob")            // false
// increment([1, 2, 3])        // false
// increment(true)             // false
// increment(null)             // false


function increment(input) {
    if (isANumber(input)) {
        return parseInt(input) + 1;
    }else{
        return false
    }
}



// decrement walkthrough

// Define a function named decrement. If the provided input is numeric, the function should subtract 1 and return the result. If the input is not numeric, decrement should return false.
//
// decrement(19)               // 18
// decrement(0)                // -1
// decrement("4")              // 3
// decrement("Bob")            // false
// decrement([1, 2, 3])        // false
// decrement(false)            // false
// decrement(null)             // false


function decrement(input) {
    if (isANumber(input)) {
        return input - 1;
    }else {
        return false;
    }
}

// getHighestNumber

// Write a function named getHighestNumber that takes in 3 arguments. If all 3 inputs are numbers or numeric strings, then return the highest number. If any of the 3 inputs is missing or non-numeric, then return false.
//
// getHighestNumber(1, 3, 2)           // 3
// getHighestNumber(0, 1, "2")         // 2
// getHighestNumber(9, 3, -20)         // 9
// getHighestNumber(2, 2, 2)           // 2
// getHighestNumber(2, 5, 5)           // 5
// getHighestNumber(1, 2, 'x')         // false
// getHighestNumber("a", "b")          // false
// getHighestNumber()                  // false



// write out your problem to help you out
// Write a function named getHighestNumber
// takes in 3 arguments
// all 3 inputs are numbers or numeric strings
// return the highest number
function getHighestNumber(input1, input2, input3) {
    if (isANumber(input1) && isANumber(input2) && isANumber(input3)) {
        return Math.max(input1, input2, input3);
    } else {
        return false;
    }
}


// parseNumber walkthrough

// Define a function named parseNumber that parses (converts) a numeric String and returns its value as a number, the function should be able to decide if it should be parsing an Integer or a Float value.
//
// parseNumber("123")            // 123
// parseNumber(123)              // 123
// parseNumber("34.4")           // 34.4
// parseNumber(10.5)             // 10.5
// parseNumber("-2")             // -2
// parseNumber("-10.4")          // -10.4

function parseNumber(input){
    // return input * 1
    return parseFloat(input);
}


// add walkthrough

// Write a function named add that takes in two inputs. If both inputs provided are numeric, add will return the sum of both inputs. If one or both inputs is not numeric, add should return false.
//
// add(1, 2)                   // 3
// add(0, 0)                   // 0
// add(-5, 10)                 // 5
// add("2", 4)                 // 6
// add(5, true)                // false
// add(true, false)            // false
// add("Monday", "Tuesday")    // false
// add(null)                   // false

function add(){

}






// multiply walkthrough

// Write a function named multiply that takes in two inputs. If both inputs provided are numeric, multiply returns the product of the first input multiplied by the second. If either or both inputs are not numeric, multiply should return false.
//
// multiply(4, 2)              // 8
// multiply(0, 44)             // 0
// multiply(-5, 10)            // -50
// multiply(5, true)           // false
// multiply(true, false)       // false
// multiply("Monday")          // false

function multiply(){

}



// square walkthrough

// Define a function named square. If the provided input is numeric, square should return the number multiplied by itself. If the input is not numeric, square, should return false.
//
// square(2)                   // 4
// square(3)                   // 9
// square(-4)                  // 16
// square("5")                 // 25
// square(0.5)                 // .25
// square("Bob")               // false
// square(true)                // false
// square(false)               // false
// square(null)                // false
// square([1, 2, 3])           // false
// square()                    // false

function square(){

}


// sumOfSquares

// Write a function named sumOfSquares that takes in two inputs. If both inputs are numeric, sumOfSquares should square each input and return the sum of them added together. For example, if we pass a and b then we should square a and add it to the square of b. If either or both inputs are not numeric, sumOfSquares should return false.

// sumOfSquares(2, 3)          // 13
// sumOfSquares(1, 0)          // 1
// sumOfSquares("4", 5)        // 41
// sumOfSquares(2, false)      // false
// sumOfSquares(null)          // false
// sumOfSquares()              // false

function sumOfSquares(){

}

// Write a function named isPalindrome that takes in a single input. If the input is a numeric string, then return false. If the input is a string, then return true if the string is the same forwards as it is backwards. Return false if the string is different forwards from backwards. Ignore capitalization.
//
// isPalindrome("Bob")         // true
// isPalindrome("radar")       // true
// isPalindrome("ufotofu")     // true
// isPalindrome("Monday")      // false
// isPalindrome(232)           // false
// isPalindrome(null)          // false

function isPalindrome(){

}