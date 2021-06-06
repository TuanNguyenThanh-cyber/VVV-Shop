import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import signupReducer from './signupReducer';
import productsReducer from './productsReducer'
import categoriesReducer from './categoriesReducer'

const rootReducer = combineReducers({
  // Nơi khai báo các reducer con
  loginReducer,
  signupReducer,
  productsReducer,
  categoriesReducer
});

export default rootReducer;