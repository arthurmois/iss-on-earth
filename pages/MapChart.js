import React from "react";
import getISSLocation from "./api/location";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker
} from "react-simple-maps";

var longitude;
var latitude;

async function getLocation() {
  let data = await getISSLocation();

  longitude = data.iss_position.longitude;
  latitude = data.iss_position.latitude;
}

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

  const MapChart = () => {
    getLocation()
  return (
    <div>
      <ComposableMap>
        <ZoomableGroup zoom={1}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>
          <Marker coordinates={[longitude, latitude]}>
        <circle r={6} fill="#2ECCE7" />
      </Marker>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default MapChart;
