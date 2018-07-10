import React from "react";
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps"
import {compose, withProps} from "recompose";
// Map is a reserved word, work around "MapComponent"

/**
 * The Google Maps Component
 * 
 * @class MapComponent
 */

const MapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
	withGoogleMap,
)(({facilities}) =>
  <GoogleMap
    defaultZoom={8}
		defaultCenter={{ lat: facilities[0].coord[0], lng: facilities[0].coord[1]}}
	>
	{
		facilities.map((facility) => <Marker position={{ lat: facility.coord[0], lng: facility.coord[1]}} />)
	}
  </GoogleMap>
)


export default MapComponent;