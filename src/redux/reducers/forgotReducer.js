import {
    FORGOT_REQUEST,
    FORGOT_SUCCESS,
    FORGOT_FAILURE,
  } from "../constants/forgotConstants";
  const initialState = {
    data: null,
    isLoading: false,
    error: null,
  };
  
  function forgotReducer(state = initialState, action) {
    switch (action.type) {
      case FORGOT_REQUEST: {
        return { ...state, isLoading: true, error: null };
      }
      case FORGOT_SUCCESS: {
        return { ...state, isLoading: false, dataUser: action.payload.data };
      }
      case FORGOT_FAILURE: {
        return { ...state, isLoading: false, error: action.payload.error };
      }
      default:
        return state;
    }
  }
  
  export default forgotReducer;
  