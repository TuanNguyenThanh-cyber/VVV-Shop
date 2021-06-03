import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./AllProducts.scss";
import { productsAction } from "../../redux/actions/productsAction";
import { Loading } from "../Loading";

export default function AllProducts() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsAction());
  }, []);

  const { dataProducts, isLoading, error } = useSelector(
    (state) => state.productsReducer
  );
  console.log(dataProducts);

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="AllProducts">
      <div className="bg-breadcrumb">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/home">Trang chủ</Link>
            </li>
            <li className="breadcrumb-item active">Tất cả sản phẩm</li>
          </ol>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {dataProducts &&
            dataProducts.map((item) => (
              <div className="col-3" key={item.id}>
                <div className="card mb-3">
                  <div className="row no-gutters">
                    <div className="col-12 my-fix">
                      <img src={item.images} />
                    </div>
                    <div className="col-12">
                      <div className="card-body">
                        <p className="card-title">{item.name}</p>
                        <p className="card-text">{item.orginalPrice} đ</p>
                        <button className="my-btn">Mua ngay</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
