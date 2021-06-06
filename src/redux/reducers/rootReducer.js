import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import signupReducer from './signupReducer';
import productsReducer from './productsReducer';
import blogReducer from './blogReducer'

const rootReducer = combineReducers({
  // Nơi khai báo các reducer con
  loginReducer,
  signupReducer,
  productsReducer,
  blogReducer
});

export default rootReducer;