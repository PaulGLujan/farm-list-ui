import React, { useState, useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import Airtable from 'airtable';
import { createUseStyles } from 'react-jss';
// import process from './../../env.json' // <-- Please leave this in, so it can be accesed in v0.0.2-(react-webpack).  Can just leave it commented out and I'll comment it in,

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_TOKEN

function airtableFetchMarkers(map) {
	const base = new Airtable({apiKey: 'key9CJdcEkG2Ymiur'}).base('appDk0v3oHfD3Bjf6');

  base('Locations').select({
    view: "Grid view"
  }).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.
    records.forEach(function(record) {
      if (record.fields.Longitude && record.fields.Latitude) {
        const coordinates = [record.fields.Longitude, record.fields.Latitude];

        // make a marker and add to the map
        new mapboxgl.Marker()
        .setLngLat(coordinates)
        .addTo(map);

        console.log('Retrieved', record.get('Name'));
      }
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();
  }, function done(err) {
    if (err) { console.error(err); return; }
  });
}

const Mapbox = (props) => {
  let map = null;
  const [view, setView] = useState({
    // Default Bay Area coordinates
    lng: -122.420679,
    lat: 37.772537,
    zoom: 9,
  })
  const mapContainer = useRef(null); 

  // Initialize MapBox Map
  useEffect(() => {
    map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [view.lng, view.lat],
      zoom: view.zoom,
    });

    map.on('move', () => {
      setView({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }, [])

	// FetchAirtable
  useEffect(() => {
		airtableFetchMarkers(map);
	}, [])

  const classes = useStyles();

  return <div ref={mapContainer} className={classes.mapContainer} />;
}

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
