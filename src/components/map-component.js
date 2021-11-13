import React from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import vector from '../assets/my_location.png';

function MapComponent({google, latitude, longitude, zoom}) {
  return (
    <div className="map-area">
      <Map google={google}
          zoom={zoom}
          center={{
              lat: latitude,
              lng: longitude,
          }}
      >
        <Marker key="marker_1"
          icon={{
            url: vector,
            scaledSize: new google.maps.Size(20, 20),
          }}
          position={{
              lat: latitude,
              lng: longitude,
          }}
        />
      </Map>
    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAn4zNsNjzHhCUpKnIGlAaCLOPqQCGwEtM') })
(MapComponent);
