const BillingToggle = ({ yearly, setYearly }) => {
  return (
    <div className="flex justify-center mb-14">
      <div className="bg-white rounded-full shadow-md border p-1 flex items-center">

        <button
          onClick={() => setYearly(false)}
          className={`px-6 py-2 rounded-full transition ${
            !yearly
              ? "bg-blue-600 text-white"
              : "text-gray-600"
          }`}
        >
          Monthly
        </button>

        <button
          onClick={() => setYearly(true)}
          className={`px-6 py-2 rounded-full transition ${
            yearly
              ? "bg-blue-600 text-white"
              : "text-gray-600"
          }`}
        >
          Yearly
        </button>

        <span className="ml-3 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
          Save 25%
        </span>

      </div>
    </div>
  );
};

export default BillingToggle;