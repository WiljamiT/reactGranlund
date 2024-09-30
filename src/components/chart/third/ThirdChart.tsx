import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import financialData from '../../../json/financial.json';
import './ThirdChart.css';

interface ChartData {
  year: string;
  Liikevaihto: number;
  Liiketulos: number;
  Tilikauden_tulos: number;
}

const ThirdChart: React.FC = () => {
  const [data, setData] = useState<ChartData[]>([]);
  const [chartSize, setChartSize] = useState({ width: 350, height: 400 });

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

  // Update chart size on window resize
  useEffect(() => {
    const updateChartSize = () => {
      const width = window.innerWidth;
      if (width < 1600) {
        setChartSize({ width: 250, height: 250 }); // smaller size for small screens
      } else if (width < 900) {
        setChartSize({ width: 400, height: 350 }); // medium size for tablets
      } else {
        setChartSize({ width: 500, height: 400 }); // default size for larger screens
      }
    };

    updateChartSize(); // set initial size

    // Add event listener to handle window resize
    window.addEventListener('resize', updateChartSize);

    return () => {
      // Cleanup event listener
      window.removeEventListener('resize', updateChartSize);
    };
  }, []);

  return (
    <div className="chart-card">
      <h1>Tilikauden tulos</h1>
      <p>19,24 M €</p>
      <p>+ 162,99 %</p>
      <ResponsiveContainer
        className="chart"
        width={chartSize.width}
        height={chartSize.height}
        minWidth={200}
      >
        <LineChart data={data}>
          <XAxis dataKey="year" />
          <YAxis tickFormatter={formatYAxis} domain={[0, 'dataMax + 5000000']} />
          <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
          <Legend />
          <Line
            type="monotone"
            dataKey="Tilikauden_tulos"
            stroke="#ff7300"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ThirdChart;
