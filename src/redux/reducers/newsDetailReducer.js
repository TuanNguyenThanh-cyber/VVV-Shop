import {
    NEWS_DETAIL_REQUEST,
    NEWS_DETAIL_SUCCESS,
    NEWS_DETAIL_FAILURE,
  } from "../constants/newsDetailConstant";
  const initialState = {
    datanewsdetail: null,
    isLoading: false,
    error: null,
  };
  
  function newsDetailReducer(state = initialState, action) {
    switch (action.type) {
      case NEWS_DETAIL_REQUEST: {
        return { ...state, isLoading: true, error: null };
      }
      case NEWS_DETAIL_SUCCESS: {
        return { ...state, isLoading: false, datanewsdetail: action.payload.data };
      }
      case NEWS_DETAIL_FAILURE: {
        return { ...state, isLoading: false, error: action.payload.error };
      }
      default:
        return state;
    }
  }
  
  export default newsDetailReducer;
  