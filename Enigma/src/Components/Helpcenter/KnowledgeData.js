import {
  BookOpen,
  Server,
  Globe,
  Shield,
  CreditCard,
  User,
  TriangleAlert,
  FileText,
} from "lucide-react";

export const knowledgeCategories = [
  {
    id: 1,
    title: "Getting Started",
    articles: 8,
    description: "Create your account and deploy your first server.",
    icon: BookOpen,
  },
  {
    id: 2,
    title: "Hosting",
    articles: 18,
    description: "Manage VPS, Dedicated and Cloud Hosting.",
    icon: Server,
  },
  {
    id: 3,
    title: "Domains & DNS",
    articles: 12,
    description: "Configure DNS, transfers and domain settings.",
    icon: Globe,
  },
  {
    id: 4,
    title: "Security",
    articles: 10,
    description: "SSL certificates, firewall and account security.",
    icon: Shield,
  },
  {
    id: 5,
    title: "Billing",
    articles: 9,
    description: "Invoices, payments and subscription management.",
    icon: CreditCard,
  },
  {
    id: 6,
    title: "Account",
    articles: 7,
    description: "Profile, password and authentication settings.",
    icon: User,
  },
  {
    id: 7,
    title: "Troubleshooting",
    articles: 15,
    description: "Common issues and quick fixes.",
    icon: TriangleAlert,
  },
  {
    id: 8,
    title: "Policies",
    articles: 5,
    description: "Privacy policy, refund policy and terms.",
    icon: FileText,
  },
];