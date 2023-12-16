import { Github, Linkedin, Twitter } from "lucide-react";
import CryptoJS from "crypto-js";

export const socials = [
  {
    name: Github,
    url: "https://github.com/Virous77",
  },
  {
    name: Twitter,
    url: "https://twitter.com/imbitcoinb",
  },
  {
    name: Linkedin,
    url: "https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BlLFnKZvySiCcK4N0OkM3%2FQ%3D%3D",
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
