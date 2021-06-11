import {NEWS_DETAIL_REQUEST, NEWS_DETAIL_SUCCESS, NEWS_DETAIL_FAILURE  } from '../constants/newsDetailConstant';
import newsdetailAPI from '../../services/newsdetailAPI';

export function newsdetailAction (id) {
    return async (dispatch) => {
        dispatch({type: NEWS_DETAIL_REQUEST});
        try {
            const {data} = await newsdetailAPI(id);
            dispatch({type: NEWS_DETAIL_SUCCESS, payload: {data}});
        } catch (error) {
            console.log(error);
            dispatch({
                type: NEWS_DETAIL_FAILURE,
                payload: {error: error.response}
            })
        }
    }
}