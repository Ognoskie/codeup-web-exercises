// USING THE ASYNC/AWAIT SYNTAX TO RESOLVE PROMISES
// Remember, it's just syntactic sugar!
// In the end, it's doing the same thing as the .then() method
// WRITE CODE THAT WORKS!!!



// traditional function
// async function () {
//
// }



// "https://swapi.dev/api/films/1/";


const getPerson = async (id = 1) => {
    try {
        const url = `https://swapi.dev/api/people/${id}/`;
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    }catch (error){
        console.log(error);
    }

}




// arrow declaration
const getFilm = async (url) => {
    const filmUrl = url;
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    }
    const response = await fetch (url, options);
    const data = response.json();
    return data;
}





// example for movies project


const getPeople = async () => {
    const url = 'https://swapi.dev/api/people/';
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }
}








( async ()=>{
    // const luke = await getPerson(1);
    // console.log(luke)
    // const firstFilm = await getFilm(luke.films[0]);
    // console.log(firstFilm);







})();


















