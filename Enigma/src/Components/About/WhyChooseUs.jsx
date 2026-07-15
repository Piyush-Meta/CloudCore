import {
  ShieldCheck,
  Clock3,
  Headphones,
  Server,
} from "lucide-react";

const features = [
  {
    title: "Enterprise Security",
    icon: ShieldCheck,
  },
  {
    title: "99.99% Uptime",
    icon: Clock3,
  },
  {
    title: "24/7 Support",
    icon: Headphones,
  },
  {
    title: "High Performance Servers",
    icon: Server,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#F8FAFF] py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Why Choose CloudCore?
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Everything we build focuses on performance, reliability,
            security and customer satisfaction.
          </p>
        </div>
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="rounded-2xl bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Icon
                    size={30}
                    className="text-blue-600"
                  />
                </div>
                <h3 className="mt-6 text-xl font-bold">
                  {feature.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;