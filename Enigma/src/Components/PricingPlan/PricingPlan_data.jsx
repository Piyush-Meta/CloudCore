const pricingPlans = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for personal projects and small development environments.",
    price: 19,
    billingCycle: "mo",
    isFeatured: false,
    badge: null,
    features: ["2 GB RAM", "1 CPU Core", "50 GB NVMe Storage"],
    buttonText: "Configure Plan"
  },
  {
    id: "professional",
    name: "Professional",
    description: "Optimal balance of resources for high-traffic business sites.",
    price: 49,
    billingCycle: "mo",
    isFeatured: true,
    badge: "Best Value",
    features: ["8 GB RAM", "4 CPU Cores", "200 GB NVMe Storage", "Daily Backups"],
    buttonText: "Configure Plan"
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Dedicated resources for mission-critical apps and big data applications.",
    price: 99,
    billingCycle: "mo",
    isFeatured: false,
    badge: null,
    features: ["16 GB RAM", "8 CPU Cores", "500 GB NVMe Storage", "Platinum Support"],
    buttonText: "Configure Plan"
  }
];
export default pricingPlans;