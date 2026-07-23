import {
  ShieldCheck,
  Database,
  Globe,
  Zap,
  Lock,
  RefreshCcw,
  Terminal,
  LifeBuoy,
} from "lucide-react";

const pricingData = [
  {
    id: 1,
    name: "Starter",
    description: "Best for small projects",

    cpu: 2,
    ram: 6,
    storage: 100,

    monthlyPrice: 12,
    yearlyPrice: 9,

    featured: false,

    button: "Configure Plan",

    features: [
      {
        icon: ShieldCheck,
        text: "2 vCPU Cores",
      },
      {
        icon: Database,
        text: "6 GB RAM",
      },
      {
        icon: ShieldCheck,
        text: "WAF & Malware Scan",
      },
      {
        icon: Zap,
        text: "PHP 8.3 & HTTP/3",
      },
      {
        icon: Lock,
        text: "Free SSL",
      },
    ],
  },

  {
    id: 2,
    name: "WP Professional",
    description: "Optimized for growing sites",

    cpu: 4,
    ram: 12,
    storage: 250,

    monthlyPrice: 35,
    yearlyPrice: 28,

    featured: true,

    button: "Deploy Now",

    features: [
      {
        icon: Globe,
        text: "1-Click Staging",
      },
      {
        icon: Database,
        text: "Object Cache (Redis)",
      },
      {
        icon: RefreshCcw,
        text: "Smart Update Manager",
      },
      {
        icon: Terminal,
        text: "WP-CLI & SSH Access",
      },
    ],
  },

  {
    id: 3,
    name: "Professional",
    description: "For high-traffic apps",

    cpu: 8,
    ram: 24,
    storage: 500,

    monthlyPrice: 56,
    yearlyPrice: 45,

    featured: false,

    button: "Configure Plan",

    features: [
      {
        icon: Globe,
        text: "Global CDN & Edge",
      },
      {
        icon: ShieldCheck,
        text: "1-Click Staging",
      },
      {
        icon: ShieldCheck,
        text: "Cloudflare Enterprise",
      },
      {
        icon: Terminal,
        text: "WP-CLI & SSH Access",
      },
    ],
  },

  {
    id: 4,
    name: "Enterprise",
    description: "Maximum dedicated power",

    cpu: 16,
    ram: 48,
    storage: 800,

    monthlyPrice: 112,
    yearlyPrice: 90,

    featured: false,

    button: "Contact Sales",

    features: [
      {
        icon: Globe,
        text: "White-Glove Migration",
      },
      {
        icon: Globe,
        text: "Global CDN & Edge",
      },
      {
        icon: ShieldCheck,
        text: "Advanced WAF",
      },
      {
        icon: LifeBuoy,
        text: "24/7 Priority Support",
      },
    ],
  },
];

export default pricingData;