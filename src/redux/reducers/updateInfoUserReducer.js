import {
  UPDATE_INFOUSER_REQUEST,
  UPDATE_INFOUSER_FAILURE,
  UPDATE_INFOUSER_SUCCESS,
} from "../constants/updateInfoUserConstant";
const initialState = {
  dataUpdateUser: null,
  isLoading: false,
  error: null,
};

function updateInfoUserReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_INFOUSER_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case UPDATE_INFOUSER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        dataUpdateUser: action.payload.data,
      };
    }
    case UPDATE_INFOUSER_FAILURE: {
      return { ...state, isLoading: false, error: action.payload.error };
    }
    default:
      return state;
  }
}

export default updateInfoUserReducer;
