import React, { useState, useEffect } from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import vector from '../assets/my_location.png';
import { crossingsFetcher } from '../api/crossings-fetcher';

function MapComponent({google, latitude, longitude, zoom, distance}) {
  const [crossings, setCrossings] = useState([]);

  useEffect(() => {
    setCrossings(getCloseCrossings(distance, latitude, longitude));
  }, [distance, latitude, longitude]);

  const getCloseCrossings = (distance, latitude, longitude) => {
    const closeCrossings = crossingsFetcher(latitude, longitude, distance);
    return closeCrossings;
  }

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

        {
          crossings.map((x, i) => <Marker key={'marker_'+ i}
            position={{
              lat: x.lat,
              lng: x.lng,
            }}
            />
          )
        }
      </Map>
    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAn4zNsNjzHhCUpKnIGlAaCLOPqQCGwEtM') })
(MapComponent);
