import React, { createContext, useState } from 'react';

const initialViewport = {
    width: '100%',
    height: '100%',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
};

const ViewportContext = createContext(initialViewport);
const { Provider } = ViewportContext;

const ViewportContextController = ({ children }) => {
    const [viewport, setViewport] = useState(initialViewport);

    const manualSetViewport = (latitude, longitude, zoom) => {
        if (zoom) viewport.zoom = zoom;
        const newViewport = {
            ...viewport,
            latitude,
            longitude
        };
        setViewport(newViewport);
    };

    // All of the keys in the value object can be used via `useContext`
    // The value prop is the mutable "store" of the context
    return (
        <Provider value={{ viewport, setViewport, manualSetViewport }}>
            {children}
        </Provider>
    );
};

export { ViewportContext, ViewportContextController };
