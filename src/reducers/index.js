import thunk from "redux-thunk";

import { authReducer } from "./auth-reducer";

import { createStore, applyMiddleware, compose, combineReducers } from "redux";

export const init = () => {
  const reducers = combineReducers({
    auth: authReducer
  });

  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));
  return store;
};
