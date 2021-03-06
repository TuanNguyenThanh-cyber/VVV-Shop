import baseAPI from "./baseAPI";

const productsAPI = {
  allProducts: () => {
    return baseAPI.get("/products");
  },
  productsFilter: (value) => {
    return baseAPI.post("/products/cart", value);
  },
  paginateProducts: (value) => {
    return baseAPI.get(`/products?_filter&_paginate&page=${value}`);
  },
};

export default productsAPI;
