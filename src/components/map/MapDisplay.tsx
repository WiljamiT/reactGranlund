import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

interface LocationData {
  id: number;
  locationName: string;
  address: string;
  latitude: number;
  longitude: number;
  url: string;
}

interface MapDisplayProps {
  locations: LocationData[];
  selectedLocation: string | null;
  centerPosition: [number, number];
}

const MapDisplay: React.FC<MapDisplayProps> = ({
  locations,
  selectedLocation,
  centerPosition,
}) => {
  return (
    <MapContainer className="map-container" center={centerPosition} zoom={6}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {locations.map((locationData) => {
        if (
          selectedLocation === null ||
          selectedLocation === locationData.locationName
        ) {
          return (
            <Marker
              key={locationData.id}
              position={[locationData.latitude, locationData.longitude]}
            >
              <Popup>
                {locationData.address} <br />
                <a href={locationData.url} target="_blank" rel="noreferrer">
                  Lue lisää
                </a>
              </Popup>
            </Marker>
          );
        }
        return null;
      })}
    </MapContainer>
  );
};

export default MapDisplay;
