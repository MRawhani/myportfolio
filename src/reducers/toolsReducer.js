import {
  FETCH_TOOLS,
  FETCH_TOOLS_FAIL,
  FETCH_TOOLS_INIT,
} from "../actions/types";
let INITIAL_STATE = {
  tools: {
    data: [],
    errors: []
  }
};
export const toolReducer = (state = INITIAL_STATE.tools, action) => {
  switch (action.type) {
    case FETCH_TOOLS_INIT:
      return { ...state, data: [], errors: [] };
    case FETCH_TOOLS:
      return { ...state, data: action.payload, errors: [] };
    case FETCH_TOOLS_FAIL:
      return { ...state, errors: action.payload };

    default:
      return state;
  }
};