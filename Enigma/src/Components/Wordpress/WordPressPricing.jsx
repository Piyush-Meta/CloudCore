import { useState } from "react";
import FilterBar from "./FilterBar";
import BillingToggle from "./BillingToggle";
import PricingGrid from "./PricingGrid";

const WordPressPricing = () => {
  const [cpu, setCpu] = useState(2);
  const [ram, setRam] = useState(6);
  const [storage, setStorage] = useState(100);
  const [yearly, setYearly] = useState(false);

  return (
    <section className="py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <FilterBar
          cpu={cpu}
          ram={ram}
          storage={storage}
          setCpu={setCpu}
          setRam={setRam}
          setStorage={setStorage}
        />

        <BillingToggle
          yearly={yearly}
          setYearly={setYearly}
        />

        <PricingGrid
          cpu={cpu}
          ram={ram}
          storage={storage}
          yearly={yearly}
        />

      </div>
    </section>
  );
};

export default WordPressPricing;