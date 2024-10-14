import React from "react";
import "./dashboardNav.css";
import { TbChartArea, TbChartBar, TbChartLine, TbChartRadar } from "react-icons/tb";

interface DashboardNavProps {
  handleCompanyChange: (value: string) => void;
  handleChartTypeChange: (type: string) => void;
}

const DashboardNav: React.FC<DashboardNavProps> = ({
  handleCompanyChange,
  handleChartTypeChange,
}) => {
  return (
    <nav className="dashboard-nav">
      <div className="select-div">
        <h1 className="text-lg font-bold">Taloustiedot - Dashboard</h1>
        <button onClick={() => handleChartTypeChange("line")}>
          <TbChartLine />
        </button>
        <button onClick={() => handleChartTypeChange("bar")}>
          <TbChartBar />
        </button>
        <button onClick={() => handleChartTypeChange("area")}>
          <TbChartArea />
        </button>
        <button onClick={() => handleChartTypeChange("radar")}>
          <TbChartRadar />
        </button>
        <select onChange={(e) => handleCompanyChange(e.target.value)}>
          <option value="all">Kaikki</option>
          <option value="granlund">Granlund</option>
          <option value="ramboll">Ramboll</option>
          <option value="rejlers">Rejlers</option>
          <option value="sitowice">Sitowice</option>
        </select>
      </div>
    </nav>
  );
};

export default DashboardNav;
