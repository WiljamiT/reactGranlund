import React from "react";
import GenericChart from "./GenericChart";

interface ChartRendererProps {
  chartType: string;
  data: any; 
}

const ChartRenderer: React.FC<ChartRendererProps> = ({ chartType, data }) => {
  return <GenericChart chartType={chartType} data={data} />;
};

export default ChartRenderer;
