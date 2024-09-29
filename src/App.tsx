import './App.css';
import Nav from './components/Nav';

import 'leaflet/dist/leaflet.css';
import Map from './components/Map';
import { IconCloudDemo } from './components/Icon';
import ShinyButton from './components/magicui/shiny-button';
import LocationsDisplay from './components/LocationsDisplay';
import FinancialChart from './components/FinancialChart';
import FinancialChartBar from './components/FinancialChartBar';


function App() {
  return (
    <div className="App">
      <Nav />
      <h1 className="text-3xl font-bold">
      Text!
    </h1>
    <ShinyButton>Button</ShinyButton>
      <Map />
      <IconCloudDemo />
      <LocationsDisplay />
      <FinancialChart />
      <FinancialChartBar />
    </div>
  );
}

export default App;
