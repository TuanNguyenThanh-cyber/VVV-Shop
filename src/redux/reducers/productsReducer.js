import {
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
  PRODUCTS_FAILURE,
} from "../constants/productsConstant";
const initialState = {
  dataProducts: null,
  isLoading: false,
  error: null,
};

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCTS_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case PRODUCTS_SUCCESS: {
      return { ...state, isLoading: false, dataProducts: action.payload.data };
    }
    case PRODUCTS_FAILURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
    default:
      return state;
  }
}

export default productsReducer;
