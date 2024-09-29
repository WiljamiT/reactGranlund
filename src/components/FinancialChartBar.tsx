import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import financialData from '../json/financial.json';

interface ChartData {
  year: string;
  Liikevaihto: number;
  Liiketulos: number;
  Tilikauden_tulos: number;
}

const FinancialChartBar: React.FC = () => {
  const [data, setData] = useState<ChartData[]>([]);

  useEffect(() => {
    const { years, Liikevaihto, Liiketulos, Tilikauden_tulos } = financialData.Liiketoiminta;

    const chartData: ChartData[] = years.map((year, index) => ({
      year,
      Liikevaihto: Liikevaihto.amount[index],
      Liiketulos: Liiketulos.amount[index],
      Tilikauden_tulos: Tilikauden_tulos.amount[index],
    }));

    setData(chartData);
  }, []);

  const formatYAxis = (value: number) => {
    return (value / 1000000).toFixed(0) + 'M';
  };

  return (
    <ResponsiveContainer width="50%" height={400}>
      <BarChart data={data}>
        <XAxis dataKey="year" />
        <YAxis tickFormatter={formatYAxis} domain={[0, 'dataMax + 5000000']} />
        <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
        <Legend />
        <Bar dataKey="Liikevaihto" fill="#8884d8" />
        <Bar dataKey="Liiketulos" fill="#82ca9d" />
        <Bar dataKey="Tilikauden_tulos" fill="#ff7300" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default FinancialChartBar;
