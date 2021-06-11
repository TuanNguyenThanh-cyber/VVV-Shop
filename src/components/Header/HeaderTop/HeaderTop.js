import React, { useState } from "react";
import { FaPhoneAlt, FaUser, FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Collapse } from "reactstrap";
import jwt_decode from "jwt-decode";
import { getInfoUserAction } from "../../../redux/actions/getInfoUserAction";
import "./HeaderTop.scss";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export default function HeaderTop() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  let objInfoUser = {};

  const handleLogout = () => {
    let answer = window.confirm("Are you sure about that ?");
    if (answer) {
      localStorage.removeItem("auth_token");
      localStorage.removeItem("userSignUp");
    }
  };

  const handleGetInfoUser = (id) => {
    dispatch(getInfoUserAction(id));
  };

  const { dataUpdateUser } = useSelector(
    (state) => state.updateInfoUserReducer
  );

  if (localStorage.getItem("auth_token") !== null) {
    const token = localStorage.getItem("auth_token");
    var decoded = jwt_decode(token);
    objInfoUser = { ...decoded };
  }

  console.log(objInfoUser._id);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="HeaderTop">
      <div className="container">
        <div className="row">
          <div className="HeaderTop_Left col-6">
            <a href="tel: 0123456789">
              <FaPhoneAlt className="HeaderTop_LeftIcon"></FaPhoneAlt>
              <span>Holine: 0123456798</span>
            </a>
          </div>
          <div className="HeaderTop_Right col-6">
            <div className="HeaderTop_RightContainer">
              <button className="HeaderTop_Right-BtnAccount" onClick={toggle}>
                {localStorage.getItem("auth_token") === null ? (
                  <FaUser className="HeaderTop_Right-BtnIcon"></FaUser>
                ) : (
                  <img
                    src={decoded.avatar}
                    className="HeaderTop_Right-AvatarIcon"
                  />
                )}
                {localStorage.getItem("auth_token") === null ? (
                  <span>Tài khoản</span>
                ) : (
                  <span>{dataUpdateUser ? dataUpdateUser.name : decoded.name}</span>
                )}
                <FaAngleDown className="HeaderTop_Right-BtnIcon"></FaAngleDown>
                <Collapse className="HeaderTop_Right-Collapse" isOpen={isOpen}>
                  {localStorage.getItem("auth_token") === null ? (
                    <ul>
                      <li>
                        <Link to="/login">Đăng nhập</Link>
                      </li>
                      <li>
                        <Link to="/signup">Đăng ký</Link>
                      </li>
                    </ul>
                  ) : (
                    <ul>
                      <li>
                        <Link
                          to="/user"
                          onClick={() => handleGetInfoUser(objInfoUser._id)}
                        >
                          Thông tin tài khoản
                        </Link>
                      </li>
                      <li>
                        <Link to="/login" onClick={handleLogout}>
                          Đăng xuất
                        </Link>
                      </li>
                    </ul>
                  )}
                </Collapse>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
