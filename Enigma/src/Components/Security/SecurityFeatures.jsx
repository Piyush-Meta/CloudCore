import SecurityCard from "./SecurityCard";
import { securityFeatures } from "./SecurityData";

const SecurityFeatures = () => {
  return (
    <section className="bg-[#F8FAFF] py-24">

      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            ENTERPRISE FEATURES
          </span>

          <h2 className="mt-6 text-5xl font-bold text-gray-900">
            Everything You Need To Stay Protected
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Our security platform combines multiple layers of intelligent
            protection to safeguard your websites, applications, servers,
            and customer data against modern cyber threats.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {securityFeatures.map((feature) => (

            <SecurityCard
              key={feature.id}
              feature={feature}
            />

          ))}

        </div>

      </div>

    </section>
  );
};

export default SecurityFeatures;