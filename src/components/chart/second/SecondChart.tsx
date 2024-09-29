import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import financialData from '../../../json/financial.json';
import './SecondChart.css';

interface ChartData {
  year: string;
  Liikevaihto: number;
  Liiketulos: number;
  Tilikauden_tulos: number;
}

const SecondChart: React.FC = () => {
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
    <div className="chart-card">

    
        <h1>Liiketulos</h1>
        <p>19,15 M €</p>
        <p>asd</p>
            <ResponsiveContainer className="chart" width="100%" height={400} minWidth={350}>
            <LineChart data={data}>
                <XAxis dataKey="year" />
                <YAxis tickFormatter={formatYAxis} domain={[0, 'dataMax + 5000000']} />
                <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
                <Legend />
                <Line type="monotone" dataKey="Liiketulos" stroke="#82ca9d" activeDot={{ r: 8 }}/>
            </LineChart>
            </ResponsiveContainer>  
    </div>    
  );
};

export default SecondChart;
