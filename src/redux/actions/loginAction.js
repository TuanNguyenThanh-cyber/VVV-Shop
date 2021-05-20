import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../constants/loginConstant";
import authAPI from "../../services/authAPI";

export function login(value) {
  return async (dispacth) => {
    dispacth({ type: LOGIN_REQUEST });
    try {
      const { data } = await authAPI.login(value);
      // Lưu thông tin xuống localStorage để giữ trạng thái đăng nhập khi user tắt web
      localStorage.setItem("userInfo", JSON.stringify(data));
      dispacth({ type: LOGIN_SUCCESS, payload: { data } });
    } catch (error) {
      dispacth({
        type: LOGIN_FAILURE,
        payload: { error: error.response.data.errors },
      });
    }
  };
}
