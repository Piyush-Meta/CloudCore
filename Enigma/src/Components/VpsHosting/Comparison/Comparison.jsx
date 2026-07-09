import ComparisonTable from "./ComparisonTable";
import { comparisonData } from "./ComparisonData";

const Comparison = () => {
  return (
    <section className="bg-[#F8FAFF] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-12 text-center text-5xl font-bold text-gray-900">
          Full Technical Comparison
        </h2>

        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

          <table className="w-full border-collapse">

            <thead>

              <tr className="bg-gray-100">

                <th className="px-6 py-5 text-left font-semibold">
                  Features
                </th>

                <th className="px-6 py-5 text-left font-semibold">
                  Starter
                </th>

                <th className="bg-blue-100 px-6 py-5 text-left font-semibold">
                  Business
                </th>

                <th className="px-6 py-5 text-left font-semibold">
                  Professional
                </th>

                <th className="px-6 py-5 text-left font-semibold">
                  Enterprise
                </th>

              </tr>

            </thead>

            <tbody>

              {comparisonData.map((row) => (
                <ComparisonTable
                  key={row.feature}
                  row={row}
                />
              ))}

            </tbody>

          </table>

        </div>

      </div>
    </section>
  );
};

export default Comparison;