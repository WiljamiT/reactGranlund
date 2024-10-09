import React from 'react';

const ChartDisplay: React.FC<{ title: string; data: any }> = ({ title, data }) => {
  return (
    <div className="my-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div>
        <p>Data: {JSON.stringify(data)}</p> 
      </div>
    </div>
  );
};

export default ChartDisplay;