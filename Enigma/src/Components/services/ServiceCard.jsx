import { ArrowRight } from "lucide-react";

const ServiceCard = ({ service }) => {
  const Icon = service.icon;

  return (
    <div
      className={`relative rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
        service.dark
          ? "bg-[#0F1E38] border-[#0F1E38] text-white"
          : "bg-white border-gray-200 text-gray-900"
      }`}
    >
      {service.badge && (
        <span className="absolute right-5 top-5 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
          {service.badge}
        </span>
      )}

      <Icon
        size={30}
        className={service.dark ? "text-white" : "text-blue-600"}
      />

      <h3 className="mt-8 text-3xl font-bold">
        {service.title}
      </h3>

      <p
        className={`mt-4 leading-7 ${
          service.dark ? "text-gray-300" : "text-gray-600"
        }`}
      >
        {service.description}
      </p>

      <button
        className={`mt-8 flex items-center gap-2 font-semibold ${
          service.dark ? "text-white" : "text-blue-600"
        }`}
      >
        {service.button}

        <ArrowRight size={18} />
      </button>
    </div>
  );
};

export default ServiceCard;