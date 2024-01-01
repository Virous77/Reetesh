import authorImg from "../assets/image.jpg";
import CryptoJS from "crypto-js";

export const author = {
  name: "Reetesh Kumar",
  image: authorImg,
  about: "Full Stack Developer",
};

export const hashData = () => {
  const secretKey = import.meta.env.VITE_MASTER_KEY;

  const hash = {
    key: import.meta.env.VITE_HASH_KEY,
  };

  const encryptedData = CryptoJS.AES.encrypt(
    JSON.stringify(hash),
    secretKey!
  ).toString();

  return encryptedData;
};
