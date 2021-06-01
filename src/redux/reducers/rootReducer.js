import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import signupReducer from './signupReducer'

const rootReducer = combineReducers({
  // Nơi khai báo các reducer con
  loginReducer,
  signupReducer
});

export default rootReducer;