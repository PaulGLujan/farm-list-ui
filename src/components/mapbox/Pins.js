import React, { PureComponent } from 'react';
import { Marker } from 'react-map-gl';
import withStyles from 'react-jss';
import defaultMapMarker from '../../resources/images/default-marker.png';

const ICON_SIZE = 27;

// Important for perf: the markers never change, avoid rerender when the map viewport changes
class Pins extends PureComponent {
    render() {
        const { classes, onHover, coordinates, name } = this.props;

        return (
            <Marker
                longitude={coordinates.longitude}
                latitude={coordinates.latitude}
                className={classes.base}
            >
                <img
                    style={{ width: ICON_SIZE }}
                    src={defaultMapMarker}
                    onMouseEnter={() => {
                        console.log('onMouseEnter');
                        onHover(true);
                    }}
                    onMouseOut={() => {
                        console.log('onMouseOut');
                        onHover(false);
                    }}
                    alt={name}
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
