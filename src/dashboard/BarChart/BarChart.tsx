import { ChartData } from "../../types";
import { formatTooltip, formatYAxis } from "../../helpers/chartHelpers";
import { CHART_HEIGHT, CHART_WIDTH } from "../../lib/constants";
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
  data: ChartData[];
}

const CustomBarChart: React.FC<CustomBarChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width={CHART_WIDTH} height={CHART_HEIGHT}>
      <BarChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
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
            layout="vertical"
            align="center"
            verticalAlign="bottom"
            iconType="circle"
            wrapperStyle={{ paddingTop: "20px" }}
          />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomBarChart;
