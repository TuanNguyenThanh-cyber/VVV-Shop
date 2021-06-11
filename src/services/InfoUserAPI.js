import baseAPI from "./baseAPI"

const InfoUserAPI = {
    getInfoUser: (id) => {
        return baseAPI.get(`/users/${id}`);
    },
    updateInfoUser: (id, value) => {
        return baseAPI.put(`/users/${id}`,value);
    }
}

export default InfoUserAPI;