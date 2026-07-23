const PricingCard = ({ plan, yearly }) => {
  const price = yearly ? plan.yearlyPrice : plan.monthlyPrice;

  return (
    <div
      className={`relative flex flex-col w-full  rounded-3xl border bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl

      ${
        plan.featured
          ? "border-blue-600 shadow-xl scale-[1.02]"
          : "border-gray-200 hover:border-blue-300"
      }`}
    >
      {plan.featured && (
        <>

          <div className="absolute right-5 top-5 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
            MOST POPULAR
          </div>
        </>
      )}

      <div className="p-8 my-2 flex flex-col h-full">

        <div>
          <h2 className="text-2xl font-bold">
            {plan.name}
          </h2>

          <p className="text-gray-500 mt-2">
            {plan.description}
          </p>
        </div>

        <div className="my-8">

          <span className="text-5xl font-bold">
            ${price}
          </span>

          <span className="text-gray-500">
            /month
          </span>

          <p className="text-sm text-gray-400 mt-2">
            Billed {yearly ? "yearly" : "monthly"}
          </p>

        </div>

     

        <div className="space-y-4 flex-grow">

          {plan.features.map((feature, index) => {

            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center">

                  <Icon
                    size={17}
                    className="text-blue-600"
                  />

                </div>

                <span className="text-gray-700">
                  {feature.text}
                </span>

              </div>
            );
          })}

        </div>

        <button
          className={`mt-8 w-full rounded-xl py-3 font-semibold transition

          ${
            plan.featured
              ? "bg-blue-600 hover:bg-blue-300 hover:text-blue-700 text-white"
              : "bg-white hover:bg-blue-200 hover:text-black text-blue-600 border border-blue-600"
          }`}
        >
          {plan.button}
        </button>

      </div>
    </div>
  );
};

export default PricingCard;