import {
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
  } from "../constants/signupConstant";
  
  const initialState = {
    userInfo: null,
    isLoading: false,
    error: null,
  };
  
  function signupReducer(state = initialState, action) {
    switch (action.type) {
      case SIGNUP_REQUEST: {
        return { ...state, isLoading: true, error: null };
      }
      case SIGNUP_SUCCESS: {
        return { ...state, isLoading: false, userInfo: action.payload.data };
      }
      case SIGNUP_FAILURE: {
        return { ...state, isLoading: false, error: action.payload.error };
      }
      default:
        return state;
    }
  }
  
  export default signupReducer;
  