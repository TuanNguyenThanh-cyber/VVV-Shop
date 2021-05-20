import baseAPI from "./baseAPI"

const authAPI = {
    login: (value) => {
        return baseAPI.post("/auth/login", value);
    },
    register: (value) => {
        return baseAPI.post("/auth/register", value);
    }
}

export default authAPI;