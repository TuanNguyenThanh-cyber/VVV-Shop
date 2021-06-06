import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./AllProducts.scss";
import { productsAction } from "../../redux/actions/productsAction";
import { Loading } from "../Loading";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { formatMoneyVND } from "../../utils/formatMoneyVND";

export default function AllProducts() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productsAction(1));
  }, []);

  const { dataProducts, isLoading, error } = useSelector(
    (state) => state.productsReducer
  );
  console.log(dataProducts);

  const pageNumber = [];
  if (dataProducts) {
    for (let index = 1; index <= dataProducts.totalPage; index++) {
      pageNumber.push(index);
    }
  }

  const handlePagination = (value) => {
    console.log("Pagination", value.item);
    dispatch(productsAction(value.item));
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="AllProducts">
      <div className="bg-breadcrumb">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Trang chủ</Link>
            </li>
            <li className="breadcrumb-item active">Tất cả sản phẩm</li>
          </ol>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {dataProducts &&
            dataProducts.data.map((item) => (
              <div className="col-3" key={item.id}>
                <div className="card mb-3">
                  <div className="row no-gutters">
                    <div className="col-12 my-fix">
                      <img src={item.images} />
                    </div>
                    <div className="col-12">
                      <div className="card-body">
                        <p className="card-title">{item.name}</p>
                        <p className="card-text">
                          {formatMoneyVND(item.originalPrice)}
                        </p>
                        <button className="my-btn">Mua ngay</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="productsPagination">
          <Pagination aria-label="Page navigation example">
            {dataProducts &&
              pageNumber.map((item) => (
                <PaginationItem>
                  <PaginationLink onClick={() => handlePagination({ item })}>
                    {item}
                  </PaginationLink>
                </PaginationItem>
              ))}
          </Pagination>
        </div>
      </div>
    </div>
  );
}
