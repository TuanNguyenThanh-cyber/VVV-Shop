import {
  FORGOT_REQUEST,
  FORGOT_SUCCESS,
  FORGOT_FAILURE,
} from "../constants/forgotConstants";
import forgotAPI from "../../services/forgotAPI";

export function forgotAction(email) {
  return async (dispatch) => {
    dispatch({ type: FORGOT_REQUEST });
    try {
      const { data } = await forgotAPI(email);
      dispatch({ type: FORGOT_SUCCESS, payload: { data } });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: FORGOT_FAILURE,
        payload: { error: error.response },
      });
    }
  };
}
