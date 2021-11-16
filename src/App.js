import React, { useEffect, useState } from 'react';
import GoogleMapWrapper from './components/map-component';
import './App.css';

export function App() {
  const [longitude, setLongitude] = useState(0.0);
  const [latitude, setLatitude] = useState(0.0);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition((position) => {
        setLongitude(position.coords.longitude);
        setLatitude(position.coords.latitude);
      }, (error) => {
        console.log(`Error ${error.code} - ${error.message}`);
      });

    } else {
      console.log("Not Available");
    }
  }, [])

  return (
    <div>
      <GoogleMapWrapper 
        apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} 
        zoom={16} 
        latitude={latitude} 
        longitude={longitude} 
        distance={0.75}
      />
    </div>
  );
}
