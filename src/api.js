import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "5efe6813c047c5a28d580b92e30a6262",
    language: "en-US"
  }
});

export default api;
