import React from "react";
import CustomBarChart from "../BarChart/BarChart";

interface BarChartDisplayProps {
  data: any; 
}

const BarChartDisplay: React.FC<BarChartDisplayProps> = ({ data }) => {
  return <CustomBarChart data={data} />;
};

export default BarChartDisplay;
