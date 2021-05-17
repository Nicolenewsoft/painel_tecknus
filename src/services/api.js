import axios from "axios";

const api = axios.create({
  baseURL: "http://665d16bdb8d0.ngrok.io/",
});

export default api;
