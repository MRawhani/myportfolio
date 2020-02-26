import thunk from "redux-thunk";

import { authReducer } from "./auth-reducer";
import { portfolioReducer } from "./portfoliosReducer";
import { toolReducer } from "./toolsReducer";
import { blogsReducer,blogReducer } from "./blogsReducer";

import { createStore, applyMiddleware, compose, combineReducers } from "redux";

export const init = () => {
  const reducers = combineReducers({
    auth: authReducer,
    portfolios:portfolioReducer,
    tools: toolReducer,
    blogs: blogsReducer,
    blog:blogReducer
  });

  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));
  return store;
};
