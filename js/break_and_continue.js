// let userInput;
//
// while (true) {
//     userInput = prompt("Please enter an odd number between 1 and 50:");
//
//     if (userInput >= 1 && userInput <= 50 && userInput % 2 !== 0) {
//         break;
//     } else {
//         alert("Invalid input! Please try again.");
//     }
// }
//
// console.log("Yikes skipping that number:", userInput);
//
// for (let i = 1; i <= 50; ++i) {
//     if (i === parseInt(userInput)) {
//         continue;
//     }
//
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }




// function numberOneThroughFifty() {
//     return prompt("Enter an odd number from 1 to 50!")
// }
//
// function promptUntilOdd() {
//     do{
//         const userNumber = numberOneThroughFifty();
//         if (userNumber >=1 && userNumber <= 50 && userNumber % 2 !== 0) {
//             console.log(`Number to skip is: ${userNumber}`);
//             for (let i = 1; i <= 50; i++) {
//               if (i === userNumber) {
//                   console.log(`Yikes! Skipping ${userNumber}`);
//                   continue;
//               }
//               if (i % 2) {
//                   console.log(`Here's a odd number: ${i}`);
//               }
//             }
//             break;
//            }
//         console.log("Invalid input");
//     } while(true)
// }
// promptUntilOdd();