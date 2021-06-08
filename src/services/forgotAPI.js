import baseAPI from './baseAPI'

const forgotAPI = (email) => {
    return baseAPI.get(`/auth/forgot/${email}`);
}

export default forgotAPI;