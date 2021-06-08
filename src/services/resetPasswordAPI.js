import baseAPI from './baseAPI'

const resetPasswordAPI = (id, password) => {
    return baseAPI.patch(`/auth/reset/${id}`, password);
}

export default resetPasswordAPI;