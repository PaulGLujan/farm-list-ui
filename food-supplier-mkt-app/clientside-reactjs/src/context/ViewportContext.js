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

    return <Provider value={{ viewport, setViewport }}>{children}</Provider>;
};

export { ViewportContext, ViewportContextController };
