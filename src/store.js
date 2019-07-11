import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/index";
import { createLogger } from "redux-logger";

const initialState = {};

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(createLogger())
);
export default store;
