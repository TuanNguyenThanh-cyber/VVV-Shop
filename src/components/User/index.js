import React from "react";
import {
  Link,
  Switch,
  Route,
  BrowserRouter,
  NavLink,
  Redirect,
  useParams,
} from "react-router-dom";
import OrderList from "./OrderList";
import ResetPassword from "./ResetPassword";
import "./User.scss";
import UserInfo from "./UserInfo";

export default function User() {
  const handleLogout = () => {
    let answer = window.confirm("Are you sure about that ?");
    if (answer){
      localStorage.removeItem("auth_token");
      localStorage.removeItem("userSignUp");
      return <Redirect to="/login"></Redirect>;
    }
  };
  return (
    <div className="account">
      <div className="bg-breadcrumb">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Trang chủ</a>
            </li>
            <li className="breadcrumb-item active">Thông tin tài khoản</li>
          </ol>
        </div>
      </div>
      <div className="account-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="category-menu box">
                <h3 className="category-title c-light-text">TÀI KHOẢN</h3>
                <ul className="category-list">
                  <li className="category-list-item">
                    <NavLink activeClassName="active" to="/user/userInfo">
                      Thông tin tài khoản
                    </NavLink>
                  </li>
                  <li className="category-list-item">
                    <NavLink activeClassName="active" to="/user/orderList">
                      Danh sách đơn hàng (3)
                    </NavLink>
                  </li>
                  <li className="category-list-item">
                    <NavLink activeClassName="active" to="/user/restPassword">
                      Đổi mật khẩu
                    </NavLink>
                  </li>
                  <li className="category-list-item c-red">
                    <NavLink
                      activeClassName="active"
                      to="/login"
                      onClick={handleLogout}
                    >
                      Đăng xuất
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9 account-infor">
              <Switch>
                <Route exact path="/user/userInfo">
                  <UserInfo></UserInfo>
                </Route>
                <Route exact path="/user/orderList">
                  <OrderList></OrderList>
                </Route>
                <Route exact path="/user/restPassword">
                  <ResetPassword></ResetPassword>
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
