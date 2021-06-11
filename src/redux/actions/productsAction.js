import {PRODUCTS_REQUEST, PRODUCTS_SUCCESS, PRODUCTS_FAILURE} from '../constants/productsConstant';
import productsAPI from '../../services/productsAPI'

export function productsAction (value) {
    return async (dispatch) => {
        dispatch({type: PRODUCTS_REQUEST});
        try {
            const {data} = await productsAPI.paginateProducts(value);
            dispatch({type: PRODUCTS_SUCCESS, payload: {data}});
        } catch (error) {
            console.log(error);
            dispatch({
                type: PRODUCTS_FAILURE,
                payload: {error: error.response}
            })
        }
    }
}