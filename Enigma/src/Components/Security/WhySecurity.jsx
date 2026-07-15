import {
  ShieldCheck,
  Lock,
  Eye,
  ServerCrash,
} from "lucide-react";

const WhySecurity = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-20 px-8 lg:flex-row">

        {/* Left Side */}
        <div className="flex flex-1 justify-center">
          <div className="relative">

            {/* Blue Glow */}
            <div className="absolute inset-0 rounded-full bg-blue-500/15 blur-[80px]"></div>

            {/* Main Circle */}
            <div className="relative flex h-80 w-80 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 shadow-xl">

              <ShieldCheck
                size={120}
                strokeWidth={1.5}
                className="text-white"
              />

            </div>

            {/* Floating Icons */}

            <div className="absolute -left-6 top-8 rounded-xl bg-white p-4 shadow-xl">
              <Lock
                size={28}
                className="text-blue-600"
              />
            </div>

            <div className="absolute -right-5 top-20 rounded-xl bg-white p-4 shadow-xl">
              <Eye
                size={28}
                className="text-blue-600"
              />
            </div>

            <div className="absolute bottom-8 -right-4 rounded-xl bg-white p-4 shadow-xl">
              <ServerCrash
                size={28}
                className="text-blue-600"
              />
            </div>

          </div>
        </div>

        {/* Right Side */}

        <div className="flex-1">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            WHY SECURITY MATTERS
          </span>

          <h2 className="mt-6 text-5xl font-bold text-gray-900">
            Protect What Matters Most
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Cyber threats are becoming more sophisticated every day.
            From ransomware attacks and phishing attempts to DDoS
            attacks and unauthorized access, every online business
            faces security challenges.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            CloudCore Pro secures your infrastructure using multiple
            layers of protection. We combine enterprise-grade
            encryption, intelligent monitoring, automated threat
            detection, and proactive defense systems to keep your
            websites, applications, and customer data safe around
            the clock.
          </p>

          {/* Highlights */}

          <div className="mt-10 grid gap-5 md:grid-cols-2">

            <div className="flex items-center gap-3">
              <ShieldCheck className="text-blue-600" />
              <span>Enterprise-grade encryption</span>
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheck className="text-blue-600" />
              <span>24/7 threat monitoring</span>
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheck className="text-blue-600" />
              <span>Intelligent firewall protection</span>
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheck className="text-blue-600" />
              <span>Automatic attack mitigation</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WhySecurity;