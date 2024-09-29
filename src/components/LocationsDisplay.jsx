import MapComponent from "./Map"
import locationData from '../json/locations.json';

const LocationsDisplay = () => {
  return (
    <div className="locations-container">
        <div className="locations">
            <h2>Toimipisteet: {locationData.length}</h2>
            <p>Kaikki</p>
            <p>Helsinki</p>
            <p>Kuopio</p>
        </div>
        
        
        <div className="map">
            <MapComponent />
        </div>
    </div>
  )
}

export default LocationsDisplay