"use strict"

// // function sayHello(){
// //     console.log("Hello there")
// // }
// // sayHello();
// // function sayGoodbye(){
// //     console.log("General Kenobi")
// // }
// // sayGoodbye();
//
// function sayBye(username){
//     console.log("You will always see me");
//     return("Peace out" + username);
//     console.log("You will never see me!!!")
// }
//
// const functionResp = sayBye("paul wall");
// console.log(functionResp);

// Global Scope Example
// const username = "bobby";
// function sayBye(){
//     console.log("You will always see me " + username);
// };
//
// sayBye();
//
// console.log(username)

// Local Scope
function sayBye(){
    const username = "bobby"
    console.log("You will always see me " + username);
 }

 function sayHi() {
    const username = "say hi bobby";
     console.log("You will always see me " + username);

 }

 sayBye();
sayHi();


function addFourDivideByTwo(num){
    const sum = num + 4;
    const dividedByTwo = divideByTwo(sum);
    return dividedByTwo;
}
function divideByTwo(num){
    return num / 2;
}

console.log(addFourDivideByTwo(5));