import Chart from '../Chart';
import './ThirdChart.css';
import useFinancialData from '../../../hooks/useFinancialData';

const ThirdChart: React.FC = () => {
  const data = useFinancialData();

  return (
    <Chart
      data={data}
      dataKey="Tilikauden_tulos"
      title="Tilikauden tulos"
      value="19,24 M €"
      percentageChange="+ 162,99 %"
      lineColor="#ff7300"
    />
  );
};

export default ThirdChart;
