import React from "react";
import CustomLineChart from "../LineChart/LineChart";
import CustomBarChart from "../BarChart/BarChart";
import CustomAreaChart from "../AreaChart/AreaChart";
import CustomRadarChart from "../RadarChart/RadarChart";
import { ChartTypeError } from "../../utils/errors"; 

interface GenericChartProps {
  chartType: string;
  data: any; 
}

const GenericChart: React.FC<GenericChartProps> = ({ chartType, data }) => {
  let ChartComponent;

  switch (chartType.toLowerCase()) {
    case "line":
      ChartComponent = CustomLineChart;
      break;
    case "bar":
      ChartComponent = CustomBarChart;
      break;
    case "area":
      ChartComponent = CustomAreaChart;
      break;
    case "radar":
      ChartComponent = CustomRadarChart;
      break;
    default:
      throw new ChartTypeError(`Invalid chart type: '${chartType}'. Valid types are 'line', 'bar', 'area', or 'radar'.`);
  }

  if (!data || data.length === 0) {
    return <p>Error: No data available to render the chart.</p>;
  }

  return <ChartComponent data={data} />;
};

export default GenericChart;
