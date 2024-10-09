import "./dashboardNav.css";

const DashboardNav: React.FC<{ companies: string[]; onSelect: (company: string) => void }> = ({ companies, onSelect }) => {
  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <h1 className="text-lg font-bold">Company Dashboard</h1>
      <select className="bg-gray-700 text-white" onChange={(e) => onSelect(e.target.value)}>
        {companies.map((company, index) => (
          <option key={index} value={company}>
            {company}
          </option>
        ))}
      </select>
    </nav>
  );
};

export default DashboardNav