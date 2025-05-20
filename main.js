//  Initialize the map centered around Accra
// L.map('map') creates a new Leaflet map instance targeting the HTML element with ID "map"
// .setView([latitude, longitude], zoomLevel) sets the map's starting position and zoom level
const map = L.map("map").setView([5.56, -0.205], 13);

//  Add OpenStreetMap tiles as the map background
// L.tileLayer(...) loads map tiles (images) from OpenStreetMap
// The URL uses placeholders {s} for subdomain, {z} for zoom, {x} and {y} for tile coordinates
// The attribution is just a required copyright notice
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map); // .addTo(map) tells Leaflet to add these tiles to our map instance

//  Simulate data fetching
// Here we manually define an array of Points of Interest (POIs) with name, latitude, and longitude
// In a real app, this data would be fetched from a backend API
const poiData = [
  {
    name: "Kwame Nkrumah Mausoleum",
    lat: 5.556,
    lng: -0.2075,
  },
  {
    name: "Independence Arch",
    lat: 5.5505,
    lng: -0.1986,
  },
  {
    name: "Makola Market",
    lat: 5.541,
    lng: -0.2105,
  },
  {
    name: "Jamestown Lighthouse",
    lat: 5.5333,
    lng: -0.2167,
  },
];

// 4. Add a marker for each POI
// We use the forEach loop to go through each item in the poiData array
// For each POI, we:
//  - Create a new marker using L.marker([latitude, longitude])
//  - Add it to the map using .addTo(map)
//  - Bind a popup to it using .bindPopup(), so when clicked it shows the POI's name
poiData.forEach((poi) => {
  const marker = L.marker([poi.lat, poi.lng]).addTo(map); // create and add marker to map
  marker.bindPopup(`<b>${poi.name}</b>`); // show POI name when marker is clicked
});
