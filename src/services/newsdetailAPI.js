import baseAPI from './baseAPI'

const newsdetailAPI = (id) => {
    return baseAPI.get(`/blogs/${id}`);
}

export default newsdetailAPI;