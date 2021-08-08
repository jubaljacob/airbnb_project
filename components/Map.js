import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import { useState } from "react";
import getCenter from "geolib/es/getCenter";

function Map({searchResults}) {


    const [selectedLocation, setSelectedLocation] = useState({});

    //transfomr search result obj to lat long obj

    const coordinates = searchResults.map((result) => ({
        longitude: result.long,
        latitude: result.lat,
    }));

    const center = getCenter(coordinates);

    

    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100",
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 8,

    }) ;

    console.log(setSelectedLocation)

    return (
        <ReactMapGL
        mapStyle="mapbox://styles/notmeman/cks1xdi8g56rg17o5corjn6s2"
        mapboxApiAccessToken={process.env.mapbox_key}
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >

            {searchResults.map(result => (
                <div key={result.long}>
                    <Marker 
                        longitude={result.long}
                        latitude={result.lat}
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                            <p 
                            onClick={() => setSelectedLocation(result)}
                            className="cursor-pointer text-2xl animate-bounce"
                            aria-label="push-pin"
                            >
                                📌
                            
                            </p> 

                    </Marker>

                    {/* popup for click on marker */}
                    {selectedLocation.long === result.long ? (
                        <Popup 
                        onClick={() => setSelectedLocation({})}
                        closeOnClick={true}
                        latitude={result.lat}
                        longitude={result.long}
                        
                        >
                            {result.title}
                        </Popup>
                    ):(
                        false
                    )}
                </div>
            ))}

        </ReactMapGL>
    );
}

export default Map;


