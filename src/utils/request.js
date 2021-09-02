import axios from "axios";
import { message } from "antd";
import { getToken } from "./auth";

const instance = axios.create({
  baseURL: "http://localhost:2333",
  timeout: 5000,
});

//请求拦截器
instance.interceptors.request.use(
  (config) => {
    let token = getToken();
    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//响应拦截器
instance.interceptors.response.use(
  (response) => {
    let res = response.data;
    if (res.code === 1) {
      return res;
    } else if (res.code === 2) {
      message.error({
        content: res.msg,
      });
      return Promise.reject(new Error(res.msg));
    } else {
      return res;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
