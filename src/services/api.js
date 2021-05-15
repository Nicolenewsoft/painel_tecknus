import axios from "axios";

const api = axios.create({
  baseURL: "http://12a066bfdd85.ngrok.io/",
});

export default api;
