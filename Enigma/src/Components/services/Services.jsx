import ServiceCard from "./ServiceCard";
import { services } from "./ServicesData";

const Services = () => {
  return (
    <section className="bg-[#F8FAFF] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <h2 className="text-5xl font-bold text-gray-900">
            Everything You Need to Build and Scale Online
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
            From personal projects to enterprise infrastructure,
            CloudCore Pro provides the technical foundation
            for your digital future.
          </p>

        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;