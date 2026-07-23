import StatsCard from "./StatsCard";

const stats = [
  {
    id: 1,
    value: "99.99%",
    title: "Network Uptime",
  },
  {
    id: 2,
    value: "24/7",
    title: "Expert Support",
  },
  {
    id: 3,
    value: "10+",
    title: "Data Centers",
  },
  {
    id: 4,
    value: "1,000+",
    title: "Active Customers",
  },
];

const Stat = () => {
  return (
    <section className="border-t border-gray-200 bg-blue-900 py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-4">
        {stats.map((stat, index) => (
          <StatsCard
            key={stat.id}
            stat={stat}
            isLast={index === stats.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Stat;