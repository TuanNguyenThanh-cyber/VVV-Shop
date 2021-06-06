import baseAPI from './baseAPI'

const productsAPI = (value) => {
    return baseAPI.get(`/products?_filter&_paginate&page=${value}`);
}

export default productsAPI;