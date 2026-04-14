import { Link2 } from "lucide-react";
import { GitHubIcon, LinkedInIcon, XIcon } from "./icon";

export const RESUME_DATA = {
  name: "Reetesh Kumar",
  initials: "RK",
  location: "Ahmedabad, India",
  locationLink: "https://www.google.com/maps/place/ahmedabad    ",
  about:
    "Full Stack Engineer focused on building reliable, user-first web products.",
  summary:
    "I have 4+ years of experience building production web apps across SaaS, e-commerce, and web3. Most of my work lives in the React/Next.js + Node.js ecosystem, where I enjoy turning complex requirements into clean, maintainable features. I care about product quality, performance, and clear communication, and I am happiest when shipping things that people actually use.",
  avatarUrl: "https://avatars.githubusercontent.com/u/101452588?v=4",
  personalWebsiteUrl: "https://reetesh.in",
  contact: {
    email: "rajreetesh7@gmail.com",
    tel: "+91 8210830957",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/virous77",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/reetesh-kumar-a1b952178/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/reetesheth",
        icon: XIcon,
      },
      {
        name: "Website",
        url: "https://reetesh.in",
        icon: Link2,
      },
    ],
  },
  education: [
    {
      school: "Jai Prakash University, Saran Bihar",
      degree: "Bachelor's Degree in Chemistry",
      start: "2014",
      end: "2019",
    },
  ],
  work: [
    {
      company: "Inara Consultancy Services",
      link: "https://www.inaraconsultancy.com",
      badges: [],
      title: "Full Stack Developer",
      logo: GitHubIcon,
      start: "Feb 2023",
      end: "Present",
      description:
        "Built and maintained client-facing web applications from planning to deployment, collaborating with product and design teams to deliver fast, intuitive user experiences.",
      subDescription:
        "Worked on projects spanning geospatial dashboards, e-commerce workflows, and dApps on Ethereum and Solana, with a focus on performance and long-term maintainability.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "GraphQL",
    "tRPC",
    "Solidity",
    "Anchor",
    "Docker",
    "TailwindCSS",
    "Kafka",
  ],
  projects: [
    {
      title: "Nikeway",
      techStack: [
        "Side Project",
        "TypeScript",
        "React",
        "Vite",
        "Node.JS",
        "MongoDB",
      ],
      description:
        "A Nike-inspired storefront focused on polished UI, responsive layouts, and core e-commerce interactions.",
      logo: GitHubIcon,
      link: {
        label: "nikee-1.onrender.com",
        href: "https://nikee-1.onrender.com/",
      },
    },
    {
      title: "Charity DApp",
      techStack: [
        "Side Project",
        "Typescript",
        "Next.JS",
        "Solidity",
        "Wallet Connect",
      ],
      description:
        "A crowdfunding dApp where users can create and support campaigns with transparent, on-chain transactions.",
      logo: GitHubIcon,
      link: {
        label: "charity-next-dapp.vercel.app/",
        href: "https://charity-next-dapp.vercel.app/",
      },
    },
    {
      title: "Tracker - Portfolio & Expense",
      techStack: [
        "NextJS",
        "Typescript",
        "MongoDB",
        "Prisma",
        "TailwindCSS",
        "zustand",
        "zerodha",
        "coingecko",
        "Recharts",
        "redis",
      ],
      description:
        "A personal finance dashboard that combines portfolio tracking and expense management. It integrates Zerodha and CoinGecko APIs to provide a unified view of investments and daily spending.",
      logo: GitHubIcon,
      link: {
        label: "portfolio.reetesh.in",
        href: "https://portfolio.reetesh.in",
      },
    },

    {
      title: "Solex - A Hospitality App",
      techStack: [
        "Side Project",
        "React",
        "Javascript",
        "Firebase",
        "Stripe",
        "Node.JS",
      ],
      description:
        "An Airbnb-inspired hospitality platform built to explore booking flows, listing management, and modern UI patterns.",
      logo: GitHubIcon,
      link: {
        label: "solex.onrender.com",
        href: "https://solex.onrender.com",
      },
    },
    {
      title: "Globe Graph",
      techStack: [
        "Side Project",
        "NextJS",
        "Typescript",
        "Shadcn",
        "TailwindCSS",
        "TanStack Query",
        "geo",
        "worldbank API",
      ],
      description:
        "A data visualization app for exploring country-level statistics through interactive charts by year and region.",
      logo: GitHubIcon,
      link: {
        label: "globe-graph.vercel.app",
        href: "https://globe-graph.vercel.app/",
      },
    },
    {
      title: "Graze - A food Marketplace",
      techStack: [
        "Side Project",
        "React",
        "Javascript",
        "Firebase",
        "Stripe",
        "Node.JS",
      ],
      description:
        "A multi-vendor food marketplace where users can order from different restaurants or create their own storefront.",
      logo: GitHubIcon,
      link: {
        label: "graze-food-app.onrender.com",
        href: "https://graze-food-app.onrender.com",
      },
    },
  ],
} as const;
