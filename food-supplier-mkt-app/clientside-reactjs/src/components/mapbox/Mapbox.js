import React, { useContext, useState } from 'react';
import Pins from './Pins';
import ReactMapGL, { Popup } from 'react-map-gl';
import FarmContext from '../../context/farm-context';
import MarkerPopup from './MarkerPopup';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_API_TOKEN;

const Map = () => {
    const { farms } = useContext(FarmContext);
    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
    });

    const [hoverInfo, setHoverInfo] = useState(null);

    return (
        <div
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                visibility: 'inherit'
            }}
        >
            <ReactMapGL
                {...viewport}
                onViewportChange={setViewport}
                mapboxApiAccessToken={MAPBOX_TOKEN}
                mapStyle="mapbox://styles/mapbox/streets-v11"
            >
                {farms.map(({ Coordinates: coordinates, Name: name }, i) => (
                    <Pins
                        key={`pins-${i}`}
                        onHover={isHovered => {
                            if (isHovered) {
                                setHoverInfo({ coordinates, name });
                            } else {
                                setHoverInfo(null);
                            }
                        }}
                        coordinates={coordinates}
                    />
                ))}
                {renderPopup(hoverInfo)}
            </ReactMapGL>
        </div>
    );
};

const renderPopup = selectedMarker => {
    if (selectedMarker) {
        const { coordinates, name } = selectedMarker;
        return (
            <MarkerPopup
                longitude={coordinates.longitude}
                latitude={coordinates.latitude}
            >
                <div className="county-info">{name}</div>
            </MarkerPopup>
        );
    }
    return null;
};

export default Map;
