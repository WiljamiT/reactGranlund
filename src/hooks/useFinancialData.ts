import { useEffect, useState } from 'react';
import financialData from '../json/financial.json';

interface ChartData {
  year: string;
  Liikevaihto: number;
  Liiketulos: number;
  Tilikauden_tulos: number;
}

const useFinancialData = () => {
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

  return data;
};

export default useFinancialData;
