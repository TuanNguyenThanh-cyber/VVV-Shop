import {PRODUCTS_REQUEST, PRODUCTS_SUCCESS, PRODUCTS_FAILURE} from '../constants/productsConstant';
import productsAPI from '../../services/productsAPI'

export function productsAction () {
    return async (dispatch) => {
        dispatch({type: PRODUCTS_REQUEST});
        try {
            const {data} = await productsAPI();
            dispatch({type: PRODUCTS_SUCCESS, payload: {data}});
        } catch (error) {
            console.log(error);
            dispatch({
                type: PRODUCTS_FAILURE,
                payload: {error: error.response.data.errors}
            })
        }
    }
}