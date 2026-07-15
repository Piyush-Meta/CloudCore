import { ArrowRight, CircleCheck } from "lucide-react";
import { Link } from "react-router-dom";

const HostingCard = ({ hosting }) => {
  const Icon = hosting.icon;

  return (
    <Link to={hosting.path}>
      <div className="group h-full rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-3 hover:border-blue-600 hover:shadow-2xl">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 transition group-hover:bg-blue-600">

          <Icon
            size={34}
            className="text-blue-600 transition group-hover:text-white"
          />

        </div>

        <h2 className="mt-8 text-3xl font-bold">
          {hosting.title}
        </h2>

        <p className="mt-5 leading-8 text-gray-600">
          {hosting.description}
        </p>

        <div className="mt-8 space-y-4">

          {hosting.features.map((feature) => (

            <div
              key={feature}
              className="flex items-center gap-3"
            >
              <CircleCheck
                size={18}
                className="text-blue-600"
              />

              <span>{feature}</span>

            </div>

          ))}

        </div>

        <button className="mt-10 flex items-center gap-2 font-semibold text-blue-600 transition-all group-hover:gap-3">

          {hosting.button}

          <ArrowRight size={18} />

        </button>

      </div>
    </Link>
  );
};

export default HostingCard;