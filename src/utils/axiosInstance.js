import axios from "axios"
// 创建一个 Axios 实例
const axiosInstance = axios.create({
    baseURL: 'http://localhost:8800'
  });
  
  // 添加请求拦截器
  axiosInstance.interceptors.request.use(
    config => {
      // 在请求发送之前做一些处理，比如添加 token 到请求头
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    error => {
      // 对请求错误做些什么
      return Promise.reject(error);
    }
  );
  
  export default axiosInstance;
  
  