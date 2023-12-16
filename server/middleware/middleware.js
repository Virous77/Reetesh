import CryptoJS from "crypto-js";
import { handleCallback } from "../utils/function.js";

export const authenticate = handleCallback(async (req, res, next) => {
  try {
    const token =
      req.headers.authorization && req.headers.authorization.split(" ")[1];
    if (!token) {
      return res
        .status(400)
        .json({ status: false, message: "Authentication token not found" });
    }

    const secretKey = process.env.MASTER_KEY;
    const decryptedData = CryptoJS.AES.decrypt(token, secretKey).toString(
      CryptoJS.enc.Utf8
    );

    const formateData = JSON.parse(decryptedData);

    if (!decryptedData || formateData?.key !== process.env.HASH_KEY) {
      return res
        .status(400)
        .json({ status: false, message: "token is not correct" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: false,
      message: error.message || "Something went wrong,Try again later",
    });
  }
  next();
});
