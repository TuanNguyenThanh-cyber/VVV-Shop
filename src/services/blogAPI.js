import baseAPI from './baseAPI'

const blogAPI = () => {
    return baseAPI.get("/blogs?_paginate");
}

export default blogAPI;