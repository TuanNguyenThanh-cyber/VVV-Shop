import React, { useEffect } from "react";
import { InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { forgotAction } from "../../redux/actions/forgotAction";
import { Loading } from "../Loading";

// Tạo schema validation
const schema = yup.object().shape({
  account: yup.string().required("Account can not empty"),
});

export default function ForgotPassword() {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector(
    (state) => state.forgotReducer
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });

  const handleForgot = (value) => {
    console.log(value.account);
    dispatch(forgotAction(value.account));
  };

  if (localStorage.getItem("auth_token") !== null) {
    return <Redirect to="/"></Redirect>;
  }

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <form onSubmit={handleSubmit(handleForgot)}>
      <div className="container">
        <h3 className="form-title">Quên mật khẩu</h3>
        <br />
        <div className="form-container">
          <InputGroup className="form-inputGroup">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <MdEmail></MdEmail>
              </InputGroupText>
            </InputGroupAddon>
            <input
              className="form-input"
              type="text"
              placeholder="Email"
              {...register("account")}
            />
          </InputGroup>
          {errors.account && (
            <div className="alert alert-danger">{errors.account.message}</div>
          )}
          {errors.password && (
            <div className="alert alert-danger">{errors.password.message}</div>
          )}
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="center">
            <button type="submit" className="btn btn-form">
              Xác nhận
            </button>
          </div>
          <p style={{ textAlign: "center" }}>
            <Link to="/login">Đăng nhập </Link>
            hoặc
            <Link to="/signup"> Đăng ký</Link>
          </p>
        </div>
      </div>
    </form>
  );
}
