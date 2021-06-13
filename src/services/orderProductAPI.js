import baseAPI from './baseAPI'

const orderProductAPI = (value) => {
    return baseAPI.post("/orders", value);
}

export default orderProductAPI;