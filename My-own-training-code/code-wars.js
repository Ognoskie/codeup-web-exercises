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


function createArray(number){
    let newArray = [];

    for(let counter = 1; counter <= number;){
        newArray.push(counter);
    }

    return newArray;
}

console.log(createArray())