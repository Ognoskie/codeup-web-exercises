"use strict";

// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
//     If it is a square, return its area. If it is a rectangle, return its perimeter.
//
// Example(Input1, Input2 --> Output):
//
// 6, 10 --> 32
// 3, 3 --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

// const areaOrPerimeter = (length, width) => {
//     if (length === width){
//         return length * length
//     } else {
//         return 2 * (length + width)
//     }
// }



// You are an aerial firefighter (someone who drops water on fires from above in order to extinguish them) and your goal is to work out the minimum amount of bombs you need to drop in order to fully extinguish the fire (the fire department has budgeting concerns and you can't just be dropping tons of bombs, they need that money for the annual christmas party).
//
// The given string is a 2D plane of random length consisting of two characters:
//
//     x representing fire
// Y representing buildings.
//     Water that you drop cannot go through buildings and therefore individual sections of fire must be addressed separately.
//
//     Your water bombs can only extinguish contiguous sections of fire up to a width (parameter w).
//
// You must return the minimum number of waterbombs it would take to extinguish the fire in the string.
//
//     Note: all inputs will be valid.
//
//     Examples
// "xxYxx" and w = 3      -->  2 waterbombs needed
// "xxYxx" and w = 1      -->  4
// "xxxxYxYx" and w = 5   -->  3
// "xxxxxYxYx" and w = 2  -->  5

const waterBombNeeded = (str, w) => {
    let sections = str.split("Y");
    let count = 0;
    for (let i = 0; i < sections.length; i++) {

    }
}