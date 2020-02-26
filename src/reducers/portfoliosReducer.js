import {
  FETCH_PORTFOLIOS,
  FETCH_PORTFOLIOS_FAIL,
  FETCH_PORTFOLIOS_INIT,
} from "./../actions/types";
let INITIAL_STATE = {
  portfolios: {
    data: [],
    errors: []
  }
};
export const portfolioReducer = (state = INITIAL_STATE.portfolios, action) => {
  switch (action.type) {
    case FETCH_PORTFOLIOS_INIT:
      return { ...state, data: [], errors: [] };
    case FETCH_PORTFOLIOS:
      return { ...state, data: action.payload, errors: [] };
    case FETCH_PORTFOLIOS_FAIL:
      return { ...state, errors: action.payload };

    default:
      return state;
  }
};