import React from "react";
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps";
import {compose, withProps} from "recompose";
import uuid from "uuid/v4";
// Map is a reserved word, work around "MapComponent"

const googleMapURL = "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places";
const mapHeight = {height: "100%"};

/**
 * The Google Maps Component
 * 
 * @class MapComponent
 */
const MapComponent = compose(
  withProps({
    googleMapURL: googleMapURL,
    loadingElement: <div style={mapHeight} />,
    containerElement: <div style={mapHeight} />,
    mapElement: <div style={mapHeight} />,
  }),
  withScriptjs,
  withGoogleMap,
)(({facilities}) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: facilities[0].coord[0], lng: facilities[0].coord[1]}}
  >
    {
      facilities.map(
        (facility) => 
          <Marker 
            key={uuid()} 
            position={{ lat: facility.coord[0], lng: facility.coord[1]}} // not my favorite, just hardcoding to get something working
          />
      )
    }
  </GoogleMap>
);


export default MapComponent;