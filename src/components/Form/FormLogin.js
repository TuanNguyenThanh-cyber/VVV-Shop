import React, { useEffect } from "react";
import { InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./Form.scss";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/loginAction";
import { Loading } from "../Loading";

// Tạo schema validation
const schema = yup.object().shape({
  account: yup.string().required("Account can not empty"),
  password: yup
    .string()
    .required("Password can not empty")
    .min(8, "Password must be 8 characters or more"),
});

export default function FormLogin() {
  const dispatch = useDispatch();
  const { userInfo, isLoading, error } = useSelector(
    (state) => state.loginReducer
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });

  const handleLogin = (value) => {
    console.log(value);
    dispatch(login(value));
  };

  if(localStorage.getItem("userLogin") !== null){
    return (
      <Redirect to="/home"></Redirect>
    )
  }

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <div className="container">
        <h3 className="form-title">Đăng nhập</h3>
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
              placeholder="Email or Phone"
              {...register("account")}
            />
          </InputGroup>
          {errors.account && (
            <div className="alert alert-danger">{errors.account.message}</div>
          )}
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
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="center">
            <button type="submit" className="btn btn-form">
              Đăng nhập
            </button>
          </div>
          <p style={{ textAlign: "center" }}>
            <Link to="#">Quên mật khẩu </Link>
            hoặc
            <Link to="/signup"> Đăng ký</Link>
          </p>
        </div>
      </div>
    </form>
  );
}
