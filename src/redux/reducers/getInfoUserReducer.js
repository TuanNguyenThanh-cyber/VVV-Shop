import {
  GET_INFOUSER_REQUEST,
  GET_INFOUSER_FAILURE,
  GET_INFOUSER_SUCCESS,
} from "../constants/getInfoUserConstant";
const initialState = {
  dataUser: null,
  isLoading: false,
  error: null,
};

function blogReducer(state = initialState, action) {
  switch (action.type) {
    case GET_INFOUSER_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case GET_INFOUSER_SUCCESS: {
      return { ...state, isLoading: false, dataUser: action.payload.data };
    }
    case GET_INFOUSER_FAILURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
    default:
      return state;
  }
}

export default blogReducer;
