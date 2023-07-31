

const prefersSunMode = true;
const prefersDarkMode = false;
const whichMode = () => {
    if ("") {
        console.log('dark mode set');
        document.body.style.background = 'black';
    } else if (prefersSunMode) {
        console.log('sun mode engaged')
        document.body.style.background = 'orange';
    }else {
        console.log("its white")
        document.body.style.background = 'white';
    }
}
whichMode();



//DOM assessment retry


///////////////// retry //////////////

// global
const problemOne = document.getElementById('problem-1-p');
const problemTwoBtn = document.getElementById('problem-2-btn');
const bodyColor = document.querySelector('body');
const problemTwoInput = document.getElementById('problem-2-input');
const h4List = document.querySelectorAll('h4');
const problemThreeBtn = document.getElementById('problem-3-btn');
const problemFourBtn = document.getElementById('problem-4-btn');
const problemFive = document.getElementById('problem-5-p');
const problemSixInput = document.getElementById('problem-6-input');










// function
const problemOneDone = () => {
    problemOne.innerHTML = "Problem one conquered"
};
const problemTwoDone = () => {
    let input = problemTwoInput;
    bodyColor.style.backgroundColor = input.value

};
const problemThreeDone = () => {
location.reload(true);
};
const problemFourDone = () => {
    window.location.href = "https://java.codeup.com/javascript-i/bom-and-dom/bom/"
};
const problemFiveDone = () => {
    problemFive.classList.toggle('problem-5-color')
};

const problemEight = () => {
    for (const h4 of h4List) {
        h4.classList.toggle('problem-8-color')
    }
};








// event listeners
problemOne.addEventListener("click", problemOneDone)
problemTwoBtn.addEventListener("click", problemTwoDone)
problemThreeBtn.addEventListener('click', problemThreeDone)
problemFourBtn.addEventListener('click', problemFourDone)
problemFive.addEventListener('dblclick', problemFiveDone)
problemSixInput.addEventListener('keypress', problemSixDone)
for (const h4 of h4List) {
    h4.addEventListener('click', problemEight);
}

