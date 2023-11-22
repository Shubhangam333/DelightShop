import axios from "axios";
const config = {
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
};
const customFetch = axios.create({
  baseURL: "https://delight-shop-eta.vercel.app",
  config,
});

export default customFetch;
