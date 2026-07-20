import {
  Lock,
  Shield,
  ScanSearch,
  ServerCrash,
} from "lucide-react";

const steps = [
  {
    id: 1,
    icon: Lock,
    title: "Encrypt",
    description:
      "All communication is protected using enterprise-grade SSL encryption.",
  },
  {
    id: 2,
    icon: Shield,
    title: "Filter",
    description:
      "Intelligent firewalls inspect and block malicious traffic before it reaches your infrastructure.",
  },
  {
    id: 3,
    icon: ScanSearch,
    title: "Detect",
    description:
      "Continuous monitoring identifies suspicious activity in real time.",
  },
  {
    id: 4,
    icon: ServerCrash,
    title: "Respond",
    description:
      "Automated mitigation systems neutralize attacks and maintain uptime.",
  },
];

const ProtectionProcess = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            HOW IT WORKS
          </span>

          <h2 className="mt-6 text-5xl font-bold text-gray-900">
            Our Protection Process
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Every request passes through multiple security layers,
            ensuring your applications remain protected from modern
            cyber threats.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
                  <Icon
                    size={30}
                    className="text-blue-600"
                  />
                </div>

                <div className="mt-8 flex items-center gap-3">

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                    {step.id}
                  </span>

                  <h3 className="text-2xl font-bold">
                    {step.title}
                  </h3>

                </div>

                <p className="mt-5 leading-7 text-gray-600">
                  {step.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default ProtectionProcess;