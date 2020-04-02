import React, { useState, useRef, useEffect, useContext } from 'react';
import mapboxgl from 'mapbox-gl';
import { createUseStyles } from 'react-jss';
import FarmContext from '../context/farm-context';
// import process from './../../env.json' // <-- Please leave this in, so it can be accesed in v0.0.2-(react-webpack).  Can just leave it commented out and I'll comment it in,

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_TOKEN;

const Mapbox = props => {
    const farmContext = useContext(FarmContext);

    const [view, setView] = useState({
        // Default Bay Area coordinates
        lng: -122.420679,
        lat: 37.772537,
        zoom: 7
    });
    const [map, setMap] = useState();
    const mapContainer = useRef(null);

    // Initialize MapBox Map
    useEffect(() => {
        const initMap = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v9',
            center: [view.lng, view.lat],
            zoom: view.zoom
        });

        initMap.on('move', () => {
            setView({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
        });
        setMap(initMap);
    }, []);

    // Set Farm Coordinates
    useEffect(() => {
        const { farms } = farmContext;

        farms.forEach(farm => {
            if (farm.Coordinates.longitude && farm.Coordinates.latitude) {
                const coordinates = [
                    farm.Coordinates.longitude,
                    farm.Coordinates.latitude
                ];

                // make a marker and add to the map
                new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
            }
        });
    }, [farmContext]);

    const classes = useStyles();

    return <div ref={mapContainer} className={classes.mapContainer} />;
};

const useStyles = createUseStyles({
    mapContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        visibility: 'inherit'
    }
});

export default Mapbox;
