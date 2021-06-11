import {
  UPDATE_INFOUSER_FAILURE,
  UPDATE_INFOUSER_SUCCESS,
  UPDATE_INFOUSER_REQUEST,
} from "../constants/updateInfoUserConstant";
import InfoUserAPI from "../../services/InfoUserAPI";

export function updateInfoUserAction(id, value) {
  return async (dispatch) => {
    dispatch({ type: UPDATE_INFOUSER_REQUEST });
    try {
      const { data } = await InfoUserAPI.updateInfoUser(id, value);
      dispatch({ type: UPDATE_INFOUSER_SUCCESS, payload: { data } });
      console.log(InfoUserAPI.getInfoUser(id));
    } catch (error) {
      console.log(error);
      dispatch({
        type: UPDATE_INFOUSER_FAILURE,
        payload: { error: error.response },
      });
    }
  };
}
