import { GitHubIcon, LinkedInIcon, XIcon } from '@/components/cv/icon';

export const RESUME_DATA = {
  name: 'Reetesh Kumar',
  initials: 'RK',
  location: 'Ahmedabad, India',
  locationLink: 'https://www.google.com/maps/place/ahmedabad    ',
  about:
    'Full Stack Engineer who builds products for the web with a focus on user experience.',
  summary:
    'As a Full Stack Engineer, I have experience in building web applications using modern technologies. I have worked on various products that solve real-world problems. I am passionate about building products that are user-friendly and accessible to everyone.',
  avatarUrl: 'https://avatars.githubusercontent.com/u/101452588?v=4',
  personalWebsiteUrl: 'https://reetesh.in',
  contact: {
    email: 'rajreetesh7@gmail.com',
    tel: '+91 8210830957',
    social: [
      {
        name: 'GitHub',
        url: 'https://github.com/virous77',
        icon: GitHubIcon,
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/reetesh-kumar-a1b952178/',
        icon: LinkedInIcon,
      },
      {
        name: 'X',
        url: 'https://x.com/imbitcoinb',
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: 'Jai Prakash University, Saran Bihar',
      degree: "Bachelor's Degree in Chemistry",
      start: '2014',
      end: '2019',
    },
  ],
  work: [
    {
      company: 'Inara Consultancy Services',
      link: 'https://www.inaraconsultancy.com',
      badges: [],
      title: 'Junior Full Stack Developer',
      logo: GitHubIcon,
      start: '2023',
      end: 'Present',
      description:
        'I have help to built multiple DApps and geospatial visualization related project. My main work is mostly about working on web3 related projects.',
    },
  ],
  skills: [
    'JavaScript',
    'TypeScript',
    'Solidity',
    'Rust',
    'React/Next.js',
    'Node.js',
    'GraphQL',
    'tRPC',
    ,
  ],
  projects: [
    {
      title: 'Nikeway',
      techStack: [
        'Side Project',
        'TypeScript',
        'React',
        'Vite',
        'Node.JS',
        'MongoDB',
      ],
      description:
        'I built this project with inspiration after seeing Nike Site.',
      logo: GitHubIcon,
      link: {
        label: 'nikeway.netlify.app',
        href: 'https://nikeway.netlify.app',
      },
    },
    {
      title: 'Charity DApp',
      techStack: [
        'Side Project',
        'Typescript',
        'Next.JS',
        'Solidity',
        'Wallet Connect',
      ],
      description:
        'A DApp where any one can register and raise fund in transparent way with the security of blockchain.',
      logo: GitHubIcon,
      link: {
        label: 'charity-next-dapp.vercel.app/',
        href: 'https://charity-next-dapp.vercel.app/',
      },
    },
  ],
} as const;
