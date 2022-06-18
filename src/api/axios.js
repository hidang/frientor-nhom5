import axios from "axios";
export const Axios = axios.create({
  baseURL: "https://frientor-server.herokuapp.com", // https://frientor-server.herokuapp.com --> for build to deploy production
  headers: {
    "content-type": "application/json",
  },
});
