import React from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from "reactstrap";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaUserAlt, FaAddressCard } from "react-icons/fa";
import { RiLockPasswordFill, RiLockPasswordLine } from "react-icons/ri";
import { Link, Redirect } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../redux/actions/signupAction";
import { Loading } from "../Loading";
import "./Form.scss";
import Swal from 'sweetalert2';

// Regex VietNam phone number
const phoneRegVn = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

// Tạo schema validation
const schema = yup.object().shape({
  name: yup.string().required("Name can not empty"),
  email: yup
    .string()
    .required("Email can not empty")
    .email("Email has wrong format"),
  phone: yup
    .string()
    .required("Phone can not empty")
    .matches(phoneRegVn, "Phone has wrong format"),
  address: yup.string().required("Address can not empty"),
  password: yup
    .string()
    .required("Password can not empty")
    .min(8, "Password must be 8 characters or more"),
  retypePassword: yup
    .string()
    .required("Retype password can not empty")
    .oneOf([yup.ref("password"), null], "Password does not match"),
});

export default function FormSignup() {
  const dispatch = useDispatch();
  const { userInfo, isLoading, error } = useSelector(
    (state) => state.signupReducer
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });

  const handleSignup = (value) => {
    let dataUser = {
      name: value.name,
      email: value.email,
      phone: value.phone,
      address: value.address,
      password: value.password,
      avatar: "https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-3&_nc_sid=7206a8&_nc_ohc=kD8TgOu1pzYAX8JAzIl&_nc_ht=scontent.fsgn5-6.fna&oh=81482383c01711bdee6a54cf816d5d9c&oe=60E7F2F8"
    };
    console.log(dataUser);
    dispatch(signup(dataUser));
    
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  if(localStorage.getItem("userSignUp") !== null){
    Swal.fire({
      icon: 'success',
      title: 'Đăng kí thành công',
      text: 'Vui lòng đăng nhập tài khoản',
    })
    localStorage.removeItem("userSignUp");
    
    return(
      <Redirect from="/signup" to="/login"></Redirect>
    )
  }

  console.log(error);
  console.log(userInfo);
  return (
    <form onSubmit={handleSubmit(handleSignup)}>
      <div className="container">
        <h3 className="form-title">Đăng ký</h3>
        <br />
        <div className="form-container">
          <InputGroup className="form-inputGroup">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <FaUserAlt></FaUserAlt>
              </InputGroupText>
            </InputGroupAddon>
            <input
              className="form-input"
              placeholder="Name"
              {...register("name")}
            />
          </InputGroup>
          {errors.name && (
            <div className="alert alert-danger">{errors.name.message}</div>
          )}
          <InputGroup className="form-inputGroup">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <MdEmail></MdEmail>
              </InputGroupText>
            </InputGroupAddon>
            <input
              className="form-input"
              placeholder="Email"
              {...register("email")}
            />
          </InputGroup>
          {errors.email && (
            <div className="alert alert-danger">{errors.email.message}</div>
          )}
          <InputGroup className="form-inputGroup">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <FaPhoneAlt></FaPhoneAlt>
              </InputGroupText>
            </InputGroupAddon>
            <input
              className="form-input"
              placeholder="Phone"
              {...register("phone")}
            />
          </InputGroup>
          {errors.phone && (
            <div className="alert alert-danger">{errors.phone.message}</div>
          )}
          <InputGroup className="form-inputGroup">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <FaAddressCard></FaAddressCard>
              </InputGroupText>
            </InputGroupAddon>
            <input
              className="form-input"
              placeholder="Address"
              {...register("address")}
            />
          </InputGroup>
          {errors.address && (
            <div className="alert alert-danger">{errors.address.message}</div>
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
          {error && <div className="alert alert-danger">{error.data.errors[0]} <br/> {error.data.errors[1]}</div>}
          <div className="center">
            <button type="submit" className="btn btn-form" disabled={!isValid}>
              Đăng ký
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
