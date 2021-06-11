import {
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
} from "../constants/resetPasswordConstants";
import resetPasswordAPI from "../../services/resetPasswordAPI";

export function resetPasswordAcion(id, value) {
  return async (dispacth) => {
    dispacth({ type: RESET_PASSWORD_REQUEST });

    try {
      const { data } = await resetPasswordAPI(id, value);
      dispacth({ type: RESET_PASSWORD_SUCCESS, payload: { data } });
    } catch (error) {
      dispacth({
        type: RESET_PASSWORD_FAILURE,
        payload: { error: error.response },
      });
    }
  };
}
