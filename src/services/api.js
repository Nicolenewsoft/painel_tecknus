import axios from "axios";

const api = axios.create({
  baseURL: "http://474503a99c6e.ngrok.io/",
});

export default api;
