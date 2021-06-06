import {BLOG_REQUEST, BLOG_SUCCESS, BLOG_FAILURE  } from '../constants/blogConstant';
import blogAPI from '../../services/blogAPI';

export function blogAction () {
    return async (dispatch) => {
        dispatch({type: BLOG_REQUEST});
        try {
            const {data} = await blogAPI();
            dispatch({type: BLOG_SUCCESS, payload: {data}});
        } catch (error) {
            console.log(error);
            dispatch({
                type: BLOG_FAILURE,
                payload: {error: error.response}
            })
        }
    }
}