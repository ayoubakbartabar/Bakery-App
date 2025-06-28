import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import "./ContactMapSection.css";

// Center coordinates for the initial map position
const center = {
  lat: 43.6151,
  lng: -79.684,
};

// Styling for the Google Map container
const containerStyle = {
  width: "100%",
  height: "500px",
  borderRadius: "12px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
};

export default function ContactMapSection() {
  // Load the Google Maps JavaScript API with your API key
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDB49E207L6hJC25EbGeSrABpsr3y9y8HY",
  });

  // Array of marker data including position and title
  const markers = [
    { id: 1, position: { lat: 43.6151, lng: -79.684 }, title: "Meadowvale" },
    {
      id: 2,
      position: { lat: 43.6038, lng: -79.6661 },
      title: "Highland Farms",
    },
    {
      id: 3,
      position: { lat: 43.6023, lng: -79.6432 },
      title: "Rockwood Mall",
    },
    {
      id: 4,
      position: { lat: 43.5996, lng: -79.6897 },
      title: "Heartland Town Centre",
    },
  ];

  return (
    <div className="contact-map-bg">
      <section className="contact-map-section">
        {/* Render map only after Google Maps API has loaded */}
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle} // Apply container styles
            center={center} // Set initial center of the map
            zoom={13} // Initial zoom level
          >
            {/* Render a Marker component for each marker in the array */}
            {markers.map((marker) => (
              <Marker
                key={marker.id}
                position={marker.position}
                title={marker.title} // Tooltip shown on marker hover
              />
            ))}
          </GoogleMap>
        ) : (
          // Show loading text while the map API is loading
          <p>Loading map...</p>
        )}
      </section>
    </div>
  );
}
