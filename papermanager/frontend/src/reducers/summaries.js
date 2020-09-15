import { GET_SUMMARIES, CREATE_SUMMARY } from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SUMMARIES:
      return action.payload;
    case CREATE_SUMMARY:
      return (state = action.payload);
    default:
      return state;
  }
}
