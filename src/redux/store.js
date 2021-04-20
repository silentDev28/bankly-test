import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
const reduxLogger = [logger];
const store = createStore(rootReducer, applyMiddleware(...reduxLogger));
export default store;
