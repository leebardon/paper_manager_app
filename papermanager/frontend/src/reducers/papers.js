import { GET_PAPERS } from "../actions/types.js";

const initialState = {
  papers: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PAPERS:
      return {
        ...state /* spread operator includes everything in state */,
        papers: action.payload,
      };
    default:
      return state;
  }
}
