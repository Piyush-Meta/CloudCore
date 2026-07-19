import comparisonData from "./comparisonData";
import ComparisonRow from "./ComparisonRow";

const ComparisonTable = () => {
  return (
    <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-lg">

      <div className="grid grid-cols-5 bg-gradient-to-r from-slate-100 to-blue-100 font-semibold">

        <div className="p-6">
          Features
        </div>

        <div className="p-6">
          WP Starter
        </div>

        <div className="p-6 bg-blue-200">
          WP Professional
        </div>

        <div className="p-6">
          WP Business
        </div>

        <div className="p-6">
          WP Enterprise
        </div>

      </div>

      {comparisonData.map((row, index) => (
        <ComparisonRow
          key={row.feature}
          row={row}
          even={index % 2 === 0}
        />
      ))}

    </div>
  );
};

export default ComparisonTable;