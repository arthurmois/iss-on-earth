import React, { useState } from "react";
import { useEffect } from "react";
import getISSLocation from "./api/location";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
} from "react-simple-maps";

var longitude;
var latitude;

// async function getLocation() {
//   let data = await getISSLocation();

//   longitude = data.iss_position.longitude;
//   latitude = data.iss_position.latitude;
// }

const geoUrl =
"https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const MapChart = () => {
  const [alternate, setAlternate] = useState(true);
  const MINUTE_MS = 3000;
  useEffect(() => {
    const interval = setInterval(() => {
      setAlternate((previousAlt) => !previousAlt)
    }, MINUTE_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);

  useEffect(() => {
    // declare the async data fetching function
    async function fetchData() {
      // get the data from the api
      let response = await fetch(
        "https://api.wheretheiss.at/v1/satellites/25544"
      );

      let data = await response.json();

      // set state with the result
      setData(data);
      return data;
    };

    // call the function
    fetchData();
  }, [alternate]);

  const [data, setData] = useState();

  return (
    <div>
      <ComposableMap>
        <ZoomableGroup zoom={1}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>
          <Marker
            coordinates={[
              data ? data.longitude : 25,
              data ? data.longitude : 25,
            ]}
          >
            <circle r={6} fill="#2ECCE7" />
          </Marker>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default MapChart;
