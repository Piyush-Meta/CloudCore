const Spec = ({ title, value, dark }) => {
  return (
    <div className="w-44 shrink-0">
      <p
        className={`text-xs font-semibold uppercase tracking-wider ${
          dark ? "text-gray-400" : "text-gray-500"
        }`}
      >
        {title}
      </p>

      <p className="mt-1 text-base font-semibold leading-6">
        {value}
      </p>
    </div>
  );
};

const ServerRow = ({ plan }) => {
  return (
    <div
      className={`rounded-2xl border px-8 py-8 transition-all duration-300 hover:shadow-xl ${
        plan.featured
          ? "bg-[#0F1E38] border-[#0F1E38] text-white"
          : "bg-white border-gray-200 text-gray-900"
      }`}
    >
      <div className="flex items-center">

        {/* LEFT */}

        <div className="w-64 shrink-0">
          <h3 className="text-3xl font-bold">
            {plan.name}
          </h3>

          <p
            className={`mt-2 leading-6 ${
              plan.featured
                ? "text-gray-300"
                : "text-gray-600"
            }`}
          >
            {plan.description}
          </p>
        </div>

        {/* CENTER */}

        <div className="grid flex-1 grid-cols-4 gap-8">

          <Spec
            title="CPU"
            value={plan.cpu}
            dark={plan.featured}
          />

          <Spec
            title="RAM"
            value={plan.ram}
            dark={plan.featured}
          />

          <Spec
            title="STORAGE"
            value={plan.storage}
            dark={plan.featured}
          />

          <Spec
            title="NETWORK"
            value={plan.network}
            dark={plan.featured}
          />

        </div>

 {/* Right */}
  <div className="shrink-0 text-right">
    <h2 className="text-5xl font-bold">
      ${plan.price}
      <span className="text-2xl font-medium">/mo</span>
    </h2>

    <button className="mt-4 rounded-lg bg-blue-600 px-8 py-3 text-white font-semibold hover:bg-blue-700">
      Deploy Server
    </button>
  </div>
      </div>
    </div>
  );
};

export default ServerRow;