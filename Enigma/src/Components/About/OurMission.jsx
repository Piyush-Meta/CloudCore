import { Target } from "lucide-react";

const OurMission = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-8">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          <div>

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              OUR MISSION
            </span>

            <h2 className="mt-6 text-5xl font-bold">
              Empowering Businesses Through Technology
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              We believe every business deserves fast, secure and
              dependable hosting. Our infrastructure is engineered to
              deliver consistent performance while helping developers
              and organizations scale confidently.
            </p>

          </div>

          <div className="rounded-3xl bg-blue-600 p-10 text-white shadow-xl">

            <Target
              size={70}
              className="mb-8"
            />

            <h3 className="text-3xl font-bold">
              Our Vision
            </h3>

            <p className="mt-5 leading-8 text-blue-100">
              To become a trusted cloud infrastructure partner by
              delivering secure, innovative and customer-focused
              hosting solutions worldwide.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default OurMission;