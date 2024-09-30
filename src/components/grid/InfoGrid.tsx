import './InfoGrid.css';
import { FiGlobe } from "react-icons/fi";

const InfoGrid = () => {
  const infoData = [
    { svg: <FiGlobe />, title: 'Global', value: 'Worldwide Presence' },
    { svg: <FiGlobe />, title: 'Office Locations', value: '20+ Locations' },
    { svg: <FiGlobe />, title: 'Real Estate', value: '$1B Portfolio' },
    { svg: <FiGlobe />, title: 'Founded', value: '2001' },
    { svg: <FiGlobe />, title: 'Age', value: '23 Years' },
    { svg: <FiGlobe />, title: 'Headcount', value: '500 Employees' },
  ];

  const infoDataLocations = [
    { title: 'Uusimaa', value: '4' },
    { title: 'Päijät-Häme', value: '2' },
    { title: 'Kanta-Häme', value: '2' },
    { title: 'Pirkanmaa', value: '3' },
    { title: 'Keski-Suomi', value: '1' },
    { title: 'Pohjois-Savo', value: '3' },
    { title: 'Kainuu', value: '1' },
    { title: 'Pohjois-Karjala', value: '1' },
    { title: 'Etelä-Karjala', value: '2' },
    { title: 'Pohjanmaa', value: '3' },
    { title: 'Lapin maakunta', value: '2' },
    { title: 'Etelä-Savo', value: '2' },
    { title: 'Etelä-Pohjanmaa', value: '2' },
    { title: 'Uusimaa', value: '2' },
  ];

  return (
    <div className="infos-container">
    
<div className="info-grid-container">
<h1>Corporate Dashboard</h1>
    <div className="info-grid">
      {infoData.map((info, index) => (
        <div className="card" key={index}>
          <svg>{info.svg}</svg>
          <h3>{info.title}</h3>
          <p>{info.value}</p>
        </div>
      ))}
    </div>

    <div className="info-grid-container">
      <h2>Offices</h2>
        <div className="info-grid ">
        {infoDataLocations.map((info, index) => (
            <div className="card" key={index}>
            <h3>{info.title}</h3>
            <p>{info.value}</p>
            </div>
        ))}
        </div>
    </div>
</div>
</div>
  );
};

export default InfoGrid;
