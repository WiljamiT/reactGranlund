import React from "react";
import CustomRadarChart from "../RadarChart/RadarChart";

interface RadarChartDisplayProps {
  data: any;
}

const RadarChartDisplay: React.FC<RadarChartDisplayProps> = ({ data }) => {
  return <CustomRadarChart data={data} />;
};

export default RadarChartDisplay;
