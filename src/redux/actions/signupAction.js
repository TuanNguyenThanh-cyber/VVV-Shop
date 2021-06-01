import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from "../constants/signupConstant";
import authAPI from "../../services/authAPI";

export function signup(value) {
  return async (dispacth) => {
    dispacth({ type: SIGNUP_REQUEST });

    try {
      const { data } = await authAPI.register(value);
      // Lưu thông tin xuống local storage
      localStorage.setItem("userSignUp", JSON.stringify(data));
      dispacth({ type: SIGNUP_SUCCESS, payload: { data } });
    } catch (error) {
      dispacth({
        type: SIGNUP_FAILURE,
        payload: { error: error.response },
      });
    }
  };
}
