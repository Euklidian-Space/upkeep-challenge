import upkeepAPI from "../API";
import appDataActions from "./appData";

const { 
  login,
  fetchWorkOrders
} = appDataActions(upkeepAPI);

export {
  login,
  fetchWorkOrders
};