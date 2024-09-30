export const updateChartSize = (setChartSize: React.Dispatch<React.SetStateAction<{ width: number; height: number }>>) => {
    const width = window.innerWidth;
    if (width < 1600) {
      setChartSize({ width: 250, height: 250 });
    } else if (width < 900) {
      setChartSize({ width: 400, height: 350 });
    } else {
      setChartSize({ width: 400, height: 400 });
    }
};
  