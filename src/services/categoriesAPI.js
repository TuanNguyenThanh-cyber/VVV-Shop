import baseAPI from './baseAPI'

const categoriesAPI = () => {
    return baseAPI.get("/categories");
}

export default categoriesAPI;