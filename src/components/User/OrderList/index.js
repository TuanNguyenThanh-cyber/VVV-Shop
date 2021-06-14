import React, { useEffect } from "react";
import "./OrderList.scss";
import { useSelector, useDispatch } from "react-redux";
import { productFilterAction } from "../../../redux/actions/productFilterAction";
import { formatMoneyVND } from "../../../utils/formatMoneyVND";

export default function OrderList() {
  const dispatch = useDispatch();
  let arrayAfterAddAmount = [];

  // GET API ProductFilter
  useEffect(() => {
    dispatch(productFilterAction(objOrderProduct));
  }, []);
  const { dataProductFilter } = useSelector(
    (state) => state.productFilterReducer
  );

  const { dataOrderProduct } = useSelector(
    (state) => state.orderProductReducer
  );

  // Convert data
  const dataJSONOrderProduct = JSON.parse(dataOrderProduct);
  console.log(dataJSONOrderProduct);

  // Get Id item order
  let arrayIdOrderProduct = [];
  dataJSONOrderProduct.details.map((item) => {
    arrayIdOrderProduct.push(item.product);
  });

  // Create Obj to send Server get info product
  const objOrderProduct = {
    ids: arrayIdOrderProduct,
  };

  // Add amount from dataJSONOrderProduct into arrayAfterAddAmount
  if (dataProductFilter && dataJSONOrderProduct) {
    dataProductFilter.map((itemFilter) => {
      dataJSONOrderProduct.details.map((itemQuanlity) => {
        if (itemQuanlity.product === itemFilter._id) {
          itemFilter = { ...itemFilter, amount: itemQuanlity.quantity };
          arrayAfterAddAmount.push(itemFilter);
        }
      });
    });
  }

  console.log(arrayAfterAddAmount);

  console.log(dataProductFilter);
  return (
    <div>
      <div className="list-bill">
        <div className="row">
          <h2 className="title">DANH SÁCH ĐƠN HÀNG</h2>
        </div>
        <a href="#" className="row">
          <div className="bill">
            <div className="bill-head">
              <span className="bill-id">#{dataJSONOrderProduct._id}</span>
              <span className="bill-status c-orange">
                {dataJSONOrderProduct.deliver.status}
              </span>
            </div>
            <div className="bill-body">
              {arrayAfterAddAmount &&
                arrayAfterAddAmount.map((item) => (
                  <div className="row bill-item">
                    <div className="col-2">
                      <img src={item.images[0]} alt="" />
                    </div>
                    <div className="col-10">
                      <div className="row bill-item-title">{item.name}</div>
                      <div className="row">
                        <div className="col-8">
                          <span className="unit-price c-blue">
                            {item.originalPrice}
                          </span>
                          <span className="unit c-light-text">
                            x {item.amount} Chiếc
                          </span>
                        </div>
                        <div className="col-4">
                          <span className="total-price c-blue">
                            {formatMoneyVND(item.originalPrice * item.amount)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="bill-footer row">
              <div className="col-md-2 col-5">
                <button className="btn btn-danger">Hủy đơn hàng</button>
              </div>
              <div className="col-5 bill-update-status">
                <small className="c-light-text">
                  Cập nhật lần cuối {new Date(dataJSONOrderProduct.createdAt).toLocaleDateString()}
                </small>
              </div>
              <div className="col-md-5 col-7 bill-total">
                <span>
                  <small className="c-light-text">Tổng tiền </small>
                </span>
                <span className="price-total c-red">
                  {formatMoneyVND(dataJSONOrderProduct.payment.total)}
                </span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
