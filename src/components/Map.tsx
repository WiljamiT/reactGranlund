import React, { useState, useEffect } from "react";
import LocationList from "./LocationList";
import MapDisplay from "./MapDisplay";
import MoonLoader from "react-spinners/MoonLoader";

interface LocationData {
  id: number;
  locationName: string;
  address: string;
  latitude: number;
  longitude: number;
  url: string;
}

type Status = "idle" | "loading" | "error" | "success";

const MapComponent: React.FC = () => {
  const [locations, setLocations] = useState<LocationData[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");

  const centerPosition: [number, number] = [62.0, 25.0];

  useEffect(() => {
    setStatus("loading");

    fetch(`https://granlund-demo-ebhxamf7e3c4d4bs.westeurope-01.azurewebsites.net/api/locations`)
      .then((response) => response.json())
      .then((data) => {
        setLocations(data);
        setStatus("success");
      })
      .catch((error) => {
        console.error("Error fetching location data:", error);
        setStatus("error");
      });
  }, []);

  const handleLocationClick = (locationName: string | null) => {
    setSelectedLocation(locationName);
  };

  return (
    <div className="map">
      <LocationList
        locations={locations}
        selectedLocation={selectedLocation}
        onLocationClick={handleLocationClick}
      />

      {status === "loading" ? (
        <div className="map-loader">
          <MoonLoader />
        </div>
      ) : status === "error" ? (
        <div className="map-error">
          <p>Virhe tietojen haussa. Yritä uudelleen myöhemmin.</p>
        </div>
      ) : (
        <MapDisplay
          locations={locations}
          selectedLocation={selectedLocation}
          centerPosition={centerPosition}
        />
      )}
    </div>
  );
};

export default MapComponent;
