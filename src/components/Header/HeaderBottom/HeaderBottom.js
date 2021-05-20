import React, { useState } from "react";
import { Collapse, Button, Nav, NavItem } from "reactstrap";
import { FaList } from "react-icons/fa";

import "./HeaderBottom.scss";
import { Link, NavLink } from "react-router-dom";

export default function HeaderBottom() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="HeaderBottom">
      <div className="container">
        <div className="row">
          <div className="HeaderBottom_AllCategory col-3">
            <Button className="HeaderBottom_btnCategory" onClick={toggle}>
              <span className="HeaderBottom_Text">All Category</span>
              <FaList className="HeaderBottom_Icon"></FaList>
            </Button>
            <Collapse className="HeaderBottom_Collapse" isOpen={isOpen}>
              <ul>
                <li>
                  <Link to="#">PC Gaming</Link>
                </li>
                <li>
                  <Link to="#">Laptop</Link>
                </li>
                <li>
                  <Link to="#">Điện Thoại</Link>
                </li>
                <li>
                  <Link to="#">Phụ Kiện</Link>
                </li>
                <li>
                  <Link to="#">Loa/Tai Nghe</Link>
                </li>
                <li>
                  <Link to="#">Bàn phím</Link>
                </li>
                <li>
                  <Link to="#">Chuột/Lót chuột</Link>
                </li>
                <li>
                  <Link to="#">Màn hình</Link>
                </li>
              </ul>
            </Collapse>
          </div>
          <div className="HeaderBottom_NavMenu col-9">
            <Nav className="HeaderBottom_Nav">
              <NavItem className="HeaderBottom_NavItem">
                <NavLink activeClassName="HeaderBottom_NavLinkSelected" className="HeaderBottom_NavLink" to="/home">Trang chủ</NavLink>
              </NavItem>
              <NavItem className="HeaderBottom_NavItem">
                <NavLink activeClassName="HeaderBottom_NavLinkSelected" className="HeaderBottom_NavLink" to="/news">Tin tức</NavLink>
              </NavItem>
              <NavItem className="HeaderBottom_NavItem">
                <NavLink activeClassName="HeaderBottom_NavLinkSelected" className="HeaderBottom_NavLink" to="/about">Về VVV</NavLink>
              </NavItem>
              <NavItem className="HeaderBottom_NavItem">
                <NavLink activeClassName="HeaderBottom_NavLinkSelected" className="HeaderBottom_NavLink" to="/contact">Liên hệ</NavLink>
              </NavItem>
            </Nav>
          </div>
        </div>
      </div>
    </div>
  );
}
