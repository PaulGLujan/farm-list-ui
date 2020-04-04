import React, { useState } from 'react';
import Pins from './Pins';
import ReactMapGL, { Popup } from 'react-map-gl';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_API_TOKEN;

const Map = () => {
    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
    });

    const [hoverInfo, setHoverInfo] = useState(null);

    const onMarkerHover = togglePopup => {
        if (togglePopup) {
            const hoverInfo = {
                longitude: -122.420679,
                latitude: 37.772537
            };
            setHoverInfo(hoverInfo);
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
                <Pins
                    onHover={togglePopup => {
                        onMarkerHover(togglePopup);
                    }}
                />
                {renderPopup({ hoverInfo })}
            </ReactMapGL>
        </div>
    );
};

const renderPopup = ({ hoverInfo }) => {
    if (hoverInfo) {
        return (
            <Popup
                longitude={hoverInfo.longitude}
                latitude={hoverInfo.latitude}
                closeButton={false}
            >
                <div className="county-info">This is a popup</div>
            </Popup>
        );
    }
    return null;
};

export default Map;
