import { Building2 } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-28">
      <div className="mx-auto max-w-5xl px-8 text-center">

        <div className="inline-flex items-center gap-2 rounded-4xl bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
          <Building2 size={100} />
          <h1 className="text-2xl">About CloudCore Pro</h1>
        </div>

        <h1 className="mt-8 text-6xl font-bold text-gray-900">
          Building Reliable Cloud Infrastructure
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
          CloudCore Pro provides secure, scalable and high-performance
          hosting solutions designed for developers, startups and
          enterprises. Our goal is to simplify cloud infrastructure
          while delivering exceptional reliability and enterprise-grade
          security.
        </p>

      </div>
    </section>
  );
};

export default AboutHero;