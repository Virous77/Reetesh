import { Github, Linkedin, Twitter } from "lucide-react";
import CryptoJS from "crypto-js";

export const socials = [
  {
    name: Github,
    url: "https://github.com/Virous77",
    title: "Github",
  },
  {
    name: Twitter,
    url: "https://twitter.com/imbitcoinb",
    title: "Twitter",
  },
  {
    name: Linkedin,
    url: "https://www.linkedin.com/in/reetesh-kumar-a1b952178/",
    title: "Linkedin",
  },
];

export const localAppError = {
  data: {
    message: "Something went wrong,Try again later",
    status: 400,
    success: false,
    stack: "",
    data: null,
  },
};

export const hashData = () => {
  const secretKey = process.env.NEXT_PUBLIC_MASTER_KEY;

  const hash = {
    key: process.env.NEXT_PUBLIC_HASH_KEY,
  };

  const encryptedData = CryptoJS.AES.encrypt(
    JSON.stringify(hash),
    secretKey!
  ).toString();

  return encryptedData;
};

export const commonMetaData = ({
  name,
  desc,
  image,
  url,
  keywords,
}: {
  name: string;
  desc: string;
  image: string;
  url: string;
  keywords: string[];
}) => {
  return {
    metadataBase: new URL("https://reetesh.in"),
    title: name
      ? `${name} | Reetesh Kumar`
      : "Reetesh Kumar | Full-Stack Developer",
    description: desc,
    authors: [
      {
        name: "Reetesh Kumar",
        url: "https://reetesh.in/",
      },
    ],
    twitter: {
      card: "summary_large_image",
      creator: "@imbitcoinb",
      images: image,
    },
    robots: "index, follow",
    alternates: {
      canonical: `https://reetesh.in${url}`,
      languages: {
        "en-US": "/",
      },
    },
    openGraph: {
      type: "website",
      url: `https://reetesh.in${url}`,
      title: name,
      description: desc,
      siteName: "Reetesh Kumar",
      images: [
        {
          url: image,
        },
      ],
    },
    assets: image,
    keywords: [
      "nextjs",
      "react",
      "typescript",
      "tailwindcss",
      "express",
      "nodejs",
      "mongodb",
      "mysql",
      "javascript",
      "html",
      "docker",
      "github",
      "git",
      ...keywords,
    ],
  };
};

export const formateDate = (date: string) => {
  const newDate = new Date(date);

  const month = newDate.toLocaleString("default", { month: "short" });
  const day = newDate.getDate();
  const year = newDate.getFullYear();

  return `${month} ${day}, ${year}`;
};

export const generateUUID = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const getLocalData = (key: string) => {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return 0;
};
