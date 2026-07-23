import pricingData from "./pricingData";
import PricingCard from "./PricingCard";

const PricingGrid = ({ cpu, ram, storage, yearly }) => {
  const filteredPlans = pricingData.filter(
    (plan) =>
      plan.cpu >= cpu &&
      plan.ram >= ram &&
      plan.storage >= storage
  );

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 items-stretch">
      {filteredPlans.map((plan) => (
        <PricingCard
          key={plan.id}
          plan={plan}
          yearly={yearly}
        />
      ))}
    </div>
  );
};

export default PricingGrid;