const PricingToggle = ({ billingCycle, setBillingCycle }) => {
  return (
    <div className="flex rounded-full border border-gray-300 p-1">

      <button
        onClick={() => setBillingCycle("monthly")}
        className={`rounded-full px-6 py-2 font-semibold transition-all ${
          billingCycle === "monthly"
            ? "bg-blue-600 text-white"
            : "text-gray-700"
        }`}
      >
        Monthly
      </button>

      <button
        onClick={() => setBillingCycle("yearly")}
        className={`rounded-full px-6 py-2 font-semibold transition-all ${
          billingCycle === "yearly"
            ? "bg-blue-600 text-white"
            : "text-gray-700"
        }`}
      >
        Yearly (-20%)
      </button>

    </div>
  );
};

export default PricingToggle;