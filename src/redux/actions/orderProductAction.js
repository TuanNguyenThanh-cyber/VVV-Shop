import {
  ORDER_PRODUCT_REQUEST,
  ORDER_PRODUCT_SUCCESS,
  ORDER_PRODUCT_FAILURE,
} from "../constants/orderProductConstant";
import orderProductAPI from "../../services/orderProductAPI";

export function orderProductAction(value) {
  return async (dispatch) => {
    dispatch({ type: ORDER_PRODUCT_REQUEST });
    try {
      const { data } = await orderProductAPI(value);
    dispatch({ type: ORDER_PRODUCT_SUCCESS, payload: { data } });
      alert("Đã đặt hàng thành công");
      localStorage.removeItem("orderCart");
    } catch (error) {
      dispatch({
        type: ORDER_PRODUCT_FAILURE,
        payload: { error: error.response },
      });
      alert("Đặt hàng chưa thành công, vui lòng thử lại sau");
    }
  };
}
