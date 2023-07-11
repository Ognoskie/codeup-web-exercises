$(() => {

let setInvisible = document.getElementsByClassName('invisible');
for (let i = 0; i < setInvisible.length; i++) {
setInvisible[i].style.visibility = "hidden"
}

let myDiv = document.getElementById('DB');
let button = document.createElement('button');
let displayButtonText = document.createTextNode('Click me to see the facts');
button.appendChild(displayButtonText);
myDiv.appendChild(button);

// const toggleButton = document.getElementsByClassName('invisible');

    // const classBox = document.querySelector('div.class > button');
    // const toggleClassButton = document.querySelector('#js-toggle-class-button');

// toggleClassButton.addEventListener('click', () => {
//     classBox.classList.toggle('invisible')
// })


function toggle() {
const toggleButton = document.querySelectorAll('dd')
    for (let i = 0; i < toggleButton.length; i++) {

    }

}


document.querySelector('button').addEventListener('click', toggle);




























































})