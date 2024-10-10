import React, { useCallback, useMemo } from "react";
import LocationList from "../LocationList";
import MapDisplay from "./MapDisplay";
import MoonLoader from "react-spinners/MoonLoader";
import useFetch, { LocationData } from "../../hooks/useFetch";
import "./Map.css";

const MapComponent: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = React.useState<string | null>(
    null,
  );
  const centerPosition: [number, number] = [62.0, 25.0];

  const {
    data: locations,
    status,
    error,
  } = useFetch<LocationData[]>(
    "https://granlund-demo-ebhxamf7e3c4d4bs.westeurope-01.azurewebsites.net/api/locations",
  );

  const handleLocationClick = useCallback((locationName: string | null) => {
    setSelectedLocation(locationName);
  }, []);

  const filteredLocations = useMemo(() => {
    if (selectedLocation === null) return locations ?? [];
    return (
      locations?.filter(
        (location) => location.locationName === selectedLocation,
      ) ?? []
    );
  }, [locations, selectedLocation]);

  return (
    <div className="map">
      <LocationList
        locations={locations ?? []}
        selectedLocation={selectedLocation}
        onLocationClick={handleLocationClick}
      />

      {status === "loading" ? (
        <div className="map-loader">
          <MoonLoader />
        </div>
      ) : status === "error" ? (
        <div className="map-error">
          <p>Virhe tietojen haussa: {error}. Yritä uudelleen myöhemmin.</p>
        </div>
      ) : (
        <MapDisplay
          locations={filteredLocations}
          selectedLocation={selectedLocation}
          centerPosition={centerPosition}
        />
      )}
    </div>
  );
};

export default MapComponent;
