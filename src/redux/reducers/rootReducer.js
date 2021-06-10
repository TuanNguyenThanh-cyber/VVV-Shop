import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import signupReducer from './signupReducer';
import productsReducer from './productsReducer';
import categoriesReducer from './categoriesReducer';
import blogReducer from './blogReducer';
import getInfoUserReducer from './getInfoUserReducer';
import forgotReducer from './forgotReducer';
import resetPasswordReducer from './resetPasswordReducer';
import newsDetailReducer from './newsDetailReducer';
import updateInfoUserReducer from './updateInfoUserReducer';
import productDetailReducer from './productDetailReducer'


const rootReducer = combineReducers({
  // Nơi khai báo các reducer con
  loginReducer,
  signupReducer,
  productsReducer,
  categoriesReducer,
  blogReducer,
  getInfoUserReducer,
  forgotReducer,
  resetPasswordReducer,
  newsDetailReducer,
  updateInfoUserReducer,
  productDetailReducer
});

export default rootReducer;