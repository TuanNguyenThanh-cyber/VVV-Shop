import {
  ORDER_PRODUCT_REQUEST,
  ORDER_PRODUCT_SUCCESS,
  ORDER_PRODUCT_FAILURE,
} from "../constants/orderProductConstant";
const initialState = {
  dataOrderProduct: localStorage.getItem("dataOrderProduct"),
  isLoading: false,
  error: null,
};

function orderProductReducer(state = initialState, action) {
  switch (action.type) {
    case ORDER_PRODUCT_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case ORDER_PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        dataOrderProduct: action.payload.data,
      };
    }
    case ORDER_PRODUCT_FAILURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
    default:
      return state;
  }
}

export default orderProductReducer;
