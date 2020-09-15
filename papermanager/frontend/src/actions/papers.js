/* any actions that we want to fire off go here including http requests */
import axios from "axios";

import { GET_PAPERS } from "./types";

// GET PAPERS
// we use the function dispatch to pass action to reducer
export const getPapers = () => (dispatch) => {
  axios
    .get("/api/papers/")
    .then((res) => {
      dispatch({
        type: GET_PAPERS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
