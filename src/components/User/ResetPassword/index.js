import React from "react";
import "./ResetPassword.scss";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { resetPasswordAcion } from "../../../redux/actions/resetPasswordAction";
import jwt_decode from "jwt-decode";
import { Redirect } from "react-router";

// Tạo schema validation
const schema = yup.object().shape({
  password: yup
    .string()
    .required("Password can not empty")
    .min(8, "Password must be 8 characters or more"),
  retypePassword: yup
    .string()
    .required("Retype password can not empty")
    .oneOf([yup.ref("password"), null], "Password does not match"),
});

export default function ResetPassword() {
  const token = localStorage.getItem("auth_token");
  var decoded = jwt_decode(token);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });

  let { data } = useSelector((state) => state.resetPasswordReducer);

  if (data) {
    alert("Đã đổi thành công mật khẩu mới ! Vui lòng đăng nhập lại !");
    data = null;
    return <Redirect to="/login"></Redirect>;
  }

  const handleResetPassword = (value) => {
    let dataResetPassword = {
      password: value.password,
    };
    dispatch(resetPasswordAcion(decoded._id, dataResetPassword));
  };
  return (
    <div>
      <div class="row box">
        <div class="col-lg-12">
          <div class="infor-form">
            <form onSubmit={handleSubmit(handleResetPassword)}>
              <h3 class="title">Đổi mật khẩu</h3>
              <div class="form-group">
                <label for="password">Mật khẩu mới</label>
                <div class="input-icons">
                  <input
                    id="password"
                    class="form-control form__input"
                    type="password"
                    name="password"
                    placeholder="Nhập mật khẩu mới"
                    {...register("password")}
                  />
                </div>
              </div>
              {errors.password && (
                <div className="alert alert-danger">
                  {errors.password.message}
                </div>
              )}
              <div class="form-group">
                <label for="password">Xác nhận mật khẩu</label>
                <div class="input-icons">
                  <input
                    id="password"
                    class="form-control form__input"
                    type="password"
                    name="password"
                    placeholder="Nhập mật khẩu xác nhận"
                    {...register("retypePassword")}
                  />
                </div>
              </div>
              {errors.retypePassword && (
                <div className="alert alert-danger">
                  {errors.retypePassword.message}
                </div>
              )}
              <div class="form-group">
                <button
                  type="submit"
                  class="btn btn-submit"
                  disabled={!isValid}
                >
                  Submit
                </button>
              </div>
            </form>
            <div class="gap-sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
