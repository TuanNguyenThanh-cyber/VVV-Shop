import React from "react";
import './OderList.scss'

export default function OrderList() {
  return (
    <div>
      <div className="list-bill">
        <div className="row">
          <h2 className="title">DANH SÁCH ĐƠN HÀNG</h2>
        </div>
        <a href="#" className="row">
          <div className="bill">
            <div className="bill-head">
              <span className="bill-id">#190995</span>
              <span className="bill-status c-orange">Chờ xác nhận</span>
            </div>
            <div className="bill-body">
              <div className="row bill-item">
                <div className="col-2">
                  <img src="./img/phone-01.png" alt="milk" />
                </div>
                <div className="col-10">
                  <div className="row bill-item-title">
                    Samsung Galaxy S21+ 128GB
                  </div>
                  <div className="row">
                    <div className="col-8">
                      <span className="unit-price c-blue">22.990.000 ₫</span>
                      <span className="unit c-light-text">x 2 Chiếc</span>
                    </div>
                    <div className="col-4">
                      <span className="total-price c-blue">45,800,000 ₫</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row bill-item">
                <div className="col-2">
                  <img src="./img/phone-02.png" alt="milk" />
                </div>
                <div className="col-10">
                  <div className="row bill-item-title">
                    Samsung Galaxy S20 FE 256GB
                  </div>
                  <div className="row">
                    <div className="col-8">
                      <span className="unit-price c-blue">15.490.000 ₫</span>
                      <span className="unit c-light-text">x 1 Chiếc</span>
                    </div>
                    <div className="col-4 ">
                      <span className="total-price c-blue">15.490.000 ₫</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row bill-item">
                <div className="col-2">
                  <img src="./img/phone-03.png" alt="milk" />
                </div>
                <div className="col-10">
                  <div className="row bill-item-title">OPPO A94 8GB-128GB</div>
                  <div className="row">
                    <div className="col-8">
                      <span className="unit-price c-blue">7.390.000 ₫</span>
                      <span className="unit c-light-text">x 1 Chiếc</span>
                    </div>
                    <div className="col-4">
                      <span className="total-price c-blue">7.390.000 ₫</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bill-footer row">
              <div className="col-md-2 col-5">
                <button className="btn btn-danger">Hủy đơn hàng</button>
              </div>
              <div className="col-7 bill-update-status">
                <small className="c-light-text">
                  Cập nhật lần cuối 19:09 20/02/2020
                </small>
              </div>
              <div className="col-md-3 col-7 bill-total">
                <span>
                  <small className="c-light-text">Tổng tiền</small>
                </span>
                <span className="price-total c-red">68,680,000</span>
              </div>
            </div>
          </div>
        </a>
        <a href="#" className="row">
          <div className="bill">
            <div className="bill-head">
              <span className="bill-id">#190995</span>
              <span className="bill-status c-green">Đã hoàn tất</span>
            </div>
            <div className="bill-body">
              <div className="row bill-item">
                <div className="col-2">
                  <img src="./img/phone-01.png" alt="milk" />
                </div>
                <div className="col-10">
                  <div className="row bill-item-title">
                    Samsung Galaxy S21+ 128GB
                  </div>
                  <div className="row">
                    <div className="col-8">
                      <span className="unit-price c-blue">22.990.000 ₫</span>
                      <span className="unit c-light-text">x 2 Chiếc</span>
                    </div>
                    <div className="col-4">
                      <span className="total-price c-blue">45,800,000 ₫</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bill-footer row">
              <div className="col-md-2 col-5">
                <button className="btn btn-outline-success">Đánh giá</button>
              </div>
              <div className="col-7 bill-update-status">
                <small className="c-light-text">
                  Cập nhật lần cuối 19:09 20/02/2020
                </small>
              </div>
              <div className="col-md-3 col-7 bill-total">
                <span>
                  <small className="c-light-text">Tổng tiền</small>
                </span>
                <span className="price-total c-red">45,800,000 ₫</span>
              </div>
            </div>
          </div>
        </a>
        <a href="#" className="row">
          <div className="bill">
            <div className="bill-head">
              <span className="bill-id">#190995</span>
              <span className="bill-status c-orange">Chờ xác nhận</span>
            </div>
            <div className="bill-body">
              <div className="row bill-item">
                <div className="col-2">
                  <img src="./img/phone-02.png" alt="milk" />
                </div>
                <div className="col-10">
                  <div className="row bill-item-title">
                    Samsung Galaxy S20 FE 256GB
                  </div>
                  <div className="row">
                    <div className="col-8">
                      <span className="unit-price c-blue">15.490.000 ₫</span>
                      <span className="unit c-light-text">x 1 Chiếc</span>
                    </div>
                    <div className="col-4">
                      <span className="total-price c-blue">15.490.000 ₫</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row bill-item">
                <div className="col-2">
                  <img src="./img/phone-03.png" alt="milk" />
                </div>
                <div className="col-10">
                  <div className="row bill-item-title">OPPO A94 8GB-128GB</div>
                  <div className="row">
                    <div className="col-8">
                      <span className="unit-price c-blue">7.390.000 ₫</span>
                      <span className="unit c-light-text">x 1 Chiếc</span>
                    </div>
                    <div className="col-4">
                      <span className="total-price c-blue">7.390.000 ₫</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bill-footer row">
              <div className="col-md-2 col-5">
                <button className="btn btn-outline-danger">Hủy đơn hàng</button>
              </div>
              <div className="col-7 bill-update-status">
                <small className="c-light-text">
                  Cập nhật lần cuối 19:09 20/02/2020
                </small>
              </div>
              <div className="col-md-3 col-7 bill-total">
                <span>
                  <small className="c-light-text">Tổng tiền</small>
                </span>
                <span className="price-total c-red">22,880,000</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
