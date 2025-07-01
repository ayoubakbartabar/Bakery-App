import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import "./ContactMapSection.css";

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

  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    if (isLoaded) {
      const timeout = setTimeout(() => {
        setShowLoader(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [isLoaded]);

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
        {showLoader && (
          <div className="map-loader-overlay">
            <div className="loader-icon">
              <i className="fas fa-map-marker-alt"></i>
              <p>در حال بارگذاری نقشه...</p>
            </div>
          </div>
        )}

        {isLoaded && (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={13}
          >
            {/* Render a Marker component for each marker in the array */}
            {markers.map((marker) => (
              <Marker
                key={marker.id}
                position={marker.position}
                title={marker.title}
              />
            ))}
          </GoogleMap>
        )}
      </section>
    </div>
  );
}
