import React, { useEffect, useRef, useState } from "react";
import jwt_decode from "jwt-decode";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import "./UserInfo.scss";

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
});

export default function UserInfo() {
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  const fileInputRef = useRef();
  const token = JSON.parse(localStorage.getItem("userLogin"));
  const decode = jwt_decode(token.auth_token);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });

  const handleClickImage = (event) => {
    event.preventDefault();
    fileInputRef.current.click();
  };

  const handleInputImage = (event) => {
    const file = event.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      setImage(file);
    } else {
      setImage(null);
    }
  };

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  console.log(preview);
  return (
    <div>
      <div className="row box">
        <div className="col-lg-6">
          <div className="img-upload text-center">
            {preview ? (
              <img src={preview} alt="" />
            ) : (
              <img src={decode.avatar}></img>
            )}
            <p className="c-light-text">
              Dung lượng file tối đa 1 MB Định dạng: .JPEG, .PNG
            </p>
            <button className="label-for-input" onClick={handleClickImage}>
              Thay đổi
            </button>
            <input
              style={{ display: "none" }}
              type="file"
              ref={fileInputRef}
              onChange={handleInputImage}
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="infor-form">
            <form action>
              <h3 className="title">Thông tin tài khoản</h3>
              <div className="form-group">
                <label htmlFor="my-input">Họ và tên</label>
                <input
                  id="my-input"
                  className="form-control form__input"
                  type="text"
                  name="name"
                  {...register("name")}
                />
              </div>
              {errors.name && (
                <div className="alert alert-danger">{errors.name.message}</div>
              )}
              <div className="form-group">
                <label htmlFor="my-input">Số điện thoại</label>
                <input
                  id="my-input"
                  className="form-control form__input"
                  type="text"
                  name
                  {...register("phone")}
                />
              </div>
              {errors.phone && (
                <div className="alert alert-danger">{errors.phone.message}</div>
              )}
              <div className="form-group">
                <label htmlFor="my-input">Email</label>
                <input
                  id="my-input"
                  className="form-control form__input"
                  type="text"
                  name
                  {...register("email")}
                />
              </div>
              {errors.email && (
                <div className="alert alert-danger">{errors.email.message}</div>
              )}
              <div className="form-group">
                <label htmlFor>Địa chỉ</label>
                <textarea
                  name
                  id
                  className="form-control form__input"
                  style={{ height: 100 }}
                  defaultValue={""}
                  {...register("address")}
                />
              </div>
              {errors.address && (
                <div className="alert alert-danger">
                  {errors.address.message}
                </div>
              )}
              <button
                type="submit"
                className="btn btn-submit"
                disabled={!isValid}
              >
                Cập nhật
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
