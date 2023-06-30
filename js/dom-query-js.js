(function() {
    "use strict";
    // TODO: Uncomment next line and get the main header element by id
    const mainHeader = document.getElementById('main-header');
    console.log(mainHeader);

    // TODO: Set inner html of mainHeader to "JavaScript is Cool"
    mainHeader.innerHTML = "JavaScript is cool";

    // TODO: Uncomment the next line and get the sub header element by id
    const subHeader = document.getElementById('sub-header');
    console.log(subHeader);

    // TODO: Set the text color of subHeader to blue
    subHeader.style.color = "blue";

    // TODO: Uncomment the next line and get all list items
    const listItems = document.querySelectorAll("li");
    console.log(listItems);

    // TODO: Set text color on every other list item to grey
    for (let i = 0; i < listItems.length; i += 2) {
            listItems[i].style.color = "grey";
        }

    // TODO: Set text color of li with dbid = 1 to blue

    // TODO: Uncomment the next line and get all elements with class name sub-paragraph
    // var subParagraphs = ;

    // TODO: Change the text in the first sub paragraph to "Mission Accomplished!"
})();