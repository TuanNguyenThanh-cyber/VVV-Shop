import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import { allProductsAction } from "../../redux/actions/allProductsAction";
import { formatMoneyVND } from "../../utils/formatMoneyVND";

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const { dataAllProducts } = useSelector((state) => state.allProductsReducer);
  let orderCart = JSON.parse(localStorage.getItem("orderCart"));
  let arrayIdOrderCart = Object.keys(orderCart);
  let arrayDataOrderCart = [];

  useEffect(() => {
    dispatch(allProductsAction());
  }, []);

  if (dataAllProducts) {
    dataAllProducts.map((item) => {
      arrayIdOrderCart.map((id) => {
        if (item._id === id) {
          arrayDataOrderCart.push({...item, amount: 1});
        }
      });
    });
  }

  console.log("arrayDataOrderCart", arrayDataOrderCart);

  const handleAmountOrder = (item, status) => {};

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
                      <button className="btn btn-danger">Xóa</button>
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
                          onClick={handleAmountOrder(item, false)}
                        >
                          -
                        </button>
                        <span className="input-qty">{item.amount}</span>
                        <button
                          className="plus is-form"
                          type="button"
                          onClick={handleAmountOrder(item, true)}
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
                    <p>Huỳnh Văn A</p>
                  </div>
                  <div className="col-5">
                    <p>0375577127</p>
                  </div>
                </div>
                <div className="row no-gutters detail-adress">
                  <div className="col">
                    <p>
                      KTX khu A, ĐHQG, Khu Phố 6, Phường Linh Trung, Quận Thủ
                      Đức, Hồ Chí Minh
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
