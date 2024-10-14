import React from "react";
import "./ChartDisplay.css";
import CustomAreaChart from "../AreaChart/AreaChart";
import CustomBarChart from "../BarChart/BarChart";
import CustomLineChart from "../LineChart/LineChart";
import CustomRadarChart from "../RadarChart/RadarChart";
import { mapCompanyDataToChartData } from "../../utils/chartDataUtils"; // Adjust path as needed

interface ChartDisplayProps {
  companyData: {
    name: string;
    years: Array<{
      year: string;
      Liikevaihto: { amount: number };
      Muutos: { amount: string };
      Liiketulos: { amount: number };
      Tilikauden_tulos: { amount: number };
      Käyttökate: { amount: string };
      Liikevoitto: { amount: string };
    }>;
  };
  chartType: string;
}

const ChartDisplay: React.FC<ChartDisplayProps> = ({
  companyData,
  chartType,
}) => {
  const data = mapCompanyDataToChartData(companyData);

  return (
    <div className="my-4">
      <h3>{companyData.name} Taloustiedot</h3>

      {chartType === "line" ? (
        <div className="chart-div">
          <CustomLineChart data={data} />
        </div>
      ) : chartType === "bar" ? (
        <div className="chart-div">
          <CustomBarChart data={data} />
        </div>
      ) : chartType === "area" ? (
        <div className="chart-div">
          <CustomAreaChart data={data} />
        </div>
      ) : chartType === "radar" ? (
        <div className="chart-div">
          <CustomRadarChart data={data} />
        </div>
      ) : (
        <p>No chart type selected.</p>
      )}
    </div>
  );
};

export default ChartDisplay;
