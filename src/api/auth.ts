import request from "@/request/request";

import { LoginAPIReq, LoginAPIRes } from "@/types/Common/auth";

// 验证码请求
export const CaptchaAPI = (): Promise<string> => request.get("/v1/captcha");

// 登录请求
export const LoginAPI = (params: LoginAPIReq): Promise<LoginAPIRes> => request.post("/v1/login", params);
