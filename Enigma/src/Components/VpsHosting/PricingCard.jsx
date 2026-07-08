const PricingCard = ({ plan, yearly }) => {
  const price = yearly ? plan.yearlyPrice : plan.monthlyPrice;

  return (
    <div
      className={`relative rounded-2xl border bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
        plan.popular
          ? "border-blue-600 shadow-lg"
          : "border-gray-200"
      }`}
    >
      {plan.popular && (
        <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-4 py-1 text-xs font-bold text-white">
          MOST POPULAR
        </span>
      )}

      <h3 className="text-4xl font-bold text-gray-900">
        {plan.title}
      </h3>

      <p className="mt-2 text-gray-500">
        {plan.subtitle}
      </p>

      <div className="mt-8 flex items-end">
        <span className="text-6xl font-bold">
          ${price}
        </span>

        <span className="mb-2 ml-1 text-xl text-gray-500">
          /mo
        </span>
      </div>

      <ul className="mt-10 space-y-5">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-3"
          >
            <div className="flex h-5 w-5 items-center justify-center rounded-full border border-blue-600">
              ✓
            </div>

            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`mt-10 w-full rounded-lg py-4 font-semibold transition ${
          plan.popular
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
        }`}
      >
        {plan.button}
      </button>
    </div>
  );
};

export default PricingCard;