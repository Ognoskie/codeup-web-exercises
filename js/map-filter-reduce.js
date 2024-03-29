(() => {
//     const url = './data/houses.json';
//     const options = {
//         // the properties are case sensitive
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }
//     // old way
//     // fetch(url, options)
//     //     .then(response => {
//     //         return response.json();
//     //     })
//     //     .then(houses => {
//     //         console.log(houses);
//     //         //work with the house array
//     //         const houseTwoBedsPlus = [];
//     //         for (let house of houses) {
//     //             const nmrOfBeds = parseFloat(house.beds);
//     //             if (nmrOfBeds >= 2) {
//     //                 houseTwoBedsPlus.push(house);
//     //             }
//     //         }
//     //         console.log(houseTwoBedsPlus);
//     //     });
//
//
//
//     // new way
//
//     fetch(url, options)
//         .then(response => {
//             return response.json();
//         })
//         .then(houses => {
//             console.log(houses);
//             //work with the house array
//             let houseTwoBedsPlus = houses.filter(house => {
//                 const nmrOfBaths = parseFloat(house.baths)
//                 const nmrOfBeds = parseFloat(house.beds)
//                 return nmrOfBeds >= 5 && nmrOfBaths >= 2;
//             });
//
//             console.log(houseTwoBedsPlus);
//
//
//         //     map Method
//
//             // when do you want to use a map method
//             // when you want to transform each element in an array
//             // and return a new array with the transformed elements
//             let housesPriceRange = houses.map(house => {
//                 const priceRange = 200_000;
//                 const canBuy = parseFloat(house.price) > priceRange ? 'Nope' : 'Yes!';
//                 const newValue = `
// Address: ${house.address}
// Can I afford it: ${canBuy}
//                 `
//                 return newValue;
//             });
//             for (let house of housesPriceRange) {
//                 console.log(house);
//             }
//
//             // reduce method
//             // find most expensive house
//            const largestPrice = houses.reduce(/* function parameters*/(accumulator, house, index) => {
//                 let price = parseFloat(house.price);
//                 if (price > accumulator) {
//                     accumulator = price
//                 }
//                     return accumulator;
//             } ,
//                 /* initial value for accumulator*/ 0);
//             console.log(largestPrice.toLocaleString('en-US', {style: 'currency', currency: 'USD'}));
//
//
//
//             // how to find the cheapest house
//
//             const cheapestPrice = houses.reduce(/* function parameters*/(accumulator, house, index) => {
//                     let price = parseFloat(house.price);
//                     if (price < accumulator) {
//                         accumulator = price
//                     }
//                     return accumulator;
//                 } ,
//                 /* initial value for accumulator*/ parseFloat(houses[0].price));
//             console.log("least expensive => ", cheapestPrice.toLocaleString('en-US', {style: 'currency', currency: 'USD'}));
//
//             const allPrices = houses.reduce(/* function parameters*/(accumulator, house, index) => {
//                     let price = parseFloat(house.price);
//                     accumulator += price;
//                     return accumulator;
//                 } ,
//                 /* initial value for accumulator*/ parseFloat(houses[0].price));
//             console.log("total market price => ", allPrices.toLocaleString('en-US', {style: 'currency', currency: 'USD'}));
//
//
//             // how many houses were for sale in 2022
//             // what was the most expensive
//             // what was the cheapest
//             // what was the total of the market value
//
//             const dashboardObject = houses.reduce((accumulator, house, index) => {
//                 accumulator.totalHouses++;
//                 let price = parseFloat(house.price);
//                 if (price > accumulator.mostExpensive) {
//                     accumulator.mostExpensive = price;
//                 }
//                 if (price < accumulator.cheapestHouse) {
//                     accumulator.cheapestHouse = price;
//                 }
//                 accumulator.totalMarketValue += price;
//                 return accumulator;
//             }, {
//                 totalHouses: 0,
//                 mostExpensive: 0,
//                 cheapestHouse: parseFloat(houses[0].price),
//                 totalMarketValue: 0
//             });
//             console.log(dashboardObject);
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
//
//
//         });


// Exercises

    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];


    //
    // Exercises

    //     Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

    //     Use .map to create an array of strings where each element is a user's email address

    // Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

    //     Use .reduce to get the longest email from the list of users.

    //     Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.



const userLang = users.filter(data => {
    const numOfLang = data.languages.length;
    return numOfLang >= 3;
})

    console.log(userLang)



const userEmail = users.map(data => {
    return data.email
});
    console.log(userEmail);


    const totalExperience = users.reduce((accumulator, data, index) => {
        let total = data.yearsOfExperience;
        accumulator += total;
        return accumulator
    },
        0);
    console.log(totalExperience);

    console.log(totalExperience / users.length);

    const longestEmail = users.reduce((accumulator, data, index) => {
        let emailLength = parseFloat(data.email.length);
        if (emailLength > accumulator.length) {
         accumulator = data.email;
        }
        return accumulator

    },
        "")
    console.log(longestEmail)

    //     Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

    const instructorsNames = users.reduce((accumulator, data, index,) => {
       if (index === 0) {
           return `your instructors are: ${data.name}`
       } else {
           return `${accumulator}, ${data.name}`
       }
    },
       "" )
    console.log(instructorsNames)

    const userString = users.reduce((accumulator, data, index) => {
        if (index === (data.length - 2)) {
            accumulator += `${data.name} `
        } else if (index === (data.length - 1)) {
            accumulator += `and ${data.name}.`
        } else {
            accumulator += `${data.name}, `
        }
        return accumulator
    },'Your instructors are: ')
    console.log(userString)

})();


// Approach:
// To achieve the desired output, we can use the .reduce() method on the users array. The .reduce() method takes a callback function that will be applied to each element in the array to accumulate a final result.
//
// The callback function of .reduce() takes four parameters:
//
// accumulator: The initial value or the value returned from the previous iteration (starts with an empty string "" in our case).
// currentValue: The current element being processed in the array (a user object in our case).
// currentIndex: The index of the current element being processed in the array.
// array: The array that the .reduce() method is being called on (the users array in our case).




// Solution:
//
// We start with an initial value for the accumulator, which is an empty string: "".
// For the first user in the users array (when the currentIndex is 0), we add the "Your instructors are: " string as a prefix to the name of the first user. This forms the initial value of the accumulator.
// For subsequent users (when the currentIndex is greater than 0), we add a comma and a space ", " followed by the name of the current user to the accumulator.
// The .reduce() method keeps iterating through all the user objects, and at each step, it accumulates the names of the users in the desired format.
// Finally, the .reduce() method returns the final concatenated string, which contains all the user names in the specified format.
// In the provided JavaScript code example, we implement the above solution using the .reduce() method to get the desired output:










// // reduce method
// // find most expensive house
// houses.reduce(/* function parameters*/(accumulator, currentValue, index) => {
//         return accumulator;
//     } ,
//     /* initial value for accumulator*/ 0);