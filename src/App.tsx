import "./App.css";
import Nav from "./components/navigation/Nav";

import "leaflet/dist/leaflet.css";
import Map from "./components/map/Map";
import InfoGrid from "./components/grid/InfoGrid";
import { IconCloudDemo } from "./components/Icon";
import Footer from "./components/footer/Footer";
import Dashboard from "./dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Nav />
      <InfoGrid />
      <Map />
      <Dashboard />
      <IconCloudDemo />
      <Footer />
    </div>
  );
}

export default App;
