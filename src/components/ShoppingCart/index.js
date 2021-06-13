import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./style.scss";
import { allProductsAction } from "../../redux/actions/allProductsAction";
import { orderProductAction } from "../../redux/actions/orderProductAction";
import { getInfoUserAction } from "../../redux/actions/getInfoUserAction";
import { productFilterAction } from "../../redux/actions/productFilterAction";
import { formatMoneyVND } from "../../utils/formatMoneyVND";
import NoProduct from "../NoProduct";
import axios from "axios";

export default function ShoppingCart() {
  const dispatch = useDispatch();
  // const { dataAllProducts } = useSelector((state) => state.allProductsReducer);
  let { dataProductFilter } = useSelector(
    (state) => state.productFilterReducer
  );
  const { dataUser } = useSelector((state) => state.getInfoUserReducer);
  const { dataOrderProduct } = useSelector(
    (state) => state.orderProductReducer
  );

  // Get info user
  let objInfoUser = {};
  const token = localStorage.getItem("auth_token");
  var decoded = jwt_decode(token);
  objInfoUser = { ...decoded };
  let total = 0;

  // Order Cart
  let orderCart = localStorage.getItem("orderCart")
    ? JSON.parse(localStorage.getItem("orderCart"))
    : [];
  let arrayIdOrderCart = Object.keys(orderCart);
  console.log("arrayIdOrderCart", arrayIdOrderCart);
  const ObjOrderCart = {
    ids: arrayIdOrderCart,
  };
  let [arrayDataOrderCart, setArrayDataOrderCart] = useState([]);

  useEffect(() => {
    // dispatch(allProductsAction());
    dispatch(productFilterAction(ObjOrderCart));
    dispatch(getInfoUserAction(decoded._id));
  }, []);

  // if (dataAllProducts) {
  //   dataAllProducts.filter((item) => {
  //     if (orderCart.hasOwnProperty(item._id)) {
  //       arrayDataOrderCart.push({ ...item, amount: orderCart[item._id] });
  //       total += item.originalPrice * orderCart[item._id];
  //     }
  //     return orderCart.hasOwnProperty(item._id);
  //   });
  // }

  if (dataProductFilter) {
    dataProductFilter.map((item) => {
      if (orderCart.hasOwnProperty(item._id)) {
        total += item.originalPrice * orderCart[item._id];
      }
    });
  }

  const handleAmountOrder = (item, status, index) => {
    if (status) {
      orderCart[item._id]++;
    } else if (orderCart[item._id] <= 1) {
      delete orderCart[item._id];
    } else {
      orderCart[item._id]--;
    }
    localStorage.setItem("orderCart", JSON.stringify(orderCart));
    window.location.reload();
  };

  const checkout = () => {
    if (!arrayIdOrderCart.length) {
      alert("Bạn chưa có sản phẩm nào trong giỏ hàng");
      return;
    }
    // details
    let details = [];
    arrayIdOrderCart.forEach((id) => {
      const detail = {
        product: id,
        quantity: orderCart[id],
      };
      details.push(detail);
    });

    // deliver
    const deliver = {
      phone: dataUser.phone,
      address: dataUser.address,
      note: "",
    };

    // payment
    const payment = {
      transaction_id: "",
      method: "cash",
    };

    const body = {
      details,
      deliver,
      payment,
    };

    dispatch(orderProductAction(body));
  };

  const handleDeleteOrderProduct = (item) => {
    if(orderCart[item._id]){
      delete orderCart[item._id];
    }
  }

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
      <div className="container mb-5">
        <div className="row no-gutters">
          <div className="col-lg-8 box-all-sp">
            {dataProductFilter ? (
              dataProductFilter.map((item, index) => (
                <div className="row no-gutters box-sp">
                  <div className="col-3">
                    <img src={item.images[0]} alt="" />
                  </div>
                  <div className="col-4 second">
                    <p>{item.name}</p>
                    <div className="row">
                      <div className="col-3">
                        <button className="btn btn-danger mt-3" onClick={() => handleDeleteOrderProduct(item)}>Xóa</button>
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
                            onClick={() =>
                              handleAmountOrder(item, false, index)
                            }
                            disabled={orderCart[item._id] === 0}
                          >
                            -
                          </button>
                          <span className="input-qty">
                            {orderCart[item._id]}
                          </span>
                          <button
                            className="plus is-form"
                            type="button"
                            onClick={() => handleAmountOrder(item, true, index)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <NoProduct content="Oops! Chưa có sản phẩm trong giỏ hàng"></NoProduct>
            )}
          </div>
          <div className="col-lg-4 col- info">
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
                    <p>{dataUser && dataUser.address}</p>
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
                    <p className="price">{formatMoneyVND(total)}</p>
                  </div>
                </div>
                <div className="row no-gutters sum">
                  <div className="col-5">
                    <p>Thành tiền</p>
                  </div>
                  <div className="col-7">
                    <p className="price-red">{formatMoneyVND(total)}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col">
                <button onClick={() => checkout()} className="btn-order">
                  Tiến hành đặt hàng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
