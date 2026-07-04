import ServerRow from "./ServerRow";
import { serverPlans } from "./ServerData";

const DedicatedServers = () => {
  return (
    <section className="bg-[#F8FAFF] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-14 text-center text-5xl font-bold text-gray-900">
          Bare Metal Dedicated Servers
        </h2>

        <div className="space-y-6">
          {serverPlans.map((plan) => (
            <ServerRow
              key={plan.id}
              plan={plan}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DedicatedServers;