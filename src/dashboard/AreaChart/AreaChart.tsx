import { ChartData } from "../../types";
import { formatTooltip, formatYAxis } from "../../helpers/chartHelpers";
import { CHART_HEIGHT, CHART_WIDTH } from "../../lib/constants";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface CustomAreaChartProps {
  data: ChartData[];
}

const CustomAreaChart: React.FC<CustomAreaChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width={CHART_WIDTH} height={CHART_HEIGHT}>
      <AreaChart
        data={data}
        margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis
          domain={[0, 100000000]}
          ticks={[0, 100000000, 200000000, 250000000]}
          tickFormatter={formatYAxis}
        />
        <Tooltip formatter={formatTooltip} />
        <Area
          type="monotone"
          dataKey="Liikevaihto"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="Liiketulos"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
        <Area
          type="monotone"
          dataKey="Tilikauden_tulos"
          stroke="#ffc658"
          fill="#ffc658"
        />
        <Legend
          layout="vertical"
          align="center"
          verticalAlign="bottom"
          iconType="circle"
          wrapperStyle={{ paddingTop: "20px" }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default CustomAreaChart;
