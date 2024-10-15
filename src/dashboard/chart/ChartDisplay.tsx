import React from "react";
import "./ChartDisplay.css";
import ChartRenderer from "./ChartRenderer";
import { mapCompanyDataToChartData } from "../../utils/chartDataUtils"; 
import { CompanyDataError, ChartTypeError } from "../../utils/errors"; 
import useErrorHandler from "../../hooks/useErrorHandler";

type ChartType = "line" | "bar" | "area" | "radar";

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
  chartType: ChartType; 
}

const validateCompanyData = (data: ChartDisplayProps["companyData"]) => {
  if (!data || !data.years || !Array.isArray(data.years)) {
    throw new CompanyDataError("Invalid company data structure: 'years' array is required.");
  }
};

const mapChartData = (data: ChartDisplayProps["companyData"]) => {
  const chartData = mapCompanyDataToChartData(data);
  if (!chartData || chartData.length === 0) {
    throw new CompanyDataError("No valid data available for chart rendering.");
  }
  return chartData;
};

const validateChartType = (type: string) => {
  if (!type) {
    throw new ChartTypeError("Chart type is required.");
  } else if (!["line", "bar", "area", "radar"].includes(type)) {
    throw new ChartTypeError(`Invalid chart type: ${type}.`);
  }
};

const ChartDisplay: React.FC<ChartDisplayProps> = ({ companyData, chartType }) => {
  const { error, handleError } = useErrorHandler();

  let data;
  try {
    validateCompanyData(companyData);
    data = mapChartData(companyData); 
    validateChartType(chartType);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
    handleError(errorMessage);
    return <p>Error: {errorMessage}</p>;
  }

  return (
    <div className="my-4">
      <h3>{companyData.name} Taloustiedot</h3>

      <div className="chart-div">
        <ChartRenderer chartType={chartType} data={data} />
      </div>
    </div>
  );
};

export default ChartDisplay;
