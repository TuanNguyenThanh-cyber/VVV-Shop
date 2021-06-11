import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import { allProductsAction } from "../../redux/actions/allProductsAction";
import { getInfoUserAction } from "../../redux/actions/getInfoUserAction";
import { formatMoneyVND } from "../../utils/formatMoneyVND";

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const { dataAllProducts } = useSelector((state) => state.allProductsReducer);
  const { dataUser } = useSelector((state) => state.getInfoUserReducer);

  // Get info user
  let objInfoUser = {};
  const token = localStorage.getItem("auth_token");
  var decoded = jwt_decode(token);
  objInfoUser = { ...decoded };

  // Order Cart
  let orderCart = JSON.parse(localStorage.getItem("orderCart"));
  let arrayIdOrderCart = Object.keys(orderCart);
  let arrayDataOrderCart = [];

  useEffect(() => {
    dispatch(allProductsAction());
    dispatch(getInfoUserAction(decoded._id));
  }, []);

  if (dataAllProducts) {
    dataAllProducts.map((item) => {
      arrayIdOrderCart.map((id) => {
        if (item._id === id) {
          arrayDataOrderCart.push({ ...item, amount: 1 });
        }
      });
    });
  }

  console.log("arrayDataOrderCart", arrayDataOrderCart);

  const handleAmountOrder = (item, status) => {
    if (status) {
      item.amount = item.amount + 1;
    } else {
      item.amount = item.amount - 1;
    }
  };

  return (
    <div>
      <div className="bg-breadcrumb">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Trang chủ</a>
            </li>
            <li className="breadcrumb-item active">Giỏ hàng</li>
          </ol>
        </div>
      </div>
      <div className="container">
        <div className="row no-gutters">
          <div className="col-8 box-all-sp">
            {arrayDataOrderCart.map((item) => (
              <div className="row no-gutters box-sp">
                <div className="col-3">
                  <img src={item.images[0]} alt />
                </div>
                <div className="col-4 second">
                  <p>{item.name}</p>
                  <div className="row">
                    <div className="col-3">
                      <button className="btn btn-danger mt-3">Xóa</button>
                    </div>
                  </div>
                </div>
                <div className="col-5 third">
                  <div className="row no-gutters">
                    <div className="col-6 no-gutters">
                      <p className="now-price">
                        {formatMoneyVND(item.originalPrice)}
                      </p>
                      <div className="row no-gutters">
                        <div className="col-8">
                          <p className="real-price">25.990.000đ</p>
                        </div>
                        <div className="col-4">
                          <p>-12%</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="buttons_added">
                        <button
                          className="minus is-form"
                          type="button"
                          onClick={() => handleAmountOrder(item, false)}
                          disabled={item.amount === 0}
                        >
                          -
                        </button>
                        <span className="input-qty">{item.amount}</span>
                        <button
                          className="plus is-form"
                          type="button"
                          onClick={() => handleAmountOrder(item, true)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-4 info">
            <div className="row box-info">
              <div className="col no-gutters">
                <div className="row title-info no-gutters">
                  <div className="col-8">
                    <p>Địa chỉ nhận hàng</p>
                  </div>
                  <div className="col-4">
                    <a href>Thay đổi</a>
                  </div>
                </div>
                <div className="row name-sdt no-gutters">
                  <div className="col-7">
                    <p>{dataUser && dataUser.name}</p>
                  </div>
                  <div className="col-5">
                    <p>{dataUser && dataUser.phone}</p>
                  </div>
                </div>
                <div className="row no-gutters detail-adress">
                  <div className="col">
                    <p>
                      {dataUser && dataUser.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row box-info">
              <div className="col">
                <p className="title-info">Nhập mã khuyến mãi</p>
                <div className="sale-blank">
                  <input type="text" placeholder className="input" />
                  <button className="button btn-apply">Áp Dụng</button>
                </div>
              </div>
            </div>
            <div className="row box-info">
              <div className="col">
                <div className="row no-gutters title-info">
                  <div className="col-5">
                    <p>Tạm tính</p>
                  </div>
                  <div className="col-7">
                    <p className="price">44.444.000đ</p>
                  </div>
                </div>
                <div className="row no-gutters sum">
                  <div className="col-5">
                    <p>Thành tiền</p>
                  </div>
                  <div className="col-7">
                    <p className="price-red">44.444.000đ</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col">
                <a href className="btn-order">
                  Tiến hành đặt hàng
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
