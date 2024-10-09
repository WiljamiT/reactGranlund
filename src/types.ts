export interface Liiketoiminta {
    years: string[];
    Liikevaihto: {
      amount: number[];
      change: string[];
    };
    Liiketulos: {
      amount: number[];
    };
    Tilikauden_tulos: {
      amount: number[];
    };
    Käyttökate: {
      percentage: string[];
    };
    Liikevoitto: {
      percentage: string[];
    };
  }
  
  export interface CompanyData {
    name: string;
    Liiketoiminta: Liiketoiminta;
  }
  
  export interface CompanyDataMapping {
    [key: string]: CompanyData;
  }
  