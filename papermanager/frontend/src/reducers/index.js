/* A reducer is a fucntion that evaluates an action and
sends down a state, depending on what the action does */

import { combineReducers } from "redux";
import papers from "./papers";

export default combineReducers({
  papers: papers,
});
