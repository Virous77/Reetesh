import { Link2 } from "lucide-react";
import { GitHubIcon, LinkedInIcon, XIcon } from "./icon";

export const RESUME_DATA = {
  name: "Reetesh Kumar",
  initials: "RK",
  location: "Ahmedabad, India",
  locationLink: "https://www.google.com/maps/place/ahmedabad    ",
  about:
    "Full Stack Engineer building reliable, high-performance web products across SaaS, e-commerce, and web3.",
  summary:
    "I'm a full stack engineer with 3.7+ years of experience shipping production web applications across IoT, geospatial, web3, CRM, and e-commerce domains. I work end-to-end in the React/Next.js and Node.js ecosystem designing scalable REST and GraphQL APIs, integrating payments and blockchain, and wiring third-party services into clean, dependable products. I care deeply about performance, maintainable architecture, and clear communication, and I've been leaning into GenAI and AI-assisted workflows to build and ship faster. Most of all, I enjoy turning messy requirements into polished software that people actually use.",
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
      company: "Furrisic Infotech",
      link: "https://furrisic.com",
      badges: [],
      title: "MERN Stack Engineer",
      logo: GitHubIcon,
      start: "Jun 2026",
      end: "Present",
      description:
        "Building and shipping features for production full-stack web applications across the MERN stack (MongoDB, Express, React, Node.js), collaborating closely with the product team on active development.",
      subDescription:
        "Focused on writing clean, maintainable code, ramping up quickly on the existing codebase, and contributing to a smooth, reliable delivery workflow.",
    },
    {
      company: "Inara Consultancy Services",
      link: "https://www.inaraconsultancy.com",
      badges: [],
      title: "Software Engineer",
      logo: GitHubIcon,
      start: "Feb 2023",
      end: "Jun 2026",
      description:
        "Engineered and maintained production full-stack applications with React, Node.js, and PostgreSQL, designing scalable REST APIs with a clean separation of concerns.",
      subDescription:
        "Integrated Stripe end-to-end — checkout flows, webhook events, and error handling — and containerized services with Docker to standardize deployments across environments. Delivered work spanning geospatial dashboards, e-commerce, CRM, and web3 dApps on Ethereum and Solana.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Angular",
    "TailwindCSS",
    "Zustand",
    "Redux",
    "TanStack Query",
    "Node.js",
    "Express.js",
    "Nest.js",
    "Hono",
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "SQLite",
    "Redis",
    "Kafka",
    "RabbitMQ",
    "REST",
    "GraphQL",
    "tRPC",
    "Docker",
    "GitHub Actions",
    "AWS",
    "Solidity",
    "Web3",
    "GenAI",
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
