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














// Exercise .then


// const getEvents = (userName = "ognoskie") => {
//     const url = `https://api.github.com/users/${userName}/events`;
//     const options  = {
//         method: "GET",
//         headers: {
//             "Authorization": `token ${PROMISE_GITHUB_TOKEN}` ,
//         }
//     }
//     return fetch(url, options)
//         .then((response) => {
//             return response.json();
//         })
//         .catch(error => {
//             console.log(error.message)
//         })
// }


// (() => { //IIFE (Immediately Invoked Function Expression)
//
//     getEvents("ognoskie").then((events) => {
//         console.log(events);
//         const pushEvents = events.filter(event => {
//             return event.type === "PushEvent"
//         });
//         console.log(pushEvents[0].created_at)
//     })
//
//
// })();
//




// Exercise async/await



const getEvents = async (userName = "ognoskie") => {
    try{
        const url = `https://api.github.com/users/${userName}/events`;
        const options  = {
            method: "GET",
            headers: {
                "Authorization": `token ${PROMISE_GITHUB_TOKEN}` ,
            }
        }
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    }catch (error) {
        console.log(error);
    }
}



(async () => { //IIFE (Immediately Invoked Function Expression)

    const events = await getEvents("ognoskie");
    console.log(events)
    const pushEvents = events.filter(event => {
        return event.type === "PushEvent"
    })
    console.log(pushEvents[0].created_at)
})();


























































































