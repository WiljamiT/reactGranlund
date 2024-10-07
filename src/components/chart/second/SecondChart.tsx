import Chart from "../Chart";
import "./SecondChart.css";
import useFinancialData from "../../../hooks/useFinancialData";

const SecondChart: React.FC = () => {
  const data = useFinancialData();

  return (
    <Chart
      data={data}
      dataKey="Liiketulos"
      title="Liiketulos"
      value="19,15 M €"
      percentageChange="+ 15,47 %"
      lineColor="#82ca9d"
    />
  );
};

export default SecondChart;
