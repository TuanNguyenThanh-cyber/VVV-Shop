import {GET_INFOUSER_FAILURE, GET_INFOUSER_SUCCESS, GET_INFOUSER_REQUEST} from '../constants/getInfoUserConstant';
import InfoUserAPI from '../../services/InfoUserAPI'

export function getInfoUserAction (id) {
    return async (dispatch) => {
        dispatch({type: GET_INFOUSER_REQUEST});
        try {
            const {data} = await InfoUserAPI.getInfoUser(id);
            dispatch({type: GET_INFOUSER_SUCCESS, payload: {data}});
            console.log(InfoUserAPI.getInfoUser(id));
        } catch (error) {
            console.log(error);
            dispatch({
                type: GET_INFOUSER_FAILURE,
                payload: {error: error.response}
            })
        }
    }
}