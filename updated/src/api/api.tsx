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
    console.log(error);
    return error.message || error.response;
  }
};
