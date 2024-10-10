import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface CustomBarChartProps {
  data: Array<{
    year: string;
    Liikevaihto: number;
    Liiketulos: number;
    Tilikauden_tulos: number;
  }>;
}

const CustomBarChart: React.FC<CustomBarChartProps> = ({ data }) => {
  const formatYAxis = (tickItem: number) => {
    if (tickItem === 0) return "0";
    return `${tickItem / 1000000}m €`;
  };

  const formatTooltip = (value: number) => {
    return [`${(value / 1000000).toFixed(2)}M €`, ""];
  };

  return (
    <ResponsiveContainer width={400} height={400}>
      <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis
          domain={[0, 100000000]}
          ticks={[0, 100000000, 200000000, 250000000]}
          tickFormatter={formatYAxis}
        />
        <Tooltip formatter={formatTooltip} />
        <Bar dataKey="Liikevaihto" fill="#8884d8" />
        <Bar dataKey="Liiketulos" fill="#82ca9d" />
        <Bar dataKey="Tilikauden_tulos" fill="#ffc658" />
        <Legend
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{ paddingTop: "20px" }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomBarChart;
