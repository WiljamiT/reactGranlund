import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import locationData from '../json/locations.json';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapComponent: React.FC = () => {
  const centerPosition: [number, number] = [62.000, 25.000];

  return (
    <MapContainer className="map-container" center={centerPosition} zoom={5} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      
      {locationData.map((location, index) => (
        <Marker key={index} position={[location.location.lat, location.location.lng]}>
          <Popup>{location.address} <br /> Linkki: {location.btnText}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
