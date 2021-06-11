import {PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS, PRODUCT_DETAIL_FAILURE  } from '../constants/productDetailConstant';
import productDetailAPI from '../../services/productDetailAPI';

export function productDetailAction (id) {
    return async (dispatch) => {
        dispatch({type: PRODUCT_DETAIL_REQUEST});
        try {
            const {data} = await productDetailAPI(id);
            dispatch({type: PRODUCT_DETAIL_SUCCESS, payload: {data}});
        } catch (error) {
            console.log(error);
            dispatch({
                type: PRODUCT_DETAIL_FAILURE,
                payload: {error: error.response}
            })
        }
    }
}