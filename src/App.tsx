import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';

import 'leaflet/dist/leaflet.css';
import MapComponent from './components/Map';


function App() {
  return (
    <div className="App">
      <Nav />
      <MapComponent />
    </div>
  );
}

export default App;
