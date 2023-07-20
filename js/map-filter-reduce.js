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





        });





})();