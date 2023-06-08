(function(){
    "use strict";

    let planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */



    console.log('Adding "The Sun" to the beginning of the planets array.');


    planets.unshift("The Sun");
    console.log(planets);




    console.log('Adding "Pluto" to the end of the planets array.');


    planets.push("Pluto");
    console.log(planets);




    console.log('Removing "The Sun" from the beginning of the planets array.');

    planets.shift();
    console.log(planets);




    console.log('Removing "Pluto" from the end of the planets array.');

    const removeElement = planets.pop();
    console.log(removeElement);



    console.log('Finding and logging the index of "Earth" in the planets array.');

    const elementIndex = planets.indexOf('Earth');
    console.log(elementIndex);
    console.log(planets[elementIndex]);



    console.log("Reversing the order of the planets array.");

    planets.reverse();
    console.log(planets);





    console.log("Sorting the planets array.");

   const sortShortToLong = array => {
       const sortedArray = [...array];
       return sortedArray.sort((a, b) => a.length - b.length);
   }

   console.log(sortShortToLong(planets));


})();