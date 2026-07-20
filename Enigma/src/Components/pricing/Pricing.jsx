import { useState } from "react";
import { pricingPlans } from "./PricingData";
import PricingCard from "./PricingCard";
import PricingToggle from "./PricingToggle";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <section className="bg-[#F8FAFF] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center">
          <h2 className="text-5xl font-bold text-gray-900">
            High-Performance VPS Hosting
          </h2>

          <div className="mt-8">
            <PricingToggle
              billingCycle={billingCycle}
              setBillingCycle={setBillingCycle}
            />
          </div>
        </div>

<div className="mt-16 grid grid-cols-1 gap-12 overflow-visible md:grid-cols-2 lg:grid-cols-4">          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              billingCycle={billingCycle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;