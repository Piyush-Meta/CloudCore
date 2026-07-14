import { ArrowRight } from "lucide-react";

const SecurityCard = ({ feature }) => {
  const Icon = feature.icon;

  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl">

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 transition group-hover:bg-blue-600">
        <Icon
          size={32}
          className="text-blue-600 transition group-hover:text-white"
        />
      </div>

      <h3 className="mt-8 text-2xl font-bold text-gray-900">
        {feature.title}
      </h3>

      <p className="mt-4 leading-7 text-gray-600">
        {feature.description}
      </p>

      <button className="mt-8 flex items-center gap-2 font-semibold text-blue-600 transition hover:gap-3">
        Learn More
        <ArrowRight size={18} />
      </button>

    </div>
  );
};

export default SecurityCard;