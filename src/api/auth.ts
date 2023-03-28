import request from "@/request/request";

import { LoginAPIReq, LoginAPIRes } from "@/types/Common/auth";

// 验证码请求
export function CaptchaAPI() {
    return request.get("/v1/captcha");
}

// 登录请求
// export const LoginAPI = (params: LoginAPIReq): Promise<LoginAPIRes> => request.post("/v1/login", params);
export function LoginAPI(params: LoginAPIReq) {
    return request.post("/v1/login", params);
}
