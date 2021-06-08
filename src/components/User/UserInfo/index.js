import React, { useEffect, useRef, useState } from "react";
import jwt_decode from "jwt-decode";
import "./UserInfo.scss";

export default function UserInfo() {
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  const fileInputRef = useRef();
  const token = JSON.parse(localStorage.getItem("userLogin"));
  const decode = jwt_decode(token.auth_token);

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
            {preview ? <img src={preview} alt="" /> : <img src={decode.avatar}></img>}
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
                  accept="image/*"
                />
              </div>
              <div className="form-group">
                <label htmlFor="my-input">Số điện thoại</label>
                <input
                  id="my-input"
                  className="form-control form__input"
                  type="text"
                  name
                />
              </div>
              <div className="form-group">
                <label htmlFor="my-input">Ngày sinh</label>
                <input
                  id="my-input"
                  className="form-control form__input"
                  type="date"
                  name
                />
              </div>
              <div className="form-check">
                <label className="container-form-check">
                  <input type="radio" name="gender" defaultChecked />
                  <i className="cc">
                    <span className="label">Nam</span>
                  </i>
                  <span className="checkmark"></span>
                </label>
                <label className="container-form-check">
                  <input type="radio" name="gender" />
                  <i className="cc">
                    <span className="label">Nữ</span>
                  </i>
                  <span className="checkmark"></span>
                </label>
                <label className="container-form-check">
                  <input type="radio" name="gender" />
                  <i className="cc">
                    <span className="label">Khác</span>
                  </i>
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="form-row form-select">
                <div className="col-6">
                  <label htmlFor>Tỉnh/ Thành phố</label>
                  <select className="form-control form__input" name id>
                    <option value="selected">Hồ Chí Minh</option>
                    <option value>Long An</option>
                    <option value>Trà Vinh</option>
                    <option value>Đồng Nai</option>
                  </select>
                </div>
                <div className="col 6 form-group">
                  <label htmlFor>Quận/ Huyện</label>
                  <select className="form-control form__input" name id>
                    <option value="selected">Thủ Đức</option>
                    <option value="selected">Quận 1</option>
                    <option value="selected">Quận 2</option>
                    <option value="selected">Quận 3</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor>Địa chỉ cụ thể</label>
                <textarea
                  name
                  id
                  className="form-control form__input"
                  style={{ height: 60 }}
                  defaultValue={""}
                />
              </div>
              <button type="submit" className="btn btn-submit">
                Cập nhật
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
