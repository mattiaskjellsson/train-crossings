import React from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react';

function MapComponent({google, latitude, longitude, zoom}) {
  return (
    <div className="map-area">
      <Map google={google}
          zoom={zoom}
          center={{
              lat: latitude,
              lng: longitude,
          }}
      ></Map>
    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAn4zNsNjzHhCUpKnIGlAaCLOPqQCGwEtM') })
(MapComponent);
