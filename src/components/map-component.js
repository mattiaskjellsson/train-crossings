import React, {useEffect, useState } from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

console.log(`Google api key: ${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`)
const MyMapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyAn4zNsNjzHhCUpKnIGlAaCLOPqQCGwEtM`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(({latitude, longitude, isMarkerShown, onMarkerClick}) =>
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: latitude, lng: longitude }}
  >
    {isMarkerShown && <Marker position={{ lat: latitude, lng: longitude }} onClick={onMarkerClick} />}
  </GoogleMap>
)

export function MyFancyComponent(props) {
  const [isMarkerShown, setIsMarkerShown] = useState(false);
  
  const delayedShowMarker = () => {
    setTimeout(() => {
      setIsMarkerShown(true);
    }, 3000)
  }

  useEffect(() => {
    delayedShowMarker();
  }, []);


  const handleMarkerClick = () => {
    setIsMarkerShown(false);
    delayedShowMarker()
  }

  return (
    <MyMapComponent
      isMarkerShown={isMarkerShown}
      latitude={props.latitude}
      longitude={props.longitude}
      onMarkerClick={handleMarkerClick}
    />
  )
}
