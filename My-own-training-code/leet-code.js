// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
//
//
//
//     Example 1:
//
// Input:
//     n = 10
//         ["call","call","call"]
// Output: [10,11,12]
// Explanation:
//     counter() = 10 // The first time counter() is called, it returns n.
// counter() = 11 // Returns 1 more than the previous time.
// counter() = 12 // Returns 1 more than the previous time.
// Example 2:
//
// Input:
//     n = -2
//         ["call","call","call","call","call"]
// Output: [-2,-1,0,1,2]
// Explanation: counter() initially returns -2. Then increases after each sebsequent call.
//
//
//     Constraints:
//
// -1000 <= n <= 1000
// At most 1000 calls to counter() will be made


// let counter = 0
// let createCounter = function(n) {
//     counter++
//     console.log(counter)
// }









// problem 200 number of islands


// Given an m x n 2D binary grid which represents a map of '1's (land) and '0's (water), return the number of islands.
//
//     An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
//
//
//
//     Example 1:
//
// Input: grid = [
//     ["1","1","1","1","0"],
//     ["1","1","0","1","0"],
//     ["1","1","0","0","0"],
//     ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:
//
// Input: grid = [
//     ["1","1","0","0","0"],
//     ["1","1","0","0","0"],
//     ["0","0","1","0","0"],
//     ["0","0","0","1","1"]
// ]
// Output: 3

//
// /**
//  * @param {character[][]} grid
//  * @return {number}
//  */

//
// const getAdjNeighbors = (i, j, grid, visited) => {
//     const adjNeighbors = [];
//
//     if (i > 0 && !visited[i - 1][j]) adjNeighbors.push([i - 1, j]);
//     if (i < grid.length - 1 && !visited[i + 1][j])adjNeighbors.push([i + 1, j]);
//
//     if (j > 0 && !visited[i][j - 1]) adjNeighbors.push([i,j -1]);
//     if (j < grid.length - 1 && !visited[i][j + 1])adjNeighbors.push([i, j + 1]);
//
//     return adjNeighbors;
// }
//
// const dFS = (i, j, grid, visited) => {
//     const stack = [[i, j]];
//     let islandSize = 0;
//
//     while(stack.length) {
//         let curNode = stack.pop();
//
//         let [i, j] = curNode;
//         //check if visited at i and j;
//         if (visited[i][j]) continue;
//         visited[i][j] = true;
//
//         // check if cell is part of an island
//         if (grid[i][j] === "0") continue;
//         islandSize++;
//
//         let adjNeighbors = getAdjNeighbors(i, j, grid, visited);
//
//         stack.push(...adjNeighbors);
//     }
//     // this means "if islandSize is greater than 0 then return true (then return true = ?) else (else = :) return false"
//     return islandSize > 0 ? true : false;
// };
//
// const numIslands = function(grid) {
//     const visited = grid.map(row => row.map(cell => false));
//     let islandCount = 0;
//
//
//     for(let i = 0; i < grid.length; i++) {
//         for(let j = 0; j < grid[i].length; j++) {
//             if (dFS(i, j, grid, visited)) islandCount++;
//         }
//     }
//
//
//     return islandCount;
//
// };









// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//
//     You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
//     You can return the answer in any order.
//
//
//
//     Example 1:
//
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
//     Example 2:
//
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:
//
// Input: nums = [3,3], target = 6
// Output: [0,1]
//
//
// Constraints:
//
//     2 <= nums.length <= 104
//     -109 <= nums[i] <= 109
//     -109 <= target <= 109
// Only one valid answer exists.
//
//
//     Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?


const twoSum = (nums, target) => {
    if (nums === target) {
        for (let i = 0; i < nums.length; i++) {
            nums === target;
        }
    }
};


/////////////////////////// 30 days of js///////////////////////////////

// helloWorld function


// Q.1

// Write a function createHelloWorld. It should return a new function that always returns "Hello World".
//
//
// Example 1:
//
// Input: args = []
// Output: "Hello World"
// Explanation:
// const f = createHelloWorld();
// f(); // "Hello World"
//
// The function returned by createHelloWorld should always return "Hello World".
// Example 2:
//
// Input: args = [{},null,42]
// Output: "Hello World"
// Explanation:
// const f = createHelloWorld();
// f({}, null, 42); // "Hello World"
//
// Any arguments could be passed to the function but it should still always return "Hello World".

const createHelloWorld = function() {
    return () => "Hello World";
};


////////////////////////////////////////////////

// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
//
//
//
//     Example 1:
//
// Input:
//     n = 10
//         ["call","call","call"]
// Output: [10,11,12]
// Explanation:
//     counter() = 10 // The first time counter() is called, it returns n.
// counter() = 11 // Returns 1 more than the previous time.
// counter() = 12 // Returns 1 more than the previous time.
// Example 2:
//
// Input:
//     n = -2
//         ["call","call","call","call","call"]
// Output: [-2,-1,0,1,2]
// Explanation: counter() initially returns -2. Then increases after each sebsequent call.



/**
 * @param {number} n
 * @return {Function} counter
 */
let createCounter = function(n) {
    return ()=> n++
};

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */


// Explanation


// When, Where, What, and How to use closure!!!
//     First of all closure is not something you create it's something that the language has created for itself for appropriate development and we need to crack this code that how the language uses it.
//
// "To be honest, a good developer's greatest fear is discovering that something working but not knowing how it works."
//
// What is Closure ?
//
//     - A closure is created when a function is defined inside another function, and the inner function references variables in the outer function's scope. When the inner function is returned from the outer function, it retains a reference to the outer function's scope, and can continue to access those variables even after the outer function has finished executing. Vice-Versa is not true!!
//
//     - In simple terms a closure can "remember" values from its outer function's scope and use them later, even if the outer function has returned and those values would normally be out of scope.
//
// When to use closure concept ?
//
//     FIrst let's summarize the definition as usually the definition gives the answer for when to use..
//
//  -From definition you can see that it's used for retrival of values from outer parent function so we can understand that closure can be used for retrival of dead values which have become out of scope. also we can comprehend that it can used for privating some varibles or function.
//  -Thus closures are useful for creating private variables and functions, implementing partial function application, and preserving state in asynchronous code.
//  -While writing the code whenever there is a need for these types of thing try to incorporate this closure concept i.e. In a programmer languge it's called lexical environment
//
// Where and How to use closure concept ?
//     Private variables and functions:
//     const makeCounter = () => {
//         let count = 0;
//
//         return () => {
//             count++;
//             console.log(count);
//         }
//     }
//
// let counter = makeCounter();
// counter(); // logs 1
// counter(); // logs 2
// counter(); // logs 3
// -In this example, makeCounter is an arrow function that returns another arrow function. The returned function increments a count variable each time it is called, and logs the new value of count to the console.
//     -When makeCounter is called, it creates a new scope with a count variable initialized to 0. It then returns a new arrow function that "closes over" this scope and increments the count variable each time it is called.
//     -When we assign the returned arrow function to the counter variable, we create a closure that retains a reference to the count variable.
//     -Each time we call counter(), it increments the count variable and logs the new value to the console, because it is still "closing over" the original count variable in the outer function's scope.
// -Thus because the count variable is not exposed outside of the returned object, it is effectively a private variable that can only be accessed or modified through the makeCounter() methods.
//
//     2. Partial function:
//     I was introduced to this concept name during development phase but was shocked that unknowingly I have used it many times. I'm sure that you all also must have use this:
// function add(x) {
//     return function(y) {
//         return x + y;
//     }
// }
//
// let add5 = add(5);
// console.log(add5(3)); // 8
// -In this example, the add() function returns another function that takes a single argument and returns the sum of that argument and the x value from the outer function's scope.
// -This allows us to "partially apply" the add() function by passing in an x value and getting back a new function that always adds that value to its argument.
//     -Thuse we can then use the new function like any other function, passing in different y values as needed.
//
//     3.For preserving states in asynchronous code:
//     The below snippet is from my personal project:)
// const animate = (element, from, to, duration) => {
//     let start = performance.now();
//
//     const update = () => {
//         let time = performance.now() - start;
//         let progress = time / duration;
//         let value = from + (to - from) * progress;
//
//         element.style.left = value + 'px';
//
//         if (progress < 1) {
//             requestAnimationFrame(update);
//         }
//     }
//
//     requestAnimationFrame(update);
// }
//
// let element = document.getElementById('my-element');
// animate(element, 0, 100, 1000);
// -In this example, the animate() function creates a closure over the start variable, which is used to calculate the elapsed time since the animation started.
//     -The update() function also "closes over" the element, from, to, and duration arguments, so that it can use them to update the element's position over time.
// -Thus by creating a closure over these values, we can preserve their state between animation frames, even though the update() function is called asynchronously by requestAnimationFrame().
//
//     Answer to todays(#2) JS challenge:
//
//    let createCounter = function(n) {
//         return ()=> n++
//     };