import {
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
} from "../constants/resetPasswordConstants";
import resetPasswordAPI from "../../services/resetPasswordAPI";
import Swal from 'sweetalert2';
import { Redirect, Route } from "react-router";

export function resetPasswordAcion(id, value) {
  return async (dispacth) => {
    dispacth({ type: RESET_PASSWORD_REQUEST });

    try {
      const { data } = await resetPasswordAPI(id, value);
      dispacth({ type: RESET_PASSWORD_SUCCESS, payload: { data } });
      Swal.fire({
            icon: 'success',
            title: 'Đổi mật khẩu thành công',
            text: 'Vui lòng ghi nhớ mật khẩu mới!',
          })
          // localStorage.removeItem("auth_token");
          // localStorage.removeItem("userSignUp");
          // return(
          //   <Redirect from="/user/resetPassword" to="/login"></Redirect>
          // )
          
    } catch (error) {
      dispacth({
        type: RESET_PASSWORD_FAILURE,
        payload: { error: error.response },
      });
    }
  };
}
