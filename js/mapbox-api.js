$(() => {

    // Global variables
    const map = initializesMap();
    const marker = createMarker();
    const popup = createPopup();




    // Functions
    // Function that initializes the map
    function initializesMap() {
        mapboxgl.accessToken = MAPBOX_STEVE_TOKEN;


        const mapOptions = {
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v12',
            zoom: 10,
            center: [-98.4916, 29.4252],
        }

        return new mapboxgl.Map(mapOptions);
    }
    // Function that creates a marker at CodeUp
    function createMarker() {
        return new mapboxgl.Marker()
            .setLngLat([-98.4916, 29.4252])
            .addTo(map)
    }

    function createPopup() {
        return new mapboxgl.Popup()
            .setLngLat([-98.4916, 29.4252])
            .setHTML(`
            <div>
                <h1>CodeUp</h1>
                <p>Here is CodeUp</p>
            </div>
            `);
    }
    // function that brings you to paris
   async function goToParis(userInput) {
        let data = await geocode(userInput, MAPBOX_STEVE_TOKEN)
       console.log(data)
       map.setCenter(data);


        // geocode('Paris', MAPBOX_STEVE_TOKEN).then((data) => {
        //     console.log(data);
        //     map.setCenter(data);
        // })
    }

    async function findAddress() {
        const coords = map.getCenter();
        let address = await reverseGeocode(coords, MAPBOX_STEVE_TOKEN)
        console.log(address);
        document.querySelector('h1').innerHTML = `${address}`

        // console.log(coords);
        // reverseGeocode(coords, MAPBOX_STEVE_TOKEN).then((data) => {
        //     console.log(data);
        //
        // });
    }

    // function that uses geocode to take a string 'the alamo, san antonio'
    // and get coordinates to set a marker and popup at that location

    async function markAlamo() {
        let alamo = await geocode('The alamo, san antonio', MAPBOX_STEVE_TOKEN)
        geocode('The alamo, san antonio', MAPBOX_STEVE_TOKEN).then((data) => {
            const alamoPopup = new mapboxgl.Popup()
                .setHTML(`<p>Remember me</p>`);
            const alamoMarker = new mapboxgl.Marker()
                .setLngLat(alamo)
                .addTo(map)
                .setPopup(alamoPopup);
            alamoPopup.addTo(map);
         })
    }


    // Events
    document.querySelector('#geocode-button').addEventListener('click', () => {
        goToParis('Paris')
    })
    document.querySelector('#reverse-geocode-button').addEventListener('click', findAddress)
    document.querySelector('#mark-alamo').addEventListener('click', markAlamo)





    // Runs when program loads
    map.setZoom(1);
    marker.setPopup(popup);

});