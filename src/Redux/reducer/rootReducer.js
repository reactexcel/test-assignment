import { combineReducers } from "redux";
import get from "./get";
import update from "./update";

const rootReducer = combineReducers({
  get: get,
  update: update,
});

export default rootReducer;
