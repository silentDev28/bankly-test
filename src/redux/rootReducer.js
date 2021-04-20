import { combineReducers } from "redux";
import isLoginReducer from "./checkLogin";
import userReducer from "./userReducer";
const rootReducer = combineReducers({
  userCredentails: userReducer,
  isLogedIn: isLoginReducer,
});
export default rootReducer;
