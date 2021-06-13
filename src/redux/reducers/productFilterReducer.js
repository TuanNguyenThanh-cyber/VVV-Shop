import {
  PRODUCT_FILTER_REQUEST,
  PRODUCT_FILTER_SUCCESS,
  PRODUCT_FILTER_FAILURE,
} from "../constants/productFilterConstant";
const initialState = {
  dataProductFilter: null,
  isLoading: false,
  error: null,
};

function productFilterReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_FILTER_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case PRODUCT_FILTER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        dataProductFilter: action.payload.data,
      };
    }
    case PRODUCT_FILTER_FAILURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
    default:
      return state;
  }
}

export default productFilterReducer;
