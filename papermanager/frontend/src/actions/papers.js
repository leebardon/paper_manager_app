/* any actions that we want to fire off go here including http requests */
import axios from "axios";
import { createMessage } from "./messages";

import { GET_PAPERS, ADD_PAPER, GET_ERRORS, UPDATE_PAPER } from "./types";

// GET PAPERS
// we use the function dispatch to pass action to reducer
export const getPapers = () => (dispatch) => {
  axios
    .get("/api/papers/")
    .then((res) => {
      dispatch(createMessage({ paperAdded: "Paper Added" }));
      dispatch({
        type: GET_PAPERS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// ADD PAPER
export const addPaper = (paper) => (dispatch) => {
  axios
    .post("/api/papers/", paper)
    .then((res) => {
      dispatch({
        type: ADD_PAPER,
        payload: res.data,
      });
    })
    .catch((err) => {
      const errors = {
        msg: err.response.data,
        status: err.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors,
      });
    });
};

// UPDATE PAPER
export const updatePaper = (updated) => (dispatch) => {
  const updatedInfo = {
    summary: updated.summary,
    future_work: updated.future_work,
  };
  axios
    .patch(`/api/papers/${updated.id}`, updatedInfo)
    .then((res) => {
      debugger;
      dispatch(createMessage({ paperUpdated: "Paper Updated" }));
      dispatch({
        type: UPDATE_PAPER,
        payload: res.data,
      });
    })
    .catch((err) => {
      const errors = {
        msg: err.response.data,
        status: err.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors,
      });
    });
};
