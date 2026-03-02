import axios from "axios";

const DEFAULT_API_URL = "https://sana-chart.onrender.com";
const DEV_API_URL = "http://localhost:3000";

const apiRoot =
  import.meta.env.VITE_API_URL ??
  (import.meta.env.MODE === "development" ? DEV_API_URL : DEFAULT_API_URL);

const normalizedApiRoot = apiRoot.replace(/\/$/, "");

export const axiosInstance = axios.create({
  baseURL: `${normalizedApiRoot}/api`,
  withCredentials: true,
});
