import './App.css';
import Nav from './components/navigation/Nav';

import 'leaflet/dist/leaflet.css';
import Map from './components/Map';
// import { IconCloudDemo } from './components/Icon';
// import ShinyButton from './components/magicui/shiny-button';
// import LocationsDisplay from './components/LocationsDisplay';
// import FinancialChart from './components/FinancialChart';
// import FinancialChartBar from './components/FinancialChartBar';
import InfoGrid from './components/grid/InfoGrid';
import FirstChart from './components/chart/first/FirstChart';
import SecondChart from './components/chart/second/SecondChart';
import ThirdChart from './components/chart/third/ThirdChart';


function App() {
  return (
    <div className="App">
      <Nav />
      <InfoGrid />
    {/* <ShinyButton>Button</ShinyButton> */}
      <Map />
      {/* <IconCloudDemo /> */}
      {/* <LocationsDisplay /> */}
      {/* <FinancialChart />
      <FinancialChartBar /> */}
      <div className="chart-container-box">
      <FirstChart />
      <SecondChart />
      <ThirdChart />
      </div>
      
    </div>
  );
}

export default App;
