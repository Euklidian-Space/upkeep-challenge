import axios from "axios";
import { flow } from "lodash/fp";
import { upkeepCredentials } from "./secrets.json";
const baseURL = "https://api.onupkeep.com/api/v2";

const login = () => axios.post(`${baseURL}/auth`, {
  email: upkeepCredentials.email,
  password: upkeepCredentials.password
})
  .then(resp => resp.data);

const mergeOptionsToQueryString = reqParams => Object.entries(reqParams.opts)
  .reduce((result, pair) => {
    const [option, val] = pair;
    const { query } = result;
    return {
      ...result,
      query: query + `${option}=${val}&`
    }
  }, reqParams);

const getAllWorkOrders = flow(
  mergeOptionsToQueryString,
  ({ query, token }) => axios.get(`${baseURL}/work-orders?${query}`, { headers: { "Session-Token": token } })
    .then(resp => resp.data)
);

export default {
  login,
  getAllWorkOrders
};

