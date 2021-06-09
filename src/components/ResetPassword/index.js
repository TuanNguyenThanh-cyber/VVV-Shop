import React, { useState } from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaUserAlt, FaAddressCard } from "react-icons/fa";
import { RiLockPasswordFill, RiLockPasswordLine } from "react-icons/ri";
import { Link, Redirect, useParams } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./style.scss";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { resetPasswordAcion } from "../../redux/actions/resetPasswordAction";
import { Loading } from "../Loading";
import jwt_decode from "jwt-decode";

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
  const { token } = useParams();
  console.log(token);
  window.localStorage.setItem("auth_token", token);

  var decoded = jwt_decode(token);
  console.log(decoded);

  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector(
    (state) => state.resetPasswordReducer
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });

  const handleResetPassword = (value) => {
    let dataResetPassword = {
      password: value.password,
    };
    dispatch(resetPasswordAcion(decoded._id, dataResetPassword));
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <form onSubmit={handleSubmit(handleResetPassword)}>
      <div className="container">
        <h3 className="form-title">Reset Password</h3>
        <br />
        <div className="form-container">
          <InputGroup className="form-inputGroup">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <RiLockPasswordFill></RiLockPasswordFill>
              </InputGroupText>
            </InputGroupAddon>
            <input
              className="form-input"
              type="password"
              placeholder="Password"
              {...register("password")}
            />
          </InputGroup>
          {errors.password && (
            <div className="alert alert-danger">{errors.password.message}</div>
          )}
          <InputGroup className="form-inputGroup">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <RiLockPasswordLine></RiLockPasswordLine>
              </InputGroupText>
            </InputGroupAddon>
            <input
              className="form-input"
              type="password"
              placeholder="Retype Password"
              {...register("retypePassword")}
            />
          </InputGroup>
          {errors.retypePassword && (
            <div className="alert alert-danger">
              {errors.retypePassword.message}
            </div>
          )}
          <div className="center">
            <button type="submit" className="btn btn-form">
              Xác nhận
            </button>
          </div>
          <p style={{ textAlign: "center" }}>
            <Link to="/forgotPassword">Quên mật khẩu </Link>
            hoặc
            <Link to="/login"> Đăng nhập</Link>
          </p>
        </div>
      </div>
    </form>
  );
}
