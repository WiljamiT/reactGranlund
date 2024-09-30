import './InfoGrid.css';
import { FiGlobe } from "react-icons/fi";
import infoData from '../../json/infoData.json';

const InfoGrid = () => {
  return (
    <div className="infos-container">
      <div className="info-grid-container">
        <h1>{infoData.headers.company}</h1>
        <div className="info-grid">
          {infoData.companyInfo.map((info, index) => (
            <div className="card" key={index}>
              <svg><FiGlobe /></svg>
              <h3>{info.title}</h3>
              <p>{info.value}</p>
            </div>
          ))}
        </div>

        <div className="info-grid-container">
          <h2>{infoData.headers.office}</h2>
          <div className="info-grid">
            {infoData.locations.map((info, index) => (
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