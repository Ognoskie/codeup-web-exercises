$(() => {

    //TODO
    // Generate a map that shows the city with your favorite restaurant using geocoding.
    //     Redraw the map of the above location at zoom levels 5, 15, and 20. Do this by simply changing the value of zoom level where the map properties are initially set and refresh the page to see the changes. Can the zoom be changed programmatically after the initial map is drawn?
    //     Create a marker on your map of the exact location of your favorite restaurant set the zoom to allow for best viewing distance.
    //     Create a popup with the name of the restaurant.
    //     Make sure the info window does not display until the marker has been clicked on.
    //     Refactor your code to display at least three of your favorite restaurants with information about each. Create an array of objects with information about each restaurant to accomplish this. Use a .forEach() loop rather than a for loop.


// Global variables

const map = startMap();
    const marker = createMarker();
    const popup = createPopup();
    let zoomCounter = 0
    let zoomInLevels = [5, 10, 15]




// Functions

   function startMap() {
       mapboxgl.accessToken = MAPBOX_STEVE_TOKEN;

       const mapOptions = {
           container: 'map',
           style: 'mapbox://styles/mapbox/streets-v12',
           zoom: 10,
           center: [-98.4916, 29.4252],
       }

       return new mapboxgl.Map(mapOptions);
   }

    function createMarker() {
        return new mapboxgl.Marker()
            // .setLngLat([-98.4916, 29.4252])
            // .addTo(map)
    }


    function createPopup() {
        return new mapboxgl.Popup()
            // .setLngLat([-98.4916, 29.4252])

    }



    async function markCover() {
        let cover = await geocode('Cover 3, san antonio', MAPBOX_STEVE_TOKEN)
                map.setCenter(cover);
                map.setZoom(15);
            const coverPopup = new mapboxgl.Popup()
                .setHTML(`<p>Cover 3</p>`);
            const coverMarker = new mapboxgl.Marker()
                .setLngLat(cover)
                // comment this out so the text doesnt pop up right away
                // .addTo(map)
                .setPopup(coverPopup);
            coverPopup.addTo(map);
    }


    async function markNorthItalia() {
        let italia = await geocode('5822 Worth Pkwy\n' +
            'Unit 108\n' +
            'San Antonio, TX  78257\n' +
            'United States', MAPBOX_STEVE_TOKEN)
        map.setCenter(italia);
        map.setZoom(15);
        const italiaPopup = new mapboxgl.Popup()
            .setHTML(`<p>North Italia</p>`);
        const italiaMarker = new mapboxgl.Marker()
            .setLngLat(italia)
            // comment this out so the text doesnt pop up right away
            // .addTo(map)
            .setPopup(italiaPopup);
        italiaPopup.addTo(map)
    }


    async function markPappadeaux() {
        let pap = await geocode('76 NE Loop 410\n' +
            'San Antonio, TX  78216\n' +
            'United States', MAPBOX_STEVE_TOKEN)
        map.setCenter(pap);
        map.setZoom(15);
        const papPopup = new mapboxgl.Popup()
            .setHTML(`<p>Pappadeaux</p>`);
        const papMarker = new mapboxgl.Marker()
            .setLngLat(pap)
            // comment this out so the text doesnt pop up right away
            // .addTo(map)
            .setPopup(papPopup);
        papPopup.addTo(map)
    }

    async function findAddress() {
        const coords = map.getCenter();
        let address = await reverseGeocode(coords, MAPBOX_STEVE_TOKEN)
        console.log(address);
        document.querySelector('h1').innerHTML = `${address}`
    }

function resetButton() {
       map.setZoom(1);
       // reset counter by setting counter equal to zero
        zoomCounter = 0
}

function zoomInButton() {
    // If counter is less than or equal to 2
    if (zoomCounter <= 2) {
        // Zoom our map into the zoom value in zoomInLevels at the index of zoomCounter
        map.setZoom(zoomInLevels[zoomCounter])
        // Increase our counter by one
        zoomCounter++
    }
    // Otherwise do nothing


    return zoomInLevels
}









// Events
    document.querySelector('#zoom-reset').addEventListener('click', resetButton)
    document.querySelector('#zoom-in').addEventListener('click', zoomInButton)
    document.querySelector('#mark-cover').addEventListener('click', markCover)
    document.querySelector('#mark-italia').addEventListener('click', markNorthItalia)
    document.querySelector('#mark-pappadeaux').addEventListener('click', markPappadeaux)






 // Runs when program loads
map.setZoom(1);



   // map.setZoom(5);
   // map.setZoom(10);
   // map.setZoom(15);
    marker.setPopup(popup);






















})