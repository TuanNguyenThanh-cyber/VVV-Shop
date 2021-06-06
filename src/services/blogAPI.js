import baseAPI from './baseAPI'

const blogAPI = () => {
    return baseAPI.get("/blogs");
}

export default blogAPI;