import {
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
} from "../constants/resetPasswordConstants";
const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

function resetPasswordReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_PASSWORD_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case RESET_PASSWORD_SUCCESS: {
      return { ...state, isLoading: false, data: action.payload.data };
    }
    case RESET_PASSWORD_FAILURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
    default:
      return state;
  }
}

export default resetPasswordReducer;
