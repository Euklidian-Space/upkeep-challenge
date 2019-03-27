import upkeepAPI from "../API";
import appDataActions from "./appData";

const { 
  login 
} = appDataActions(upkeepAPI);

export {
  login
};