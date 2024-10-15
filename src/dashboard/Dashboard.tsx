import React from "react";
import ChartDisplay from "./chart/ChartDisplay";
import granlundData from "../../src/data/data-granlund.json";
import rambollData from "../../src/data/data-ramboll.json";
import rejlersData from "../../src/data/data-rejlers.json";
import sitowiceData from "../../src/data/data-sitowice.json";
import "./Dashboard.css";
import DashboardNav from "./dashboardnav/DashboardNav";
import { useDashboardContext } from "../context/DashboardContext";

type ChartType = "line" | "bar" | "area" | "radar";

const companyDataMap: { [key: string]: any } = {
  granlund: granlundData,
  ramboll: rambollData,
  rejlers: rejlersData,
  sitowice: sitowiceData,
};

const Dashboard: React.FC = () => {
  const { selectedCompany, chartType, setSelectedCompany, setChartType } =
    useDashboardContext();

  const validChartType: ChartType = chartType as ChartType;

  const renderCharts = () => {
    const companiesToRender =
      selectedCompany === "all"
        ? Object.values(companyDataMap)
        : [companyDataMap[selectedCompany]];

    return companiesToRender.map((data, index) => (
      <ChartDisplay key={index} companyData={data} chartType={validChartType} />
    ));
  };

  return (
    <div className="dashboard">
      <DashboardNav
        handleCompanyChange={setSelectedCompany}
        handleChartTypeChange={setChartType}
      />
      <div className="chart-container">{renderCharts()}</div>
    </div>
  );
};

export default Dashboard;
