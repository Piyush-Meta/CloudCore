import ComparisonTable from "./ComparisonTable";

const TechnicalComparison = () => {
  return (
    <section className="py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Full Technical Comparison
        </h2>

        <p className="text-center text-gray-500 mt-4 mb-14">
          Compare every managed WordPress hosting plan in detail.
        </p>

        <ComparisonTable />

      </div>

    </section>
  );
};

export default TechnicalComparison;