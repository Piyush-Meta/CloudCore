const ComparisonTable = ({ row }) => {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50 transition">
      <td className="px-6 py-5 font-medium text-gray-700">
        {row.feature}
      </td>

      <td className="px-6 py-5">
        {row.starter}
      </td>

      <td className="bg-blue-50 px-6 py-5">
        {row.business}
      </td>

      <td className="px-6 py-5">
        {row.professional}
      </td>

      <td className="px-6 py-5">
        {row.enterprise}
      </td>
    </tr>
  );
};

export default ComparisonTable;