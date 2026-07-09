import { useState } from "react";
import BillingToggle from "./BillingToggle";
import PricingCard from "./PricingCard";
import { pricingPlans } from "./vpspriceData";

const Pricing = () => {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="bg-[#F8FAFF] py-24">
      <div className="mx-auto max-w-7xl px-6 ">

        <BillingToggle
          yearly={yearly}
          setYearly={setYearly}
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4 mt-12">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              yearly={yearly}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;