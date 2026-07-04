import { CircleCheck } from "lucide-react";
const PricingCard = ({ plan, billingCycle }) => {
  const price =
    billingCycle === "monthly"
      ? plan.monthlyPrice
      : Math.round(plan.monthlyPrice * 12 * 0.8);

  return (
    <div
      className={`relative rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
        plan.badge
          ? "border-blue-600 shadow-lg"
          : "border-gray-200"
      }`}
    >
      {plan.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold text-white">
          {plan.badge}
        </span>
      )}

      <h4 className="text-blue-600 font-bold tracking-wide">
        {plan.name}
      </h4>

      <div className="mt-5 flex items-end gap-1">
        <span className="text-5xl font-bold">${price}</span>
        <span className="mb-1 text-gray-500">
          /{billingCycle === "monthly" ? "mo" : "yr"}
        </span>
      </div>

      <div className="mt-8 space-y-4">

        {plan.features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-3"
          >
            <CircleCheck
              size={18}
              className="text-blue-600"
            />

            <span>{feature}</span>
          </div>
        ))}

      </div>

      <button
        className={`mt-10 w-full rounded-lg border py-3 font-semibold transition-all ${
          plan.badge
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
        }`}
      >
        Choose Plan
      </button>

    </div>
  );
};

export default PricingCard;