import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducers from "./reducer/index";

const initialState = {};
const middleware = [thunk];

export const store = createStore(
  reducers,
  initialState,
  compose(composeWithDevTools(applyMiddleware(...middleware)))
);
