import axios from "axios";
import { hashData } from "../utils/author";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${hashData()}`,
  },
});

export const fetchData = async (url: string) => {
  try {
    const { data } = await instance.get(url);
    return data.data;
  } catch (error: any) {
    throw error.message || error.response;
  }
};

type SendEmailProps = {
  url: string;
  body: {
    userName: string;
    email: string;
    message: string;
  };
};

export const sendEmail = async ({ url, body }: SendEmailProps) => {
  try {
    const { data } = await instance.post(url, body);
    return data;
  } catch (error: any) {
    throw error.response.data.message || error.message;
  }
};
