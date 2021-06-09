import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../constants/loginConstant";
import authAPI from "../../services/authAPI";
// import axios from "axios";


export function login(value) {
  return async (dispacth) => {
    dispacth({ type: LOGIN_REQUEST });
    try {
      const { data } = await authAPI.login(value);
      // Lưu thông tin xuống localStorage để giữ trạng thái đăng nhập khi user tắt web
      localStorage.setItem("auth_token", data.auth_token);
      dispacth({ type: LOGIN_SUCCESS, payload: { data } });
    } catch (error) {
      console.log(error);
      dispacth({
        type: LOGIN_FAILURE,
        payload: { error: error.response.data.errors },
      });
    }
  };
}