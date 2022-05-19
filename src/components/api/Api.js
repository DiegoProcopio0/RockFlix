import axios from "axios";

export const BASE_URL = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
});

