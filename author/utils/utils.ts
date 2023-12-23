import CryptoJS from "crypto-js";

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
