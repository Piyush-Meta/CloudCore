const ComparisonRow = ({ row, even }) => {
  return (
    <div
      className={`grid grid-cols-5 border-b border-gray-400 ${
        even ? "bg-white" : "bg-blue-50 border-b border-gray-400"
      }`}
    >
      <div className="p-5 font-medium text-gray-700">
        {row.feature}
      </div>

      <div className="p-5">
        {row.starter}
      </div>

      <div className="p-5 bg-blue-100 font-medium">
        {row.professional}
      </div>

      <div className="p-5">
        {row.business}
      </div>

      <div className="p-5">
        {row.enterprise}
      </div>
    </div>
  );
};

export default ComparisonRow;