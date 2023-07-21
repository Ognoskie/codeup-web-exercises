// const getPerson = (id = 1) => {
//     const url = `https://swapi.dev/api/people/${id}/`;
//     const options = {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json"
//         }
//     }
//    return fetch(url, options)
//         .then((response) => {
//             return response.json();
//         })
//        .catch(error => {
//            alert(error.message);
//        })
//
// }
//
//
// const getFilm = (url) => {
//         const filmUrl = url;
//         const options = {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application-json",
//             }
//         }
//        return fetch(url, options)
//             .then((response) => {
//                 return response.json();
//             })
//            .catch(error => {
//                alert(error.message);
//            })
// }
//
// (()=>{ // IIFE (Immediately Invoked Function Expression)
//    getPerson(1).then((person) => {
//         console.log(person);
//        getFilm(person.films[0]).then(film => {
//            console.log(film);
//        })
//
//     });
// // not accessible here
// })();


const getUserName = (login = 1) => {
    const url = `https://api.github.com/users/${login}/events`;
    const options  = {
        method: "GET",
        headers: {
            "Authorization": `token ${PROMISE_GITHUB_TOKEN}` ,
        }
    }
return fetch(url, options)
    .then((response) => {
        return response.json();
    })
    .catch(error => {
        console.log(error.message)
    })
}




(() => { //IIFE (Immediately Invoked Function Expression)

    const url= "https://api.github.com/users/ognoskie/events"
    const options  = {
        method: "GET",
        headers: {
            "Authorization": `token ${PROMISE_GITHUB_TOKEN}` ,
        }
    }

    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })



})();







































































































