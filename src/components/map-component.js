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
    const haversineInKM = (lat1, long1, lat2, long2) => {
      const _eQuatorialEarthRadius = 6378.1370;
      const _d2r = (Math.PI / 180.0);
      const dlng = (long2 - long1) * _d2r;
      const dlat = (lat2 - lat1) * _d2r;
      const a = Math.pow(Math.sin(dlat / 2.0), 2.0) + Math.cos(lat1 * _d2r) * Math.cos(lat2 * _d2r) * Math.pow(Math.sin(dlng / 2.0), 2.0);
      const c = 2.0 * Math.atan2(Math.sqrt(a), Math.sqrt(1.0 - a));
      const d = _eQuatorialEarthRadius * c;
      return d;
    }

    const crossings = crossingsFetcher();
    
    const closeCrossings = crossings.filter((crossing) => {
      const d = haversineInKM(latitude, longitude, crossing.lat, crossing.lng);
      return d < distance;
    });

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
