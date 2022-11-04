import axios from "axios";
const service = axios.create({
    baseURL: '172.16.1.111',
    timeout: 60000,
    headers: {
        'Content-Type': 'application/json'
    }
});
// 添加请求拦截器
service.interceptors.request.use(
    config=>{
        return config;
    },
    error=>{
        return Promise.reject(error);
    }
);
service.interceptors.response.use(
    response=>{
        if (response.data) {
            return response;
        } else {
            return Promise.reject(response);
        }
    }
);
export default service;