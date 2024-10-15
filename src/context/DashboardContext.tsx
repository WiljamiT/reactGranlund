import React, { createContext, useContext, useState, ReactNode } from "react";

interface DashboardContextProps {
  selectedCompany: string;
  chartType: string;
  setSelectedCompany: (value: string) => void;
  setChartType: (value: string) => void;
}

const DashboardContext = createContext<DashboardContextProps | undefined>(
  undefined,
);

interface DashboardProviderProps {
  children: ReactNode;
}

export const DashboardProvider: React.FC<DashboardProviderProps> = ({
  children,
}) => {
  const [selectedCompany, setSelectedCompany] = useState<string>("all");
  const [chartType, setChartType] = useState<string>("line");

  return (
    <DashboardContext.Provider
      value={{ selectedCompany, chartType, setSelectedCompany, setChartType }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error(
      "useDashboardContext must be used within a DashboardProvider",
    );
  }
  return context;
};
