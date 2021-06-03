import React from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import "./Category.scss";

export default function Category() {
  return (
    <div className="Category">
      <div className="container">
        <div className="row">
          <div className="col-2 Category-first">
            <p className="title">Danh mục sản phẩm của VVVShop</p>
            <Link className="my-btn" to="/products">
              Tất cả Sản Phẩm
            </Link>
          </div>
          <div className="col-2 Category-product">
            <a className="card" href="#">
              <img
                src="/images/Category/laptop.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">Laptop</p>
              </div>
            </a>
          </div>
          <div className="col-2 Category-product">
            <a className="card" href="#">
              <img
                src="/images/Category/phone.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">Điện thoại</p>
              </div>
            </a>
          </div>
          <div className="col-2 Category-product">
            <a className="card" href="#">
              <img
                src="/images/Category/pc.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">PC</p>
              </div>
            </a>
          </div>
          <div className="col-2 Category-product">
            <a className="card" href="#">
              <img
                src="/images/Category/pk.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">Bàn phím</p>
              </div>
            </a>
          </div>
          <div className="col-2 Category-product">
            <a className="card" href="#">
              <img
                src="/images/Category/chuot.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">Chuột</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
