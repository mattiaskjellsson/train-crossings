import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};

export function MapContainer({google, longitude, latitude}) {
  return (
      <Map
        google={google}
        zoom={16}
        style={mapStyles}
        initialCenter={{ 
          lat: latitude, 
          lng: longitude
      }}>
        <Marker name={'Current location'}
          position={{lat: latitude, lng: longitude}}
          // icon={{
          //   url: "my_location.png",
          //   anchor: new google.maps.Point(32,32),
          //   scaledSize: new google.maps.Size(64,64)
          // }}
        />
      </Map>
  );
}

const LoadingContainer = (_) => (
  <div>Fancy loading container!</div>
)

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_MAPS_API_KEY,
  LoadingContainer: LoadingContainer
})(MapContainer);