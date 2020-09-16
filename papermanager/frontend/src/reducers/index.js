/* A reducer is a fucntion that evaluates an action and
sends down a state, depending on what the action does */

import { combineReducers } from "redux";
import papers from "./papers";
import errors from "./errors";
import messages from "./messages";

export default combineReducers({
  papers: papers,
  errors: errors,
  messages: messages,
});
