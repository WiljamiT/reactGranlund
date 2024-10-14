interface CompanyData {
    name: string;
    years: Array<{
      year: string;
      Liikevaihto: { amount: number };
      Liiketulos: { amount: number };
      Tilikauden_tulos: { amount: number };
      Käyttökate: { amount: string };
      Liikevoitto: { amount: string };
    }>;
  }
  
  export const mapCompanyDataToChartData = (companyData: CompanyData) => {
    return companyData.years.map((yearData) => ({
      year: yearData.year,
      Liikevaihto: yearData.Liikevaihto.amount,
      Liiketulos: yearData.Liiketulos.amount,
      Tilikauden_tulos: yearData.Tilikauden_tulos.amount,
    }));
  };
  