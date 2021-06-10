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
<<<<<<< HEAD
import updateInfoUserReducer from './updateInfoUserReducer';
=======
import productDetailReducer from './productDetailReducer'

>>>>>>> be40d80c4f7dd8dda159e46bfdf6c16e2a5a828f

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
<<<<<<< HEAD
  updateInfoUserReducer,
=======
  productDetailReducer
>>>>>>> be40d80c4f7dd8dda159e46bfdf6c16e2a5a828f
});

export default rootReducer;