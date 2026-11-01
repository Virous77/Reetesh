export const RESUME_DATA = {
  name: "Reetesh Kumar",
  initials: "RK",
  location: "Ahmedabad, India",
  about: "Full stack engineer. Mostly React, Next.js and Node.js.",
  summary: [
    "I've been writing production software for close to four years. My degree is in chemistry, so I got here the long way. I learned by building things, and a couple of the projects below are from before my first job.",
    "So far I've worked on IoT, geospatial, CRM, e-commerce and web3 products, which is a strange mix but it taught me to pick up a new domain quickly. I usually take a feature from the database through to the UI myself, including the annoying parts like payments and third-party APIs. Lately I've been building with AI tools a lot, and I write about what I learn on my blog, 50+ posts so far.",
  ],
  avatarUrl: "https://avatars.githubusercontent.com/u/101452588?v=4",
  contact: {
    email: "rajreetesh7@gmail.com",
    tel: "+91 8210830957",
    links: [
      { label: "reetesh.in", url: "https://reetesh.in" },
      { label: "GitHub", url: "https://github.com/virous77" },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/reetesh-kumar-a1b952178/",
      },
      { label: "X", url: "https://x.com/reetesheth" },
    ],
  },
  work: [
    {
      company: "Furrisic Infotech",
      link: "https://furrisic.com",
      title: "MERN Stack Engineer",
      start: "Jun 2026",
      end: "Present",
      points: [
        "I build and ship features on live products using MongoDB, Express, React and Node.js.",
        "I work closely with the product team on what goes out next.",
        "I joined recently, so a good part of my time so far has gone into learning the existing codebase.",
      ],
    },
    {
      company: "Inara Consultancy Services",
      link: "https://www.inaraconsultancy.com",
      title: "Software Engineer",
      start: "Feb 2023",
      end: "Jun 2026",
      points: [
        "My first engineering job. I stayed a little over three years and worked across geospatial dashboards, e-commerce, CRM, and web3 apps on Ethereum and Solana.",
        "Built React front ends and Node.js REST APIs on PostgreSQL, then looked after them in production.",
        "Set up Stripe end to end: checkout, webhooks, and what happens when a payment fails.",
        "Moved services into Docker so that every environment deployed the same way.",
      ],
    },
  ],
  projects: [
    {
      title: "Tracker",
      year: "2025",
      description:
        "I built this for myself to keep my spending and investments in one place, and I still use it. Add your own Zerodha API key and it tracks your portfolio, along with US stocks and crypto.",
      techStack: [
        "Next.js",
        "TypeScript",
        "MongoDB",
        "Prisma",
        "Redis",
        "Zustand",
        "Recharts",
      ],
      link: {
        label: "portfolio.reetesh.in",
        href: "https://portfolio.reetesh.in",
      },
    },
    {
      title: "Nikeway",
      year: "2023",
      description:
        "A rebuild of the Nike website. I tried to match its design and features as closely as I could. React Query handles the data on the front end, with Express and MongoDB behind it.",
      techStack: ["React", "TypeScript", "React Query", "Express", "MongoDB"],
      link: {
        label: "nikee-1.onrender.com",
        href: "https://nikee-1.onrender.com/",
      },
    },
    {
      title: "Globe Graph",
      year: "2024",
      description:
        "Charts for country data from the World Bank. You can look at GDP, GDP per capita and population across different years.",
      techStack: ["Next.js", "TypeScript", "TanStack Query", "Recharts"],
      link: {
        label: "globe-graph.vercel.app",
        href: "https://globe-graph.vercel.app/",
      },
    },
    {
      title: "Charity DApp",
      year: "2024",
      description:
        "Fundraising on the blockchain, so anyone can check where the money went. The core logic lives in the Solidity contracts, and the app talks to them through WalletConnect and Wagmi.",
      techStack: ["Next.js", "TypeScript", "Solidity", "Wagmi", "WalletConnect"],
      link: {
        label: "charity-next-dapp.vercel.app",
        href: "https://charity-next-dapp.vercel.app/",
      },
    },
    {
      title: "Solex",
      year: "2023",
      description:
        "An Airbnb-style booking app with listings and Stripe payments handled on the server. I learned a lot building this one.",
      techStack: ["React", "JavaScript", "Firebase", "Stripe", "Node.js"],
      link: {
        label: "solex.onrender.com",
        href: "https://solex.onrender.com",
      },
    },
    {
      title: "Graze",
      year: "2022",
      description:
        "A Swiggy-style food ordering app. People can order from different restaurants or set up a store of their own.",
      techStack: ["React", "JavaScript", "Firebase", "Stripe", "Node.js"],
      link: {
        label: "graze-food-app.onrender.com",
        href: "https://graze-food-app.onrender.com",
      },
    },
  ],
  skills: [
    {
      label: "Frontend",
      items:
        "JavaScript, TypeScript, React, Next.js, Angular, TailwindCSS, Redux, Zustand, TanStack Query",
    },
    {
      label: "Backend",
      items: "Node.js, Express, Nest.js, Hono, REST, GraphQL, tRPC",
    },
    {
      label: "Data",
      items: "PostgreSQL, MongoDB, MySQL, SQLite, Redis, Kafka, RabbitMQ",
    },
    { label: "Infra", items: "Docker, GitHub Actions, AWS" },
    { label: "Other", items: "Solidity, Web3, GenAI" },
  ],
  education: [
    {
      school: "Jai Prakash University, Saran, Bihar",
      degree: "Bachelor's Degree in Chemistry",
      start: "2014",
      end: "2019",
    },
  ],
} as const;
