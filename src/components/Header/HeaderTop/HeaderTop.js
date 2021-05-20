import React, { useState } from "react";
import { FaPhoneAlt, FaUser, FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Collapse } from "reactstrap";
import "./HeaderTop.scss";

export default function HeaderTop() {
  const [isOpen, setIsOpen] = useState(false);

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
                <FaUser className="HeaderTop_Right-BtnIcon"></FaUser>
                <span>Tài khoản</span>
                <FaAngleDown className="HeaderTop_Right-BtnIcon"></FaAngleDown>
                <Collapse className="HeaderTop_Right-Collapse" isOpen={isOpen}>
                  <ul>
                    <li>
                      <Link to="/login">Đăng nhập</Link>
                    </li>
                    <li>
                      <Link to="/signup">Đăng ký</Link>
                    </li>
                  </ul>
                </Collapse>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
