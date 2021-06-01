import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../constants/loginConstant";
import authAPI from "../../services/authAPI";
import axios from "axios";


export function login(value) {
  return async (dispacth) => {
    dispacth({ type: LOGIN_REQUEST });
    try {
      const { data } = await authAPI.login(value);
      // Lưu thông tin xuống localStorage để giữ trạng thái đăng nhập khi user tắt web
      localStorage.setItem("userLogin", JSON.stringify(data));
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


// export function login(value){
//   return async (dispacth) => {
//     dispacth({type: LOGIN_REQUEST});
//     try {
//       const data = await fetch("http://127.0.0.1:8080/api/auth/login", {
//         method: "POST",
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//         body: JSON.stringify(value),
//       }).then(res => res.json());
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   }
// }