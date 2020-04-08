import React, { useContext, useState } from 'react';
import Pins from './Pins';
import ReactMapGL, { Popup } from 'react-map-gl';
import FarmContext from '../../context/farm-context';

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

    const onMarkerHover = coordinates => {
        if (coordinates) {
            setHoverInfo(coordinates);
        } else {
            setHoverInfo(null);
        }
    };

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
                {farms.map(({ Coordinates }, i) => (
                    <Pins
                        key={`pins-${i}`}
                        onHover={coordinates => {
                            onMarkerHover(coordinates);
                        }}
                        coordinates={Coordinates}
                    />
                ))}
                {renderPopup(hoverInfo)}
            </ReactMapGL>
        </div>
    );
};

const renderPopup = coordinates => {
    if (coordinates) {
        return (
            <Popup
                longitude={coordinates.longitude}
                latitude={coordinates.latitude}
                closeButton={false}
            >
                <div className="county-info">This is a popup</div>
            </Popup>
        );
    }
    return null;
};

export default Map;
