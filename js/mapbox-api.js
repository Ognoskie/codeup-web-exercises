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



    // Events








    // Runs when program loads
    map.setZoom(1);
    marker.setPopup(popup);

















































});