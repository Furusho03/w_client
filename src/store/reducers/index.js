import { combineReducers } from "redux";
// reducers
import { currentUser } from "./currentUser";
import { errors } from "./errors";
import { messages } from "./messages";

const rootReducer = combineReducers({
  currentUser,
  errors,
  messages,
});

export default rootReducer;
