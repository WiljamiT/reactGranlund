import React from "react";
import CustomLineChart from "../LineChart/LineChart";

interface LineChartDisplayProps {
  data: any; 
}

const LineChartDisplay: React.FC<LineChartDisplayProps> = ({ data }) => {
  return <CustomLineChart data={data} />;
};

export default LineChartDisplay;
