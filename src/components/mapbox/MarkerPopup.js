import React from 'react';
import { createUseStyles } from 'react-jss';
import { Popup } from 'react-map-gl';

const MarkerPopup = ({ longitude, latitude, children }) => {
    const classes = useStyles();
    return (
        <Popup
            longitude={longitude}
            latitude={latitude}
            closeButton={false}
            className={classes.popup}
        >
            {children}
        </Popup>
    );
};

const useStyles = createUseStyles({
    popup: {
        paddingBottom: 27
    }
});

export default MarkerPopup;
