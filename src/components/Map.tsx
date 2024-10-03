import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

interface LocationData {
  id: number;
  locationName: string;
  address: string;
  latitude: number;
  longitude: number;
  url: string;
}

const MapComponent: React.FC = () => {
  const [locations, setLocations] = useState<LocationData[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const centerPosition: [number, number] = [62.000, 25.000];

  useEffect(() => {
    // Fetch the data from the API
    fetch('https://granlund-demo-ebhxamf7e3c4d4bs.westeurope-01.azurewebsites.net/api/locations')
      .then((response) => response.json())
      .then((data) => {
        setLocations(data);
      })
      .catch((error) => {
        console.error('Error fetching location data:', error);
      });
  }, []);

  const handleLocationClick = (locationName: string | null) => {
    setSelectedLocation(locationName);
  };

  return (
    <div className="map">
      <div className="table-container">
        <h1>Sijainnit: {locations.length}</h1>
        <p><i>Klikkaa nimeä nähdäksesi sijainti kartalla. Lisätietoja toimistosta saat klikkaamalla merkkiä.</i></p>
        <br />
        <ul>
          <li onClick={() => handleLocationClick(null)}>
            <i>Kaikki</i>
          </li>
          {locations.map((locationData, index) => (
            <li key={index} onClick={() => handleLocationClick(locationData.locationName)}>
              <i>{locationData.locationName}</i>
            </li>
          ))}
        </ul>
      </div>

      <MapContainer className="map-container" center={centerPosition} zoom={6}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {locations.map((locationData, index) => {
          if (selectedLocation === null || selectedLocation === locationData.locationName) {
            return (
              <Marker
                key={index}
                position={[locationData.latitude, locationData.longitude]} // Update to use latitude and longitude directly
              >
                <Popup>
                  {locationData.address} <br />
                  <a href={locationData.url} target="_blank" rel="noreferrer">Lue lisää</a>
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
