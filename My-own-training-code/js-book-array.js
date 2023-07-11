// forEach() method for arrays page 176

let arr = ["grapefruit", 4, "hello", 5.6, true];

const printStuff = (element, index) => {
    console.log("Printing stuff: ", element, "on array position: ", index);
}
arr.forEach(printStuff);

// filter method for an array pg.177

let ar = ["squirrel", 5, "Tjed", new Date(), true];

const checkString = (element, index) => {
   return typeof element === "string"
}
let filterAr = ar.filter(checkString);
console.log(filterAr);

// map method for an array pg.179

let nums = [1, 2, 3, 4];
let mapped_arr = nums.map(x => x + 5);
console.log(mapped_arr)
































































































































