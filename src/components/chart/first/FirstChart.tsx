import Chart from "../Chart";
import "./FirstChart.css";
import useFinancialData from "../../../hooks/useFinancialData";

const FirstChart: React.FC = () => {
  const data = useFinancialData();

  return (
    <Chart
      data={data}
      dataKey="Liikevaihto"
      title="Liikevaihto"
      value="88,92 M €"
      percentageChange="+ 20,38 %"
      lineColor="#8884d8"
    />
  );
};

export default FirstChart;
