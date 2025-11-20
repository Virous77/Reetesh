import { Link2 } from "lucide-react";
import { GitHubIcon, LinkedInIcon, XIcon } from "./icon";

export const RESUME_DATA = {
  name: "Reetesh Kumar",
  initials: "RK",
  location: "Ahmedabad, India",
  locationLink: "https://www.google.com/maps/place/ahmedabad    ",
  about:
    "I specialize in creating exceptional and user-friendly digital experiences for the web.",
  summary:
    "As a Full Stack Engineer, I thrive on crafting dynamic web applications fueled by cutting-edge technologies. I am passionate about building scalable, high-quality software solutions that deliver value to users. I like to work on projects that challenge me and allow me to grow as a developer.",
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
        url: "https://x.com/imbitcoinb",
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
        "I am working as a Full Stack Developer at Inara Consultancy Services. I am responsible for developing and maintaining web applications for clients. I work closely with the design team to implement user-friendly interfaces and ensure that the applications meet the client's requirements.",
      subDescription:
        "I have built several web applications related to geospatial visualization, e-commerce, and multiple DAPPs on ethereum and solana blockchain.",
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
        "I took inspiration from the Nike official site and tried to build the core functionality of the site and match the UI as much as i can.",
      logo: GitHubIcon,
      link: {
        label: "nikeway.netlify.app",
        href: "https://nikeway.netlify.app",
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
        "My personal project to track my portfolio and expenses in one place. It fetches data from Zerodha and Coingecko API to show my investment portfolio and also tracks my daily expenses.",
      logo: GitHubIcon,
      link: {
        label: "portfolio.reetesh.in",
        href: "https://portfolio.reetesh.in",
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
        "A DApp where any one can register and raise fund in transparent way with the security of blockchain.",
      logo: GitHubIcon,
      link: {
        label: "charity-next-dapp.vercel.app/",
        href: "https://charity-next-dapp.vercel.app/",
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
        "This project inspiration is taken from the Airbnb. I tried to build the core functionality of the site and match the UI as much as i can.",
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
        "A App which shows various statistics of countries in different graphs where we can visualize data selecting multiple countries and year.",
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
        "A food marketplace where user can order food from multiple restaurants. User can also add their own restaurant and start selling. ",
      logo: GitHubIcon,
      link: {
        label: "graze-food-app.onrender.com",
        href: "https://graze-food-app.onrender.com",
      },
    },
  ],
} as const;
