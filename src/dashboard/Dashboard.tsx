import React, { useState, useEffect } from 'react';
import DashboardNav from './dashboardnav/DashboardNav';
import ChartDisplay from './chart/ChartDisplay';
import financialData from '../../src/json/financial.json';
import financial2Data from '../../src/json/finnancial_testi.json';
import { CompanyData, CompanyDataMapping } from '../../src/types'; // Import the types

const Dashboard: React.FC = () => {
  const dataMapping: CompanyDataMapping = {
    Granlund: financialData,
    Ramboll: financial2Data,
  };

  const [selectedCompany, setSelectedCompany] = useState<string>('Granlund'); 
  const [companyData, setCompanyData] = useState<CompanyData>(dataMapping[selectedCompany]);

  const companies = Object.keys(dataMapping); 

  useEffect(() => {
    setCompanyData(dataMapping[selectedCompany]);
  }, [selectedCompany]);

  return (
    <div>
      <DashboardNav companies={companies} onSelect={setSelectedCompany} />
      <ChartDisplay title="Liikevaihto" data={companyData.Liiketoiminta.Liikevaihto} />
      <ChartDisplay title="Liiketulos" data={companyData.Liiketoiminta.Liiketulos} />
      <ChartDisplay title="Tilikauden_tulos" data={companyData.Liiketoiminta.Tilikauden_tulos} />
      <ChartDisplay title="Käyttökate" data={companyData.Liiketoiminta.Käyttökate} />
    </div>
  );
};

export default Dashboard;
