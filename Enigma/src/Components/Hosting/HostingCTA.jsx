import { ArrowRight, Server } from "lucide-react";
import { Link } from "react-router-dom";

const HostingCTA = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-8">

        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 px-12 py-20 shadow-2xl">

          <div className="flex flex-col items-center text-center">

            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10">

              <Server
                size={42}
                className="text-white"
              />

            </div>

            <h2 className="mt-8 text-5xl font-bold text-white">
              Ready To Launch Your Next Project?
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
              Whether you're hosting a personal website or deploying
              enterprise applications, CloudCore Pro delivers the
              speed, reliability, and security your business deserves.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <Link to="/vpshosting">
                <button className="flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105">

                  Get Started

                  <ArrowRight size={18} />

                </button>
              </Link>

              <Link to="/dedicatedhosting">
                <button className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-blue-700">
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