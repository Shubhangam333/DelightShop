import axios from "axios";
const config = {
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
};
const customFetch = axios.create({
  baseURL: "/api/v1",
  config,
});

export default customFetch;
