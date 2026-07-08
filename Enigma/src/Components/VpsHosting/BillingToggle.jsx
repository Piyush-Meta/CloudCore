const BillingToggle = ({ yearly, setYearly }) => {
  return (
    <div className="flex items-center justify-center gap-4">
      {/* Monthly */}

      <span
        className={`font-semibold transition ${
          !yearly ? "text-gray-900" : "text-gray-500"
        }`}
      >
        Monthly
      </span>

      {/* Toggle */}

      <button
        onClick={() => setYearly(!yearly)}
        className={`relative h-7 w-14 rounded-full transition duration-300 ${
          yearly ? "bg-blue-600" : "bg-gray-300"
        }`}
      >
        <span
          className={`absolute top-1 h-5 w-5 rounded-full bg-white transition duration-300 ${
            yearly ? "left-8" : "left-1"
          }`}
        />
      </button>

      {/* Yearly */}

      <div className="flex items-center gap-2">
        <span
          className={`font-semibold transition ${
            yearly ? "text-gray-900" : "text-gray-500"
          }`}
        >
          Yearly
        </span>

        <span className="rounded-full bg-cyan-100 px-2 py-0.5 text-xs font-semibold text-cyan-700">
          SAVE 25%
        </span>
      </div>
    </div>
  );
};

export default BillingToggle;