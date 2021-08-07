import ReactMapGL from 'react-map-gl';
import { useState } from "react";
import getCenter from "geolib/es/getCenter";

function Map({searchResults}) {




    //transfomr search result obj to lat long obj

    const coordinates = searchResults.map((result) => ({
        longitude: result.long,
        latitude: result.lat,
    }));

    const center = getCenter(coordinates);

    console.log(center);

    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100",
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 8,

    }) ;

    return (
        <ReactMapGL
        mapStyle="mapbox://styles/notmeman/cks1xdi8g56rg17o5corjn6s2"
        mapboxApiAccessToken={process.env.mapbox_key}
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >

        </ReactMapGL>
    );
}

export default Map;


