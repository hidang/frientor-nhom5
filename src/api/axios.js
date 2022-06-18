import axios from "axios";
export const Axios = axios.create({
  baseURL: "http://localhost:3000", // https://frientor-server-nhom5.herokuapp.com --> for build to deploy production
  headers: {
    "content-type": "application/json",
  },
});
