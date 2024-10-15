import React from "react";
import CustomAreaChart from "../AreaChart/AreaChart";

interface AreaChartDisplayProps {
  data: any;
}

const AreaChartDisplay: React.FC<AreaChartDisplayProps> = ({ data }) => {
  return <CustomAreaChart data={data} />;
};

export default AreaChartDisplay;
