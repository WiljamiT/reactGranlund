import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import coordinatesData from '../json/locations.json';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapComponent: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const centerPosition: [number, number] = [62.000, 25.000];

  // Handler to set the selected location
  const handleLocationClick = (location: string | null) => {
    setSelectedLocation(location);
  };

  return (
    <div className="map">
      <div className="table-container">
        <h1>Locations:</h1>
        <ul>
          {/* "All" option to show all markers */}
          <li onClick={() => handleLocationClick(null)}>
            <strong>All</strong>
          </li>
          {coordinatesData.map((locationData, index) => (
            <li key={index} onClick={() => handleLocationClick(locationData.location)}>
              <strong>{locationData.location}</strong>
            </li>
          ))}
        </ul>
      </div>
      <MapContainer className="map-container" center={centerPosition} zoom={6}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {coordinatesData.map((coordinates, index) => {
          // Render only the selected location's marker or all markers if none is selected
          if (selectedLocation === null || selectedLocation === coordinates.location) {
            return (
              <Marker key={index} position={[coordinates.coordinates.lat, coordinates.coordinates.lng]}>
                <Popup>
                  {coordinates.address} <br /> Linkki: {coordinates.btnText}
                </Popup>
              </Marker>
            );
          }
          return null; // Don't render any marker if the location is not selected
        })}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
