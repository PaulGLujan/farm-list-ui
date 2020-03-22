import React from 'react';
import './App.css';
import Mapbox from './Mapbox.js'

class App extends React.Component {
  componentDidMount() {
  }
  
  render() {
    const markers = [
      {
        geometry: {
          coordinates: [-122.420679, 37.772537],
        }
      }
    ]

    return (
      <div className="App">
        <Mapbox markers={markers} />
      </div>
    );
  }
}

export default App;
