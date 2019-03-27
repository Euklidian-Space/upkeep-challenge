import axios from "axios";
import { flow } from "lodash/fp";
import { upkeepCredentials } from "./secrets.json";
const baseURL = "https://api.onupkeep.com/api/v2";

const login = () => axios.post(`${baseURL}/auth`, {
  email: upkeepCredentials.email,
  password: upkeepCredentials.password
})
  .then(resp => resp.data);

const mergeOptionsToQueryString = opts => Object.entries(opts)
  .reduce((query, pair) => {
    const [option, val] = pair;
    return query + `${option}=${val}`;
  }, "");

const getAllWorkOrders = flow(
  mergeOptionsToQueryString,
  query => axios.get(`${baseURL}/work-orders?${query}`)
    .then(resp => resp.data)
);

export default {
  login,
  getAllWorkOrders
};

