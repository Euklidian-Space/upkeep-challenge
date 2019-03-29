import upkeepAPI from "../API";
import appDataActions from "./appData";

const { 
  login,
  fetchWorkOrders,
  createWorkOrder
} = appDataActions(upkeepAPI);

export {
  login,
  fetchWorkOrders,
  createWorkOrder
};