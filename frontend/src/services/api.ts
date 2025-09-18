import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default api


declare global {
  interface ImportMeta {
    readonly env: {
      readonly VITE_API_URL: string;
      [key: string]: string | undefined;
    };
  }
}