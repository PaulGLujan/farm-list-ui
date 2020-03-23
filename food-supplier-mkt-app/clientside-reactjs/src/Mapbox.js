import React from 'react';
import './Mapbox.css';
import mapboxgl from 'mapbox-gl';

class Mapbox extends React.Component {
  constructor(props) {
    super(props);
    const markers = {}

    this.state = {
      // San Francisco Coordinates
      lng: -122.420679,
      lat: 37.772537,
      zoom: 9,
      markers: markers
    };

    this.map = null;
  }

  componentDidMount() {
    // Initialize MapBox Map
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_TOKEN

    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });

    this.map.on('move', () => {
      this.setState({
        lng: this.map.getCenter().lng.toFixed(4),
        lat: this.map.getCenter().lat.toFixed(4),
        zoom: this.map.getZoom().toFixed(2)
      });
    });

    this.forceUpdate();
  }

  componentDidUpdate() {
    const map = this.map
    if (map) {
      // add markers to map
      const newMarkers = {}

      for (let [key, marker] of Object.entries(this.props.markers)) {
        let hashString = marker.geometry.coordinates[0] + "," + marker.geometry.coordinates[1]

        if (!(hashString in this.state.markers)) {
          console.log('creating new marker ' + hashString);

          // make a marker and add to the map
          new mapboxgl.Marker()
            .setLngLat(marker.geometry.coordinates)
            .addTo(map);

          newMarkers[hashString] = marker
        }
      }

      if (Object.keys(newMarkers).length) {
        this.setState({
          markers: Object.assign(this.state.markers, newMarkers)
        })
      }
    }
  }

  render() {
    return (
      <div>
        <div className="sidebarStyle">
          <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
        </div>
        <div ref={el => this.mapContainer = el} className="mapContainer" />
      </div>
    );
  }
}

export default Mapbox;
