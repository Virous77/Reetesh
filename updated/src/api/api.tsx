import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  timeout: 30000,
});

export const fetchData = async (url: string) => {
  try {
    const { data } = await instance.get(url);
    return data.data;
  } catch (error: any) {
    return error.message || error.response;
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
    return error.message || error.response;
  }
};
