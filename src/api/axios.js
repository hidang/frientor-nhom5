import axios from "axios";
export const Axios = axios.create({
  baseURL: "http://localhost:3000", // https://frientor-server.herokuapp.com --> for build to deploy production
  headers: {
    "content-type": "application/json",
  },
});
