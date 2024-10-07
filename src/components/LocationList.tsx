import React from "react";

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
  return (
    <div className="table-container">
      <h1>Sijainnit: {locations.length}</h1>
      <p>
        <i>
          Klikkaa nimeä nähdäksesi sijainti kartalla. Lisätietoja toimistosta
          saat klikkaamalla merkkiä.
        </i>
      </p>
      <br />
      <ul>
        <li onClick={() => onLocationClick(null)}>
          <i>Kaikki</i>
        </li>
        {locations.map((locationData) => (
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
