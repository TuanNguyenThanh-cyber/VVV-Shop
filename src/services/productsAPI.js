import baseAPI from './baseAPI'

const productsAPI = () => {
    return baseAPI.get("/products");
}

export default productsAPI;