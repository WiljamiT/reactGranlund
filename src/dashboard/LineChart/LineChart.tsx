import { CHART_HEIGHT, CHART_WIDTH } from "../../lib/constants";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
interface ChartData {
  year: string;
  Liikevaihto: number;
  Liiketulos: number;
  Tilikauden_tulos: number;
}

interface CustomLineChartProps {
  data: ChartData[];
}

const CustomLineChart: React.FC<CustomLineChartProps> = ({ data }) => {
  const formatYAxis = (tickItem: number) => {
    if (tickItem === 0) return "0";
    return `${tickItem / 1000000}m €`;
  };

  const formatTooltip = (value: number) => {
    return [`${(value / 1000000).toFixed(2)}M €`, ""];
  };

  return (
    <>
      <ResponsiveContainer width={CHART_WIDTH} height={CHART_HEIGHT}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 20, left: 10, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis
            domain={[0, 100000000]}
            ticks={[0, 100000000, 200000000, 250000000]}
            tickFormatter={formatYAxis}
          />
          <Tooltip formatter={formatTooltip} />
          <Line type="monotone" dataKey="Liikevaihto" stroke="#8884d8" />
          <Line type="monotone" dataKey="Liiketulos" stroke="#82ca9d" />
          <Line type="monotone" dataKey="Tilikauden_tulos" stroke="#ffc658" />
          <Legend
            layout={window.innerWidth < 400 ? "vertical" : "horizontal"}
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{ paddingTop: "20px" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default CustomLineChart;
