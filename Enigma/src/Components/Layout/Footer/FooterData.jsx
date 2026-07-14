import {
  Globe,
  
  ShieldCheck,
} from "lucide-react";

export const footerLinks = [
  {
    title: "Hosting",
    links: [
      {
        name: "Hosting Overview",
        path: "/hosting",
      },
      {
        name: "VPS Hosting",
        path: "/vpshosting",
      },
      {
        name: "Dedicated Hosting",
        path: "/dedicatedhosting",
      },
    ],
  },

  {
    title: "Security",
    links: [
      {
        name: "Security Overview",
        path: "/security",
      },
      {
        name: "SSL Certificates",
        path: "/security/ssl",
      },
      {
        name: "Firewall Protection",
        path: "/security/firewall",
      },
      {
        name: "DDoS Protection",
        path: "/security/ddos",
      },
    ],
  },

  {
    title: "Support",
    links: [
      {
        name: "Help Center",
        path: "/help-center",
      },
      {
        name: "Contact Support",
        path: "/help-center/contact-support",
      },
      {
        name: "Community Forum",
        path: "/help-center/community-forum",
      },
      {
        name: "System Status",
        path: "/help-center/system-status",
      },
    ],
  },

  {
    title: "Company",
    links: [
      {
        name: "About Us",
        path: "/about",
      },
      {
        name: "Privacy Policy",
        path: "/privacy-policy",
      },
      {
        name: "Terms of Service",
        path: "/terms",
      },
      {
        name: "Careers",
        path: "/careers",
      },
    ],
  },
];

export const socialIcons = [
    Globe,
];

export const bottomText = {
  copyright:
    "© 2026 CloudCore Pro. All rights reserved.",
  security: "Enterprise Grade Security",
  icon: ShieldCheck,
};