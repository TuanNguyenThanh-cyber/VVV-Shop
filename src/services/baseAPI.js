import axios from "axios";

const baseAPI = axios.create({
  // baseURL: "https://vvvshop.herokuapp.com/api",
  baseURL: "http://127.0.0.1:8080/api"
});

baseAPI.interceptors.request.use(
  (config) => {
    // Xử lý trước khi request được gửi lên server
    // Thêm Authorization vào header
    // const userInfo = localStorage.getItem("userInfo");

    // if (userInfo) {
    //   const { accessToken } = JSON.parse(userInfo);
    //   config.headers.Authorization = `auth_token ${accessToken}`;
    //   console.log(accessToken);
    // }

    return config;
  },
  (error) => {
    // Xử lý khi request lỗi
    return Promise.reject(error);
  }
);

baseAPI.interceptors.response.use(
  (response) => {
    // Xử lý kết quả trả về từ server
    return response;
  },
  (error) => {
    // Xử lý nếu kết quả trả về bị lỗi
    if (error.status === 400) {
      // Xử lý logout: Clear localStorage, đẩy người dùng về trang login
    }
    if (error.status === 500) {
      // Xử lý thông báo cho người dùng server đang bị lỗi
    }
    return Promise.reject(error);
  }
);

export default baseAPI;
