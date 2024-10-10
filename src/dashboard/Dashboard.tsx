import React, { useState } from "react";
import ChartDisplay from "./chart/ChartDisplay";
import granlundData from "../../src/data/data-granlund.json";
import rambollData from "../../src/data/data-ramboll.json";
import rejlersData from "../../src/data/data-rejlers.json";
import sitowiceData from "../../src/data/data-sitowice.json";
import "./Dashboard.css";
import DashboardNav from "./dashboardnav/DashboardNav";

const Dashboard: React.FC = () => {
  const [selectedCompany, setSelectedCompany] = useState<string>("all");
  const [chartType, setChartType] = useState<string>("line");

  const handleCompanyChange = (value: string) => {
    setSelectedCompany(value);
  };

  const handleChartTypeChange = (type: string) => {
    setChartType(type);
  };

  return (
    <div className="dashboard">
      <DashboardNav
        handleCompanyChange={handleCompanyChange}
        handleChartTypeChange={handleChartTypeChange}
      />
      <div className="chart-container">
        {selectedCompany === "all" && (
          <>
            <ChartDisplay companyData={granlundData} chartType={chartType} />
            <ChartDisplay companyData={rambollData} chartType={chartType} />
            <ChartDisplay companyData={rejlersData} chartType={chartType} />
            <ChartDisplay companyData={sitowiceData} chartType={chartType} />
          </>
        )}
        {selectedCompany === "granlund" && (
          <ChartDisplay companyData={granlundData} chartType={chartType} />
        )}
        {selectedCompany === "ramboll" && (
          <ChartDisplay companyData={rambollData} chartType={chartType} />
        )}
        {selectedCompany === "rejlers" && (
          <ChartDisplay companyData={rejlersData} chartType={chartType} />
        )}
        {selectedCompany === "sitowice" && (
          <ChartDisplay companyData={sitowiceData} chartType={chartType} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
