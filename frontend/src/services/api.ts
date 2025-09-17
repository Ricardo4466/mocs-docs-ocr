import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default api

// Add this declaration to fix the TypeScript error
declare global {
  interface ImportMeta {
    readonly env: {
      readonly VITE_API_URL: string;
      // add other env variables here if needed
      [key: string]: string | undefined;
    };
  }
}