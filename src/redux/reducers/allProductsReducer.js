import {
    ALL_PRODUCTS_CONSTANT_FAILURE,
    ALL_PRODUCTS_CONSTANT_REQUEST,
    ALL_PRODUCTS_CONSTANT_SUCCESS,
  } from "../constants/allProductsConstant";
  const initialState = {
    dataAllProducts: null,
    isLoading: false,
    error: null,
  };
  
  function allProductsReducer(state = initialState, action) {
    switch (action.type) {
      case ALL_PRODUCTS_CONSTANT_REQUEST: {
        return { ...state, isLoading: true, error: null };
      }
      case ALL_PRODUCTS_CONSTANT_SUCCESS: {
        return { ...state, isLoading: false, dataAllProducts: action.payload.data };
      }
      case ALL_PRODUCTS_CONSTANT_FAILURE: {
        return { ...state, isLoading: false, error: action.payload.error };
      }
      default:
        return state;
    }
  }
  
  export default allProductsReducer;
  