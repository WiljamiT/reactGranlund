import './App.css';
import Nav from './components/Nav';

import 'leaflet/dist/leaflet.css';
import Map from './components/Map';
import { IconCloudDemo } from './components/Icon';
import ShinyButton from './components/magicui/shiny-button';


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
    </div>
  );
}

export default App;
