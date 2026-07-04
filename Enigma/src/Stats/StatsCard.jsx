const StatsCard = ({ stat, isLast }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center py-6 ${
        !isLast ? "border-r border-gray-200" : ""
      }`}
    >
      <h2 className="text-5xl font-bold text-blue-600">
        {stat.value}
      </h2>

      <p className="mt-2 text-sm font-medium text-gray-600">
        {stat.title}
      </p>
    </div>
  );
};

export default StatsCard;