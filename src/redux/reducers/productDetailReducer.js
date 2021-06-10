import {
    PRODUCT_DETAIL_REQUEST,
    PRODUCT_DETAIL_SUCCESS,
    PRODUCT_DETAIL_FAILURE,
  } from "../constants/productDetailConstant";
  const initialState = {
    dataproductdetail: null,
    isLoading: false,
    error: null,
  };
  
  function productDetailReducer(state = initialState, action) {
    switch (action.type) {
      case PRODUCT_DETAIL_REQUEST: {
        return { ...state, isLoading: true, error: null };
      }
      case PRODUCT_DETAIL_SUCCESS: {
        return { ...state, isLoading: false, dataproductdetail: action.payload.data };
      }
      case PRODUCT_DETAIL_FAILURE: {
        return { ...state, isLoading: false, error: action.payload.error };
      }
      default:
        return state;
    }
  }
  
  export default productDetailReducer;
  