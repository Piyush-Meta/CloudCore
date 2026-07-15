import { Server, ArrowRight } from "lucide-react";

const HostingHero = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-28">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-20 px-8 lg:flex-row">

        {/* Left */}

        <div className="flex-1">

          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            <Server size={18} />
            Cloud Hosting Solutions
          </div>

          <h1 className="mt-8 text-6xl font-bold leading-tight text-gray-900">
            Powerful Hosting Built For Every Business
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600">
            From scalable virtual private servers to enterprise-grade
            dedicated infrastructure, CloudCore Pro delivers secure,
            lightning-fast hosting designed for developers,
            startups, and growing businesses.
          </p>

          <div className="mt-10 flex gap-5">

            <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700">
              Compare Plans
              <ArrowRight size={18} />
            </button>

            <button className="rounded-xl border border-blue-600 px-7 py-4 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white">
              Contact Sales
            </button>

          </div>

        </div>

        {/* Right */}

        <div className="flex flex-1 justify-center">

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-[90px]"></div>

            <div className="relative flex h-96 w-96 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 shadow-2xl">

              <Server
                size={150}
                strokeWidth={1.5}
                className="text-white"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HostingHero;