import "./App.css";
import Nav from "./components/navigation/Nav";

import "leaflet/dist/leaflet.css";
import Map from "./components/map/Map";
import InfoGrid from "./components/grid/InfoGrid";
import { IconCloudDemo } from "./components/Icon";
import Footer from "./components/footer/Footer";
import Dashboard from "./dashboard/Dashboard";
import { DashboardProvider } from "./context/DashboardContext";
import Chat from "./components/chat/Chat";

function App() {
  return (
    <DashboardProvider>
      <div className="App">
        <Nav />
        <InfoGrid />
        <Map />
        <Dashboard />
        <Chat />
        <IconCloudDemo />
        <Footer />
      </div>
    </DashboardProvider>
  );
}

export default App;
