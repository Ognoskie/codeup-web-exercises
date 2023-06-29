// Loops

// write a loop that loops through 50 times

for(let i = 0; i < 50; i++) {

}



let names = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Emma",
    "Frank",
    "Grace",
    "Henry",
    "Isabella",
    "Jack",
    "Kate",
    "Liam",
    "Mia",
    "Noah",
    "Olivia",
    "Patrick",
    "Quinn",
    "Ryan",
    "Sophia",
    "Thomas",
    "Uma",
    "Victor",
    "Wendy",
    "Xavier",
    "Yara",
    "Zultan"
];


// loop through every name in names
// console log every name

// // old way; still works
// for(let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }
//
// // new ways
// names.forEach(name => {
//     console.log(name);
// });
//
// for(let name of names) {
//     console.log(name);
// }







// make a function that loops through an array that is passed in
// return the name that matches the name passed in
// this function will have 2 parameters: array and name



// function
function returnItem(array, userItem) {

    // loop through every item
    for(let item of array) {

        // check to see of the item and the userItem (inputted item) are the same
        if(item === userItem) {

            // if they are the same, we return the item
            // this kicks us out of the function
            return item;
        }
    }

    // if we complete the entire loop, it means that the item isn't in there
    // that's why we return "item not found"
    return "Item is not found";
}


console.log(returnItem(names, "Zultan"));






















// Object example with properties and values
const someObject = {
    name: "Steve",
    age: 35
}