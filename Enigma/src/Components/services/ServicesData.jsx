import {
  Globe,
  HardDrive,
  Server,
  Settings,
  Sparkles,
  Mail,
} from "lucide-react";

export const services = [
  {
    id: 1,
    icon: Globe,
    title: "Shared Hosting",
    description:
      "Reliable and affordable hosting for small businesses and personal blogs.",
    button: "Learn More",
    badge: "",
    dark: false,
  },
  {
    id: 2,
    icon: HardDrive,
    title: "Cloud VPS",
    description:
      "Fully scalable virtual private servers with dedicated resources and root access.",
    button: "Configure Now",
    badge: "POPULAR",
    dark: true,
  },
  {
    id: 3,
    icon: Server,
    title: "Dedicated Servers",
    description:
      "High-performance bare metal servers for maximum control and data security.",
    button: "View Specs",
    badge: "ENTERPRISE",
    dark: true,
  },
  {
    id: 4,
    icon: Settings,
    title: "Custom Solutions",
    description:
      "Bespoke infrastructure design for complex multi-cloud and hybrid setups.",
    button: "Get Quote",
    badge: "",
    dark: false,
  },
  {
    id: 5,
    icon: Sparkles,
    title: "Managed WordPress",
    description:
      "Optimized performance and automatic updates for your WordPress sites.",
    button: "See Plans",
    badge: "",
    dark: false,
  },
  {
    id: 6,
    icon: Mail,
    title: "Professional Email",
    description:
      "Custom domain emails with Microsoft 365 or Google Workspace integration.",
    button: "Connect Email",
    badge: "",
    dark: false,
  },
];