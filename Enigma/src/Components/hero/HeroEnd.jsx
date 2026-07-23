import React from "react";

const HeroEnd = () => {
  return (
    <section className="relative overflow-hidden bg-blue-900 py-24">

      {/* Background Shapes */}

      <div className="absolute -top-32 -left-40 h-72 w-[700px] rotate-[-35deg] bg-blue-500 opacity-30"></div>

      <div className="absolute bottom-[-140px] right-[-220px] h-80 w-[850px] rotate-[35deg] bg-blue-500 opacity-20"></div>

      <div className="absolute top-16 right-1/3 h-64 w-64 rotate-45 rounded-2xl bg-blue-200 opacity-20"></div>

      <div className="absolute left-1/4 bottom-10 h-56 w-[500px] rotate-[25deg] bg-blue-500 opacity-20"></div>

      {/* Optional Glow */}

      <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 blur-[140px] opacity-20"></div>

      {/* Content */}

      <div className="relative z-10 flex flex-col items-center text-center">

        <h1 className="text-6xl font-bold text-white">
          Ready to Launch?
        </h1>

        <p className="mt-6 max-w-3xl text-xl leading-8 text-blue-100">
          Join thousands of businesses that trust CloudCore Pro
          for their mission-critical infrastructure.
        </p>

        <div className="mt-12 flex gap-6">

          <button className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-900 transition hover:scale-105 hover:bg-gray-100">
            Get Started
          </button>

          <button className="rounded-xl border border-white bg-transparent px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-blue-900">
            Contact Sales
          </button>

        </div>

      </div>

    </section>
  );
};

export default HeroEnd;