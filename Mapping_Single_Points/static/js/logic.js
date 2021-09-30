// Add console.log to check to see if our code is working.
console.log("working");

// Add a Map Object
// Create the map object with a center and zoom level.
// Could use the setView() method to set the view of the map instead of curly brackets like below
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });

// Create the map object with options.
let map = L.map('mapid').setView([40.7, -94.5], 4);

//  Add a marker to the map for Los Angeles, California.
let marker = L.marker([34.0522, -118.2437]).addTo(map);

// Add a circle to the map for Los Angeles, California.
// L.circle([34.0522, -118.2437], {
//     radius: 100
//  }).addTo(map);

// Add a circle to the map for Los Angeles, California using the circleMarker() function.
 L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    color: "black",
    fillColor: '#ffffa1'
    }).addTo(map);



//Create Tile Layer for the Map that will be the background of the map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Add the 'streets' tile layer to the map
streets.addTo(map);

// To change the map's style, change the map id using the list of Mapbox ids below:
// mapbox/streets-v11
// mapbox/outdoors-v11
// mapbox/light-v10
// mapbox/dark-v10
// mapbox/satellite-v9
// mapbox/satellite-streets-v11


