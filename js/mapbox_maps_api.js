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

















// Events




























 // Runs when program loads
map.setZoom(1);























})