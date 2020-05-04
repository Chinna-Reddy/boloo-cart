import axios from "axios";

export const BASE_API_URL = "https://cors-anywhere.herokuapp.com/https://api.bol.com/catalog/v4/";


const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

export default axiosInstance;