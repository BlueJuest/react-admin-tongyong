import axios from "axios";
import { getToken } from "@/utils/auth";

type Methods = "GET" | "POST" | "PUT" | "DELETE";

export interface HttpResponse<T = any> {
    data: T;
    code: number;
    message: any;

    [key: string]: any;
}

axios.defaults.withCredentials = true; // 跨域访问需要发送cookie时一定要加这句

let httpTime = 0;

// 添加请求拦截器，在发送请求之前做些什么
axios.interceptors.request.use(
    function (config) {
        httpTime++;
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

// 添加响应拦截器
axios.interceptors.response.use(
    function (response) {
        // 对响应数据做点什么，允许在数据返回客户端前，修改响应的数据
        return response.data;
    },
    function (error) {
        return Promise.reject(error);
    }
);

// 封装axios
function HttpRequest<T = any>(
    url: string,
    method: Methods,
    params: any = {},
    isLoading = true
): Promise<HttpResponse<T>> {
    // 设置token
    const token = getToken();
    const httpDefault = {
        baseURL: "http://localhost:7002/api",
        method,
        url,
        headers: {
            withCredentials: true,
            Authorization: "Bearer " + token,
            vision: "1.0.0",
            operating_system: "Web",
            "Content-Type": "application/json; charset=utf-8",
        },
        params: method === "GET" || method === "DELETE" ? params : null,
        data: method === "POST" || method === "PUT" ? params : null,
        timeout: 10000,
    };
    return new Promise((resolve, reject) => {
        axios(httpDefault)
            .then((response: any) => {
                resolve(response);
            })
            .catch((response) => {
                reject(response);
            })
            .then(function () {
                httpTime--;
            });
    });
}

export default HttpRequest;
