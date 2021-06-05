import {CATEGORIES_REQUEST, CATEGORIES_SUCCESS, CATEGORIES_FAILURE} from '../constants/categories';
import categoriesAPI from '../../services/categoriesAPI'

export function categoriesAction () {
    return async (dispatch) => {
        dispatch({type: CATEGORIES_REQUEST});
        try {
            const {data} = await categoriesAPI();
            dispatch({type: CATEGORIES_SUCCESS, payload: {data}});
        } catch (error) {
            console.log(error);
            dispatch({
                type: CATEGORIES_FAILURE,
                payload: {error: error.response.data.errors}
            })
        }
    }
}