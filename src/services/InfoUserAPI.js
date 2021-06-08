import baseAPI from "./baseAPI"

const InfoUserAPI = {
    getInfoUser: (id) => {
        return baseAPI.get(`/api/users/${id}`);
    },
    updateInfoUser: (id, value) => {
        return baseAPI.put(`/api/users/${id}`,value);
    }
}

export default InfoUserAPI;