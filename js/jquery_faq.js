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




// const ddElements = document.querySelectorAll('dd');
// toggleButton.addEventListener('click', () => {
//     ddElements.forEach((ddElements) => {
//         ddElements.classList.toggle('invisible')
//     })
// });


    // Create a button that, when clicked, makes the last li in each ul have a yellow background.
    //
    //     When any h3 is clicked, the lis underneath it should be bolded. Use font-weight: bold to achieve this.
    //
    //     When any list item is clicked, first li of the parent ul should have a font color of blue.







    // $('li').on('click', (e) => {
    //     $(e.target).last().css('background-color', 'yellow')
    // });


    $(".yellow-button").click(function() {
        $("ul").each(function() {
            $(this).find("li:last").css("background-color", "yellow");
        });
    });

    $('h3').on('click', (e) => {
        $(e.target).next().css('font-weight', 'bold')
    })

    $('ul').children().on('click', (e) => {
        $(e.target).parent().children().first().css('color', 'blue')
    })






































})