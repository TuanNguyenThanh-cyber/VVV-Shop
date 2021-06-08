import React, { useState } from "react";
import { FaPhoneAlt, FaUser, FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Collapse } from "reactstrap";
import jwt_decode from "jwt-decode";
import {getInfoUserAction} from '../../../redux/actions/getInfoUserAction'
import "./HeaderTop.scss";
import { useDispatch } from "react-redux";

export default function HeaderTop() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  let objInfoUser = {};

  const handleLogout = () => {
    localStorage.removeItem("userLogin");
    localStorage.removeItem("userSignUp");
  };

  const handleGetInfoUser = (id) => {
    dispatch(getInfoUserAction(id));
  }

  if(localStorage.getItem("userLogin") !== null){
    const token = JSON.parse(localStorage.getItem('userLogin'));
    var decoded = jwt_decode(token.auth_token);
    objInfoUser = {...decoded};
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
                {localStorage.getItem('userLogin') === null ? <FaUser className="HeaderTop_Right-BtnIcon"></FaUser> : <img src={decoded.avatar} className="HeaderTop_Right-AvatarIcon" />} 
                {localStorage.getItem('userLogin') === null ? (<span>Tài khoản</span>) : (<span>{decoded.name}</span>)}
                <FaAngleDown className="HeaderTop_Right-BtnIcon"></FaAngleDown>
                <Collapse className="HeaderTop_Right-Collapse" isOpen={isOpen}>
                  {localStorage.getItem("userLogin") === null ? (
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
                        <Link to="/user" onClick={() => handleGetInfoUser(objInfoUser._id)}>Thông tin tài khoản</Link>
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
