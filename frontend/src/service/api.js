import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/", //aqui será a URL da nossa API
});

export default api;
