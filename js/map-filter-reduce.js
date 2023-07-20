(() => {
    const url = './data/houses.json';
    const options = {
        // the properties are case sensitive
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    // old way
    // fetch(url, options)
    //     .then(response => {
    //         return response.json();
    //     })
    //     .then(houses => {
    //         console.log(houses);
    //         //work with the house array
    //         const houseTwoBedsPlus = [];
    //         for (let house of houses) {
    //             const nmrOfBeds = parseFloat(house.beds);
    //             if (nmrOfBeds >= 2) {
    //                 houseTwoBedsPlus.push(house);
    //             }
    //         }
    //         console.log(houseTwoBedsPlus);
    //     });



    // new way

    fetch(url, options)
        .then(response => {
            return response.json();
        })
        .then(houses => {
            console.log(houses);
            //work with the house array
            let houseTwoBedsPlus = houses.filter(house => {
                const nmrOfBaths = parseFloat(house.baths)
                const nmrOfBeds = parseFloat(house.beds)
                return nmrOfBeds >= 5 && nmrOfBaths >= 2;
            });

            console.log(houseTwoBedsPlus);


        //     map Method

            // when do you want to use a map method
            // when you want to transform each element in an array
            // and return a new array with the transformed elements
            let housesPriceRange = houses.map(house => {
                const priceRange = 200_000;
                const canBuy = parseFloat(house.price) > priceRange ? 'Nope' : 'Yes!';
                const newValue = `
Address: ${house.address}
Can I afford it: ${canBuy}                
                `
                return newValue;
            });
            for (let house of housesPriceRange) {
                console.log(house);
            }

            // reduce method
            // find most expensive house
           const largestPrice = houses.reduce(/* function parameters*/(accumulator, house, index) => {
                let price = parseFloat(house.price);
                if (price > accumulator) {
                    accumulator = price
                }
                    return accumulator;
            } ,
                /* initial value for accumulator*/ 0);
            console.log(largestPrice.toLocaleString('en-US', {style: 'currency', currency: 'USD'}));



            // how to find the cheapest house

            const cheapestPrice = houses.reduce(/* function parameters*/(accumulator, house, index) => {
                    let price = parseFloat(house.price);
                    if (price < accumulator) {
                        accumulator = price
                    }
                    return accumulator;
                } ,
                /* initial value for accumulator*/ parseFloat(houses[0].price));
            console.log("least expensive => ", cheapestPrice.toLocaleString('en-US', {style: 'currency', currency: 'USD'}));

            const allPrices = houses.reduce(/* function parameters*/(accumulator, house, index) => {
                    let price = parseFloat(house.price);
                    accumulator += price;
                    return accumulator;
                } ,
                /* initial value for accumulator*/ parseFloat(houses[0].price));
            console.log("total market price => ", allPrices.toLocaleString('en-US', {style: 'currency', currency: 'USD'}));


            // how many houses were for sale in 2022
            // what was the most expensive
            // what was the cheapest
            // what was the total of the market value

            const dashboardObject = houses.reduce((accumulator, house, index) => {
                accumulator.totalHouses++;
                let price = parseFloat(house.price);
                if (price > accumulator.mostExpensive) {
                    accumulator.mostExpensive = price;
                }
                if (price < accumulator.cheapestHouse) {
                    accumulator.cheapestHouse = price;
                }
                accumulator.totalMarketValue += price;
                return accumulator;
            }, {
                totalHouses: 0,
                mostExpensive: 0,
                cheapestHouse: parseFloat(houses[0].price),
                totalMarketValue: 0
            });
            console.log(dashboardObject);


        });







})();


// // reduce method
// // find most expensive house
// houses.reduce(/* function parameters*/(accumulator, currentValue, index) => {
//         return accumulator;
//     } ,
//     /* initial value for accumulator*/ 0);