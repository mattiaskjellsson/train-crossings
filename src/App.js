import React, { useEffect, useState } from 'react';
import { MyFancyComponent } from './components/map-component';
import './App.css';

export function App() {
  const [longitude, setLongitude] = useState(0.0);
  const [latitude, setLatitude] = useState(0.0);

  useEffect(() => {
    if ("geolocation" in navigator) {
      console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
      navigator.geolocation.watchPosition((position) => {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
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
      <MyFancyComponent latitude={latitude} longitude={longitude} />
    </div>
  );
}
