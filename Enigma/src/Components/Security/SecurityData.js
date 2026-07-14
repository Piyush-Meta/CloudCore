import {
  Shield,
  Lock,
  ShieldCheck,
  ServerCrash,
  Cloud,
  Eye,
} from "lucide-react";

export const securityFeatures = [
  {
    id: 1,
    title: "SSL Certificates",
    description:
      "Encrypt every connection with industry-standard SSL protection.",
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: "Firewall Protection",
    description:
      "Advanced firewall filters malicious traffic before it reaches your servers.",
    icon: Shield,
  },
  {
    id: 3,
    title: "DDoS Mitigation",
    description:
      "Real-time protection against distributed denial-of-service attacks.",
    icon: ServerCrash,
  },
  {
    id: 4,
    title: "Multi-Factor Authentication",
    description:
      "Secure your account with an additional layer of authentication.",
    icon: Lock,
  },
  {
    id: 5,
    title: "Secure Cloud Backups",
    description:
      "Automatic encrypted backups ensure your data is always recoverable.",
    icon: Cloud,
  },
  {
    id: 6,
    title: "24/7 Threat Monitoring",
    description:
      "Continuous monitoring helps detect and prevent suspicious activities.",
    icon: Eye,
  },
];