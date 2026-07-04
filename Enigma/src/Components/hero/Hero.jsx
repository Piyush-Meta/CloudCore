import HeroBadge from "./HeroBadge";
import HeroButtons from "./HeroButtons";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section className="bg-[#F8FAFF]">
      <div className="w-full px-8 lg:px-10  lg:px-8 py-10">

        <div className="grid grid-cols-2 items-center gap-10">

          <div className="max-w-[700px]">
            <HeroBadge />
            <h1 className="mt-8 text-[58px] leading-[1.1] font-bold text-[#111827]">
              Powerful Hosting and
              <br />
              Servers{" "}
              <span className="text-[#2563EB]">
                Built for Your
              </span>
              <br />
              <span className="text-[#2563EB]">
                Business
              </span>
            </h1>

            <p className="mt-8 max-w-[580px] text-[20px] leading-9 text-gray-600">
              Scale your infrastructure on globally distributed bare metal
              and cloud instances with enterprise-grade security and
              100% network availability.
            </p>

            <HeroButtons />

            <div className="mt-10 flex gap-10">
              <span>99.99% Uptime</span>
              <span>24/7 Support</span>
            </div>

          </div>
          {/* Right */}
          <div className="flex justify-end">
            <HeroImage />
          </div>

        </div>
      
      </div>
    </section>
  );
};

export default Hero;