import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import financialData from "../json/financial.json";

interface ChartData {
  year: string;
  Liikevaihto: number;
  Liiketulos: number;
  Tilikauden_tulos: number;
}

const FinancialChart: React.FC = () => {
  const [data, setData] = useState<ChartData[]>([]);

  useEffect(() => {
    const { years, Liikevaihto, Liiketulos, Tilikauden_tulos } =
      financialData.Liiketoiminta;

    const chartData: ChartData[] = years.map((year, index) => ({
      year,
      Liikevaihto: Liikevaihto.amount[index],
      Liiketulos: Liiketulos.amount[index],
      Tilikauden_tulos: Tilikauden_tulos.amount[index],
    }));

    setData(chartData);
  }, []);

  const formatYAxis = (value: number) => {
    return (value / 1000000).toFixed(0) + "M";
  };

  return (
    <ResponsiveContainer width="50%" height={400}>
      <LineChart data={data}>
        <XAxis dataKey="year" />
        <YAxis tickFormatter={formatYAxis} domain={[0, "dataMax + 5000000"]} />
        <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
        <Legend />
        <Line
          type="monotone"
          dataKey="Liikevaihto"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="Liiketulos" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Tilikauden_tulos" stroke="#ff7300" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default FinancialChart;
