import { updateChartSize } from '../../helpers/chartHelpers';
import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ChartData {
  year: string;
  Liikevaihto: number;
  Liiketulos: number;
  Tilikauden_tulos: number;
}

interface ChartProps {
  data: ChartData[];
  dataKey: string;
  title: string;
  value: string;
  percentageChange: string;
  lineColor: string;
  yAxisDomain?: [number, number | string];
}

const Chart: React.FC<ChartProps> = ({ data, dataKey, title, value, percentageChange, lineColor, yAxisDomain = [0, 'dataMax + 5000000'] }) => {
  const [chartSize, setChartSize] = useState({ width: 350, height: 400 });

  const formatYAxis = (value: number) => (value / 1000000).toFixed(0) + 'M';

  useEffect(() => {
    const handleResize = () => updateChartSize(setChartSize);

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="chart-card">
      <h1>{title}</h1>
      <p>{value}</p>
      <p>{percentageChange}</p>

      <ResponsiveContainer width={chartSize.width} height={chartSize.height} minWidth={200}>
        <LineChart data={data}>
          <XAxis dataKey="year" />
          <YAxis tickFormatter={formatYAxis} domain={yAxisDomain} />
          <Tooltip formatter={(value: number) => `€ ${value.toLocaleString()}`} />
          <Legend />
          <Line type="monotone" dataKey={dataKey} stroke={lineColor} activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
