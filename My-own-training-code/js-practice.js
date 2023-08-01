//
//
// const prefersSunMode = true;
// const prefersDarkMode = false;
// const whichMode = () => {
//     if ("") {
//         console.log('dark mode set');
//         document.body.style.background = 'black';
//     } else if (prefersSunMode) {
//         console.log('sun mode engaged')
//         document.body.style.background = 'orange';
//     }else {
//         console.log("its white")
//         document.body.style.background = 'white';
//     }
// }
// whichMode();
//
//
//
// //DOM assessment retry
//
//
// ///////////////// retry //////////////
//
// // global
// const problemOne = document.getElementById('problem-1-p');
// const problemTwoBtn = document.getElementById('problem-2-btn');
// const bodyColor = document.querySelector('body');
// const problemTwoInput = document.getElementById('problem-2-input');
// const h4List = document.querySelectorAll('h4');
// const problemThreeBtn = document.getElementById('problem-3-btn');
// const problemFourBtn = document.getElementById('problem-4-btn');
// const problemFive = document.getElementById('problem-5-p');
// const problemSixInput = document.getElementById('problem-6-input');
// const spanSixElement = document.getElementById('problem-6-span');
// const problemSevenElement = document.getElementsByClassName('problem-7-li');
//
//
//
//
//
//
//
//
//
//
// // function
// const problemOneDone = () => {
//     problemOne.innerHTML = "Problem one conquered"
// };
// const problemTwoDone = () => {
//     let input = problemTwoInput;
//     bodyColor.style.backgroundColor = input.value
//
// };
// const problemThreeDone = () => {
// location.reload(true);
// };
// const problemFourDone = () => {
//     window.location.href = "https://java.codeup.com/javascript-i/bom-and-dom/bom/"
// };
// const problemFiveDone = () => {
//     problemFive.classList.toggle('problem-5-color')
// };
// const problemSixDone = () => {
//     spanSixElement.textContent = problemSixInput.value
// };
// const problemSevenDone = (e) => {
//     e.target.style.backgroundColor = 'orange'
// };
// const problemEightDone = () => {
//     for (const h4 of h4List) {
//         h4.classList.toggle('problem-8-color')
//     }
// };
//
//
//
//
//
//
//
//
// // event listeners
// problemOne.addEventListener("click", problemOneDone)
// problemTwoBtn.addEventListener("click", problemTwoDone)
// problemThreeBtn.addEventListener('click', problemThreeDone)
// problemFourBtn.addEventListener('click', problemFourDone)
// problemFive.addEventListener('dblclick', problemFiveDone)
// problemSixInput.addEventListener('keypress', problemSixDone)
// problemSevenElement.addEventListener('click', problemSevenDone);
// for (li of problemSevenElement) {
//     li.addEventListener('click', problemSevenDone)
// }
// for (const h4 of h4List) {
//     h4.addEventListener('click', problemEightDone);
// }
//


const fizzBuzz = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz")
        } else if (i % 5 === 0) {
            console.log("buzz")
        } else if (i % 3 === 0) {
            console.log("fizz")
        } else {
            console.log(i)
        }
    }
}
fizzBuzz();






































