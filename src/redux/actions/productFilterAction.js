import {PRODUCT_FILTER_FAILURE, PRODUCT_FILTER_REQUEST, PRODUCT_FILTER_SUCCESS} from '../constants/productFilterConstant';
import productsAPI from '../../services/productsAPI'

export function productFilterAction (value) {
    return async (dispatch) => {
        dispatch({type: PRODUCT_FILTER_REQUEST});
        try {
            const {data} = await productsAPI.productsFilter(value);
            dispatch({type: PRODUCT_FILTER_SUCCESS, payload: {data}});
        } catch (error) {
            console.log(error);
            dispatch({
                type: PRODUCT_FILTER_FAILURE,
                payload: {error: error.response}
            })
        }
    }
}