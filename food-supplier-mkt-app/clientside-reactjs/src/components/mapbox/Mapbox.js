import React, { useContext, useState } from 'react';
import { createUseStyles } from 'react-jss';
import Pins from './Pins';
import ReactMapGL from 'react-map-gl';
import { FarmsContext } from '../../context/FarmsContext';
import { ViewportContext } from '../../context/ViewportContext';
import MarkerPopup from './MarkerPopup';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_API_TOKEN;

const Map = () => {
    const { viewport, setViewport } = useContext(ViewportContext);

    const [hoverInfo, setHoverInfo] = useState(null);
    const classes = useStyles();

    return (
        <FarmsContext.Consumer>
            {({ farmsData: { farms, filteredFarms } }) => (
                <div className={classes.base}>
                    <ReactMapGL
                        width="100%"
                        height="100%"
                        {...viewport}
                        onViewportChange={viewport => {
                            const { width, height, ...etc } = viewport;
                            setViewport(etc);
                        }}
                        mapboxApiAccessToken={MAPBOX_TOKEN}
                        mapStyle="mapbox://styles/mapbox/streets-v11"
                    >
                        {(filteredFarms.length > 0 ? filteredFarms : farms).map(({ Coordinates: coordinates, Name: name }, i) => (
                            <Pins
                                key={`pins-${i}`}
                                name={name}
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
            )}
        </FarmsContext.Consumer>
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

const useStyles = createUseStyles({
    base: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        visibility: 'inherit'
    },
    '@media (max-width: 575px)': {
        base: {
            position: 'inherit'
        }
    }
});

export default Map;
