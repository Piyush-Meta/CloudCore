import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutCTA = () => {
  return (
    <section className="py-24 bg-white">

      <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-r from-blue-700 to-cyan-600 px-10 py-20 text-center text-white shadow-2xl">

        <h2 className="text-5xl font-bold">
          Ready to Experience Better Hosting?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
          Discover reliable cloud infrastructure built for performance,
          security and scalability.
        </p>

        <Link to="/hosting">
          <button className="mt-10 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105">
            Explore Hosting
            <ArrowRight size={18} />
          </button>
        </Link>

      </div>

    </section>
  );
};

export default AboutCTA;