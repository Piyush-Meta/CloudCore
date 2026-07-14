import { Cpu, HardDrive } from "lucide-react";

export const hostingPlans = [
  {
    id: 1,
    title: "VPS Hosting",
    description:
      "Flexible virtual private servers built for growing applications and businesses.",

    features: [
      "Instant Deployment",
      "NVMe SSD Storage",
      "Dedicated Resources",
      "Easy Vertical Scaling",
    ],

    icon: Cpu,

    path: "/vpshosting",

    button: "Explore VPS",
  },

  {
    id: 2,
    title: "Dedicated Servers",

    description:
      "Complete hardware isolation with enterprise-grade performance for demanding workloads.",

    features: [
      "100% Dedicated Hardware",
      "Maximum Performance",
      "Root Access",
      "Enterprise Security",
    ],

    icon: HardDrive,

    path: "/dedicatedhosting",

    button: "Explore Dedicated",
  },
];