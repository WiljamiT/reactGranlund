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
        <h1>Sijainnit: 30</h1>
        <p><i>Klikkaa nimeä nähdäksesi sijainti kartalla. Lisätietoja toimistosta saat klikkaamalla merkkiä.</i></p>
        <br />
        <ul>
          <li onClick={() => handleLocationClick(null)}>
            <i>Kaikki</i>
          </li>
          {coordinatesData.map((locationData, index) => (
            <li key={index} onClick={() => handleLocationClick(locationData.location)}>
              <i>{locationData.location}</i>
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
          if (selectedLocation === null || selectedLocation === coordinates.location) {
            return (
              <Marker key={index} position={[coordinates.coordinates.lat, coordinates.coordinates.lng]}>
                <Popup>
                  {coordinates.address} <br /> Linkki: {coordinates.btnText}
                </Popup>
              </Marker>
            );
          }
          return null;
        })}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
