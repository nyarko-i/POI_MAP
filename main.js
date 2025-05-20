// Create a map inside the HTML element with the ID 'map'
// Set the map to be centered on New York City with a zoom level of 12
const map = L.map("map").setView([40.7306, -73.9352], 12);

// Add the map tiles from OpenStreetMap to give the map its appearance
// This tile layer is what actually draws the streets, parks, etc.
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors", // Credit the map data source
}).addTo(map);

// This is the list of Points of Interest (POIs) we want to show on the map
// In a real-world app, you'd get this from a backend API
const poisData = [
  { name: "Park A", latitude: 40.7128, longitude: -74.006 },
  { name: "Restaurant B", latitude: 40.7306, longitude: -73.9352 },
  { name: "Museum C", latitude: 40.759, longitude: -73.9851 },
];

// Loop through the list of POIs
poisData.forEach((poi) => {
  // For each POI, create a marker using its latitude and longitude
  const marker = L.marker([poi.latitude, poi.longitude]).addTo(map);

  // Attach a popup to the marker that will show the name of the POI
  // This popup appears when the user clicks the marker
  marker.bindPopup(`<b>${poi.name}</b>`);
});
