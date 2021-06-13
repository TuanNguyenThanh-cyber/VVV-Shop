import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import { allProductsAction } from "../../redux/actions/allProductsAction";
import { formatMoneyVND } from "../../utils/formatMoneyVND";
import NoProduct from '../NoProduct';

export default function LoveProduct() {
  const dispatch = useDispatch();
  const { dataAllProducts } = useSelector((state) => state.allProductsReducer);
  let loveProduct = localStorage.getItem("wishList")
    ? JSON.parse(localStorage.getItem("wishList"))
    : [];
  let arrayIdLoveProduct = Object.keys(loveProduct);
  let arrayDataLoveProduct = [];

  useEffect(() => {
    dispatch(allProductsAction());
  }, []);

  if (dataAllProducts) {
    dataAllProducts.map((item) => {
      arrayIdLoveProduct.map((id) => {
        if (item._id === id) {
          arrayDataLoveProduct.push(item);
        }
      });
    });
  }

  const handleDeleteLoveProduct = (item) => {
    delete loveProduct[item._id];
    window.location.reload();
  }

  console.log(arrayDataLoveProduct);
  console.log(dataAllProducts);
  return (
    <div>
      <div className="bg-breadcrumb">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Trang chủ</a>
            </li>
            <li className="breadcrumb-item active">Yêu thích</li>
          </ol>
        </div>
      </div>
      <div className="container">
        <div className="row no-gutters mb-3">
          <div className="col box-all-sp">
            {arrayDataLoveProduct.length ? (
              arrayDataLoveProduct.map((item) => (
                <div className="row no-gutters box-sp">
                  <div className="col-2">
                    <img src={item.images[0]} alt="" />
                  </div>
                  <div className="col-4 second">
                    <p>{item.name}</p>
                    <div className="row">
                      <div className="col">
                        <button className="btn btn-danger" onClick={() => handleDeleteLoveProduct(item)}>Xóa</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 third">
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
                            <p className="discount">-12%</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <a href className="btn-add-cart">
                          Thêm vào giỏ hàng
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <NoProduct content="Oops! Chưa có sản phẩm yêu thích"></NoProduct>
              // <p>Chưa có sản phẩm nào</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
