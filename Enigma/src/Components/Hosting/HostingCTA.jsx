import { ArrowRight, Server } from "lucide-react";
import { Link } from "react-router-dom";

const HostingCTA = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto">

        <div className="relative overflow-hidden  bg-gradient-to-r from-[#0F172A] via-[#1D4ED8] to-[#2563EB]  py-10 shadow-[0_30px_80px_rgba(37,99,235,0.35)]">

          {/* Dot Pattern */}

          <div className="absolute inset-0 opacity-10">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "radial-gradient(circle, white 1.3px, transparent 1.3px)",
                backgroundSize: "28px 28px",
              }}
            />
          </div>

          {/* Glow */}

          <div className="absolute left-[-120px] top-[-80px] h-80 w-80 rounded-full bg-cyan-400/20 blur-[120px]" />

          <div className="absolute right-[-150px] bottom-[-120px] h-96 w-96 rounded-full bg-blue-500/20 blur-[150px]" />

          {/* Geometric Shapes */}

          <div className="absolute -top-40 -left-60 h-72 w-[700px] rotate-[-35deg] bg-white/5" />

          <div className="absolute bottom-[-180px] right-[-220px] h-80 w-[850px] rotate-[35deg] bg-white/5" />

          <div className="absolute top-20 right-1/4 h-56 w-56 rotate-45 rounded-3xl bg-white/5" />

          <div className="absolute bottom-10 left-1/4 h-48 w-[450px] rotate-[25deg] bg-blue-400/10" />

          {/* Content */}

          <div className="relative z-10 flex flex-col items-center text-center">

            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md">

              <Server
                size={44}
                className="text-white"
              />

            </div>

            <h2 className="mt-10 text-5xl font-bold leading-tight text-white md:text-6xl">
              Ready To Launch
              <br />
              Your Next Project?
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
              Whether you're hosting a personal website or deploying
              enterprise-grade applications, CloudCore Pro delivers
              exceptional speed, reliability, and security for every
              stage of your growth.
            </p>

            <div className="mt-14 flex flex-wrap justify-center gap-6">

              <Link to="/vpshosting">

                <button className="group flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

                  Get Started

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                </button>

              </Link>

              <Link to="/dedicatedhosting">

                <button className="rounded-xl border border-white/30 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-blue-700">

                  View Dedicated Servers

                </button>

              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HostingCTA;