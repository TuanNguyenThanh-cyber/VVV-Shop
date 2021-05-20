import axios from "axios";

const baseAPI = axios.create({
  baseURL: "https://vvvshop.herokuapp.com/api",
});

baseAPI.interceptors.request.use(
  (config) => {
    // Xử lý request trước khi gửi lên server
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
