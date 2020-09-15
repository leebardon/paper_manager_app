import { GET_PAPERS, ADD_PAPER } from "../actions/types.js";

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
    case ADD_PAPER:
      return {
        ...state,
        papers: [...state.papers, action.payload],
      };
    default:
      return state;
  }
}
