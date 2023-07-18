$(() => {
    "use strict";

// Base URL for forecast API
    const OPEN_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/forecast';

// Simple way to create URL for request based on coordinates
    function getWeatherURL(lat, lon) {
        return `${OPEN_WEATHER_URL}?lat=${lat}&lon=${lon}&units=imperial&appid=${OPEN_WEATHER_APPID}`;
    }

    const ALAMO_COORDINATES = ['29.4260', '-98.4861'];

// TODO: log URL

// console.log(getWeatherURL(ALAMO_COORDINATES[0], ALAMO_COORDINATES[1]));

    // const URL = getWeatherURL(...ALAMO_COORDINATES);
    // console.log(URL)

// TODO: log full response from API

    // $.ajax(URL).done(data => {
    //     console.log(data);
    // }).fail(console.error);


// TODO: log various parts of the API

    function getWeatherInfo(lat, lon) {
        $.ajax(getWeatherURL(lat, lon)).done(data => {
            renderWeather(data)
            console.log(data);
            // TODO: log the city name
            console.log(data.city.name)
            // TODO: log the first three-hour forecast block
            console.log(data.list[0])
            // TODO: log the humidity for the first three-hour block
            console.log(data.list[0].main.humidity
            )
        }).fail(console.error);
    }


// TODO: log the humidity for all days

//     $.ajax(getWeatherURL())
//         .done((data) => {
// //
// //         data.list.forEach((day, index) => {
// //             if (index % 8 === 0) {
// //                 console.log(day.main.humidity);
// //             }
// //         });
// //
// //         // OR
// //
//             for (let i = 0; i < data.list.length; i += 8) {
//                 console.log(data.list[i].main.humidity);
//             }
//
//         })
//         .fail(console.error);


// TODO: log the min and max temp for each day

    // $.ajax(getWeatherURL(...ALAMO_COORDINATES))
    //     .done(data => {
    //         console.log(data);
    //         const minMaxTemps = returnMinMaxTemps(data);
    //         minMaxTemps.forEach(minMaxTemp => {
    //             console.log(minMaxTemp);
    //         });
    //     })
    //     .fail(console.error);

////////////////////////////////////////////My code for weather map project////////////////////////////////////

// Practice making API calls to the OpenWeather 5 Day / 3 Hour Forecast API. Log various properties from the response.

// When you are comfortable getting and logging data from the API, read through the instructions of the project at the end of the lesson

// I recommend starting the project by creating a card for today’s forecast for fixed location, then build out the forecast panels for the full five days

// Add a map and connect it to your forecast information

// Finish any remaining functionality for the rubric

// Make it look awesome!



// Global
   const map = startMap();
    const marker = createMarker();
    const popup = createPopup();









//Functions

    function startMap() {
        mapboxgl.accessToken = MAPBOX_STEVE_TOKEN;

        const mapOptions = {
            container: 'map',
            style: 'mapbox://styles/mapbox/navigation-night-v1',
            zoom: 3,
            center: [-98.4916, 29.4252],
        }

        return new mapboxgl.Map(mapOptions);
    }



    function createMarker() {
        return new mapboxgl.Marker()
        .setLngLat([-98.4916, 29.4252])
        .addTo(map)

    }


    function createPopup() {
        return new mapboxgl.Popup()
        // .setLngLat([-98.4916, 29.4252])

    }


    function renderWeather(data) {
        $('div.weather-cards').empty();
        for (let i = 0; i < data.list.length; i += 8) {
            $('div.weather-cards').append(`
                <div class="card">
                <h5>Date: ${data.list[i].dt_txt}</h5>
                <p>Temp high: ${data.list[i].main.temp_min}/ Temp low: ${data.list[i].main.temp_max}</p>
                    <p>Description: ${data.list[i].weather[0].description}</p>
                    <p>Humidity: ${data.list[i].main.humidity}</p>
                    <p>Pressure: ${data.list[i].main.pressure}</p>
                    <p>Wind: ${data.list[i].wind.speed}</p>
                     <img src="http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png"
                </div>
            `)

        }
    }

    async function findAddress() {
        const coords = map.getCenter();
        let address = await reverseGeocode(coords, MAPBOX_STEVE_TOKEN)
        console.log(address);
        document.querySelector('#search-wrapper').value = `${address}`
    }



    $('#search-btn')
        .click(function () {
            const userInput = $('#search-input').val();
            geocode(userInput, MAPBOX_STEVE_TOKEN).then((data) => {
                console.log("user has searched. the coordinates are", data)
                const popup = new mapboxgl.Popup()
                marker
                    .setLngLat(data)
                    .setPopup(popup)
                    .addTo(map);
                popup.addTo(map);

                map.flyTo({
                    center: data,
                    zoom: 14,
                    speed: 2,
                    essential: true
                });
                getCurrentCity(data[0],data[1]);
                getWeatherInfo(data[1], data[0]);
            });

        })

    // $(document).on('keydown',function(e) {
    //     const searchInput = $('#search-btn');
    //     if(e.keyCode === 13) {
    //         e.preventDefault()
    //         (searchInput.val());
    //     }
    // });


        function getCurrentCity(lon, lat) {
        const url = getWeatherURL(lat, lon);
        $.get(url).done((data) => {
            const currentCity = data.city.name;
            $('#current-city').html(currentCity)
        });
    }


    $(document).keypress(function(event) {
        if (event.key === "Enter") {

        }
    });

// Events
// Set an event listener

    map.on('click', (e) => {
        console.log(`A click event has occurred at ${e.lngLat}`);
        const clickedLng = e.lngLat.lng;
        const clickedLat = e.lngLat.lat
        getWeatherInfo(e.lngLat.lat, e.lngLat.lng)
        marker.setLngLat([clickedLng, clickedLat])

        // call function to create marker at specific lng and lat

        // getWeatherInfo(lat, lon)
    });

// document.querySelector('#search-btn').addEventListener('click', findAddress)



//Runs when program loads

// map.setZoom();
    getWeatherInfo(29.4252, -98.4916)
    marker.setPopup(popup);





//     search bar js


})
