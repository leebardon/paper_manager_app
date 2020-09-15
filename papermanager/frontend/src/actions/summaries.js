import { CREATE_SUMMARY } from "./types";

// CREATE SUMMARY
export const createSummary = (summary) => (dispatch) => {
  axios
    .post("/api/summaries/", summary)
    .then((res) => {
      dispatch({
        type: CREATE_SUMMARY,
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
