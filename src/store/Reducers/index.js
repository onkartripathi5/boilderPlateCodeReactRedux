import { combineReducers } from "redux";

import Auth from "./Auth";
import User from "./User";

const rootReducer = combineReducers({
  Auth,
  User,
});

export default rootReducer;
