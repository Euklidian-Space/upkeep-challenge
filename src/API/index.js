import axios from "axios";
import { upkeepCredentials } from "./secrets.json";
const baseURL = "https://api.onupkeep.com/api/v2";

export const login = () => axios.post(`${baseURL}/auth`, {
  email: upkeepCredentials.email,
  password: upkeepCredentials.password
});
  