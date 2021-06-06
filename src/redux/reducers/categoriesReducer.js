import {
  CATEGORIES_REQUEST,
  CATEGORIES_SUCCESS,
  CATEGORIES_FAILURE,
} from "../constants/categoriesConstant";

const initialState = {
  categoriesInfo: null,
  isLoading: false,
  error: null,
};

function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case CATEGORIES_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case CATEGORIES_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        categoriesInfo: action.payload.data,
      };
    }
    case CATEGORIES_FAILURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
    default:
      return state;
  }
}

export default categoriesReducer;
