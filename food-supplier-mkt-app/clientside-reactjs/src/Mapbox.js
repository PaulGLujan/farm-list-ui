import React from 'react';
import './Mapbox.css';
import mapboxgl from 'mapbox-gl';

class Mapbox extends React.Component {
  componentDidMount() {
    // Initialize MapBox Map
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_TOKEN

    const map = new mapboxgl.Map({
      container: 'mapbox-map',
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [-122.420679, 37.772537],
      zoom: 9,
    });
  }

  render() {
    return (
      <div id="mapbox-map" />
    );
  }
}

export default Mapbox;
