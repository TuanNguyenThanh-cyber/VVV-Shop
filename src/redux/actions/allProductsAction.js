import {
  ALL_PRODUCTS_CONSTANT_FAILURE,
  ALL_PRODUCTS_CONSTANT_REQUEST,
  ALL_PRODUCTS_CONSTANT_SUCCESS,
} from "../constants/allProductsConstant";
import productsAPI from "../../services/productsAPI";

export function allProductsAction() {
  return async (dispatch) => {
    dispatch({ type: ALL_PRODUCTS_CONSTANT_REQUEST });
    try {
      const { data } = await productsAPI.allProducts();
      dispatch({ type: ALL_PRODUCTS_CONSTANT_SUCCESS, payload: { data } });
    } catch (error) {
      console.log(error);
      dispatch({
        type: ALL_PRODUCTS_CONSTANT_FAILURE,
        payload: { error: error.response },
      });
    }
  };
}
