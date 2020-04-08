import React, { PureComponent } from 'react';
import { Marker } from 'react-map-gl';
import withStyles from 'react-jss';
import mapMarkerImg from '../../resources/images/map-marker.png';

const ICON_SIZE = 20;

// Important for perf: the markers never change, avoid rerender when the map viewport changes
class Pins extends PureComponent {
    render() {
        const { classes, onHover, coordinates } = this.props;
        console.log(coordinates);

        return (
            <Marker
                longitude={coordinates.longitude}
                latitude={coordinates.latitude}
                className={classes.base}
            >
                <img
                    style={{ width: ICON_SIZE }}
                    src={mapMarkerImg}
                    onMouseEnter={() => {
                        console.log('onMouseEnter');
                        onHover(true);
                    }}
                    onMouseOut={() => {
                        console.log('onMouseOut');
                        onHover(false);
                    }}
                />
            </Marker>
        );
    }
}

const styles = {
    base: {
        '& img': {
            transform: `translate(${-ICON_SIZE / 2}px,${-ICON_SIZE}px)`
        }
    }
};

export default withStyles(styles)(Pins);
