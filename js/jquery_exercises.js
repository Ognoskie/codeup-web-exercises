// window.onload = function () {
//     alert("The window has loaded");
// }



// jQuery(function () {
//     alert("The window has loaded");
// });

// jQuery === $


 // $(function () {
 //    alert("The window has loaded");
 // });

// jquery selectors notes
$(() => {
// // calling element by id
//     $('#id-container').css('background-color', 'red')
//
// // calling element by name
//     $('.title').css('color', 'purple');
//
//
//     // same with js
//     let titleElements = document.querySelectorAll('.title');
//     titleElements.forEach(titleElements => {
//         titleElements.style.color = 'blue'
//     });
//
//
// //use jquery to select all 'li' elements
//     $('li').css('color', 'pink');
//
//     // multiple selector in $
//     $('h1, p, .highlight').css('font-weight', 'bold')
//
//     // using jquery to check for a value
//     console.log($('[data-id="5"]').html());
//
//
// //select everything
//     $('*').css('outline', '1px solid lightblue').css('font-weight', 'bold');

// $('.codeup').css('border', '1px solid red');
//
// $('li').css('font-size', '20px')
//
//     $('h1, p, li').css('background-color', '#FFFF00');
//
//
// // alerts elements on page
// alert($('#link-list').html());

//
// $('h2').on('click', function () {
//     // changes all h2
//
//     // changes only the specific h2
//     $(this).css('text-decoration', 'underline');
// })
//     .on('dblclick', function () {
//         $(this).css('text-decoration', 'none');
//     })
//
//
// // or
//
//     function underlineThis() {
//         $(this).css('text-decoration', 'underline');
//     }
//
//
//     function noUnderlineThis() {
//         $(this).css('text-decoration', 'none');
//     }
//
//     $('h2')
//         .on('click', underlineThis)
//         .on('dblclick', noUnderlineThis);
//
//
// function hideUnorderedList() {
//     $('ul').css('display', 'none');
// }
// $('h1')
//     .on('click', hideUnorderedList);


    // exercise 2
function backgroundColor() {
    $(this).css('background-color', 'blue')
}
$('h1')
    .on('click', backgroundColor);

// exercise 3

    function pChangeFont() {
        $(this).css('font-size', '18px')
    }
    $('p')
        .on('dblclick', pChangeFont);

    // exercise 3

    function liRedHover() {
        $(this).css('color', 'red')
    }
    $('li')
        .on('mouseover', liRedHover)




    function liBlackHover() {
        $(this).css('color', 'black')
    }
    $('li')
        .on('mouseleave', liBlackHover)



















})