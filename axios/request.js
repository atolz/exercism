import axios from "axios";

export const baseUrl = axios.create({
  baseURL: "https://exercism.org/api/v2/",
});
