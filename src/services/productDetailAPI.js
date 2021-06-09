import baseAPI from './baseAPI'

const productDetailAPI = (id) => {
    return baseAPI.get(`/products/${id}`);
}

export default productDetailAPI;