import { ChartData } from "../../types";
import { formatTooltip } from "../../helpers/chartHelpers";
import { CHART_HEIGHT, CHART_WIDTH } from "../../lib/constants";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface CustomRadarChartProps {
  data: ChartData[];
}

const CustomRadarChart: React.FC<CustomRadarChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width={CHART_WIDTH} height={CHART_HEIGHT}>
      <RadarChart cx="50%" cy="45%" outerRadius="75%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="year" />
        <Radar
          name="Liikevaihto"
          dataKey="Liikevaihto"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Radar
          name="Liiketulos"
          dataKey="Liiketulos"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.6}
        />
        <Radar
          name="Tilikauden_tulos"
          dataKey="Tilikauden_tulos"
          stroke="#ffc658"
          fill="#ffc658"
          fillOpacity={0.6}
        />
        <Tooltip formatter={formatTooltip} />
        <Legend
            layout="vertical"
            align="center"
            verticalAlign="bottom"
            iconType="circle"
            wrapperStyle={{ paddingTop: "20px" }}
          />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default CustomRadarChart;
