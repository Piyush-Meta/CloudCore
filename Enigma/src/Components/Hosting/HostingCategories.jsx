import HostingCard from "./HostingCard";
import { hostingPlans } from "./HostingData";

const HostingCategories = () => {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            CHOOSE YOUR HOSTING
          </span>

          <h2 className="mt-6 text-5xl font-bold text-gray-900">
            Find The Perfect Hosting Solution
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Whether you're launching your first application or running
            enterprise workloads, CloudCore Pro provides hosting
            solutions tailored to your performance, scalability, and
            security needs.
          </p>

        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          {hostingPlans.map((hosting) => (

            <HostingCard
              key={hosting.id}
              hosting={hosting}
            />

          ))}

        </div>

      </div>

    </section>
  );
};

export default HostingCategories;