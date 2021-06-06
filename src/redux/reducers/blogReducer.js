import {
    BLOG_REQUEST,
    BLOG_SUCCESS,
    BLOG_FAILURE,
  } from "../constants/blogConstant";
  const initialState = {
    datablog: null,
    isLoading: false,
    error: null,
  };
  
  function blogReducer(state = initialState, action) {
    switch (action.type) {
      case BLOG_REQUEST: {
        return { ...state, isLoading: true, error: null };
      }
      case BLOG_SUCCESS: {
        return { ...state, isLoading: false, datablog: action.payload.data };
      }
      case BLOG_FAILURE: {
        return { ...state, isLoading: false, error: action.payload.error };
      }
      default:
        return state;
    }
  }
  
  export default blogReducer;
  