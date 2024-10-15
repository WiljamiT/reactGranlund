import "./InfoGrid.css";
import infoData from "../../json/infoData.json";
import { IconType } from "react-icons";
import { FiGlobe } from "react-icons/fi";
import { TfiLocationPin } from "react-icons/tfi";
import { TfiMoney } from "react-icons/tfi";
import { FaRegBuilding } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import { MdGroups2 } from "react-icons/md";
import { NumberTickerDemo } from "../Ticker";
import { WordPullUp } from "../magicui/word-pull-up";
import { FadeText } from "../magicui/fade-text";

const iconMap: Record<string, IconType> = {
  FiGlobe: FiGlobe,
  TfiLocationPin: TfiLocationPin,
  TfiMoney: TfiMoney,
  FaRegBuilding: FaRegBuilding,
  FiCalendar: FiCalendar,
  MdGroups2: MdGroups2,
};

const InfoGrid = () => {
  return (
    <div className="infos-container">
      <div className="info-grid-container">
        <h1>
          <WordPullUp words={"Granlund Dashboard Demo"} />
        </h1>
        <div className="info-grid">
          {infoData.companyInfo.map((info, index) => {
            const IconComponent = iconMap[info.svg];
            return (
              <div className="card" key={index}>
                {IconComponent && <IconComponent />}
                <h3>{info.title}</h3>
                <p>
                  <FadeText
                    direction="left"
                    framerProps={{
                      show: { transition: { delay: 0.8 } },
                    }}
                    text={info.value}
                  />
                </p>
              </div>
            );
          })}
        </div>

        <div className="info-grid-container">
          <h2>
            {infoData.headers.office}
            <NumberTickerDemo />
          </h2>
          <div className="info-grid">
            {infoData.locations.map((info, index) => (
              <div className="card" key={index}>
                <h3>{info.title}</h3>
                <p>
                  <FadeText
                    direction="right"
                    framerProps={{
                      show: { transition: { delay: 1.6 } },
                    }}
                    text={info.value}
                  />
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoGrid;
