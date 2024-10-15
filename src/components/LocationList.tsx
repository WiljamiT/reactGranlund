import React, { useState } from "react";
import useDebounce from "../hooks/useDebounce"; // Adjust the path as necessary

interface LocationData {
  id: number;
  locationName: string;
}

interface LocationListProps {
  locations: LocationData[];
  selectedLocation: string | null;
  onLocationClick: (locationName: string | null) => void;
}

const LocationList: React.FC<LocationListProps> = ({
  locations,
  selectedLocation,
  onLocationClick,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const debouncedQuery = useDebounce(searchQuery, 300);

  const filteredLocations = locations.filter((location) =>
    location.locationName.toLowerCase().includes(debouncedQuery.toLowerCase()),
  );

  return (
    <div className="table-container">
      <h1>Sijainnit: {filteredLocations.length}</h1>
      <p>
        <i>
          Klikkaa nimeä nähdäksesi sijainti kartalla. Lisätietoja toimistosta
          saat klikkaamalla merkkiä.
        </i>
      </p>
      <div className="search">
        <input
          type="text"
          placeholder="Hae sijaintia..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <ul>
        <li onClick={() => onLocationClick(null)}>
          <i>Kaikki</i>
        </li>
        {filteredLocations.map((locationData) => (
          <li
            key={locationData.id}
            onClick={() => onLocationClick(locationData.locationName)}
          >
            <i>{locationData.locationName}</i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationList;
