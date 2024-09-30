import './Nav.css';
import { FaRegBell } from "react-icons/fa6";
import { TbCircleLetterG } from "react-icons/tb";
import { FaCheck } from "react-icons/fa6";
import infoData from '../../json/infoData.json';

interface InfoData {
  headers: {
    nav: string;
  };
}

const navInfo: InfoData = infoData;

const Nav = () => {
  return (
    <nav>
      <div className="nav-secondary-bar">
      
      </div>

    <div className="nav-container">
      <div className="nav-bar">
        <div className="nav-logo">
          <div className="nav-img">
            <TbCircleLetterG 
              aria-label="Logo" />
          </div>
        </div>
        <div className="links">
        <h1>
          {navInfo.headers.nav}
          <FaCheck 
            aria-label="Verified"/>
        </h1>
        <h2>
          <FaRegBell 
            aria-label="Notifications"/>
        </h2>
        
      </div>
      </div>
    </div>  
    </nav>
  )
}

export default Nav