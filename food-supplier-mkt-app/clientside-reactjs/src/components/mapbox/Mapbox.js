import React from 'react';
import Pins from './Pins';
import { Component } from 'react';
import ReactMapGL, { Popup } from 'react-map-gl';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_API_TOKEN;

class Map extends Component {
    state = {
        viewport: {
            width: '100%',
            height: '100%',
            latitude: 37.7577,
            longitude: -122.4376,
            zoom: 8
        }
    };

    renderPopup() {
        if (false) {
            return (
                <Popup
                    longitude={-122.420679}
                    latitude={37.772537}
                    closeButton={false}
                >
                    <div className="county-info">This is a popup</div>
                </Popup>
            );
        }
        return null;
    }

    render() {
        return (
            <div
                style={{
                    position  : 'absolute',
                    width     : '100%',
                    height    : '100%',
                    overflow  : 'hidden',
                    visibility: 'inherit'
                }}
            >
                <ReactMapGL
                    {...this.state.viewport}
                    onViewportChange={viewport => this.setState({ viewport })}
                    mapboxApiAccessToken={MAPBOX_TOKEN}
                    mapStyle="mapbox://styles/mapbox/streets-v11"
                >
                    <Pins />
                    {this.renderPopup()}
                </ReactMapGL>
            </div>
        );
    }
}

export default Map;
