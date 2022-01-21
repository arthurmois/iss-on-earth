import React, { useState } from "react";
import { useEffect } from "react";
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

// async function getLocation() {
//   let data = await getISSLocation();

//   longitude = data.iss_position.longitude;
//   latitude = data.iss_position.latitude;
// }



const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

  const MapChart = () => {
    const [data,setData] = useState({"iss_position": {"latitude": "29.4752", "longitude": "25.1402"}});
    useEffect(() => {
      // declare the async data fetching function
      const fetchData = async () => {
        // get the data from the api
        const response = await fetch('http://api.open-notify.org/iss-now.json');
        console.log(JSON.stringify(data));
        // convert the data to json
        const json = await response.json();
    
        // set state with the result
        setData(json);
      }
    
      // call the function
      fetchData()
        // make sure to catch any error
        .catch(console.error);;
    }, [])
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
          <Marker coordinates={[data.iss_position.longitude, data.iss_position.longitude]}>
        <circle r={6} fill="#2ECCE7" />
      </Marker>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default MapChart;
