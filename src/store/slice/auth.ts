import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
// import { getUserInfo, postLogin, postLogout } from "@/api/auth";

// 创建auth切片
const authSlice = createSlice({
    name: "auth",
    initialState: {
        // token
        token: localStorage.getItem("token") || "",
        // 用户信息
        userInfo: localStorage.getItem("userInfo") || {},
    },
    reducers: {
        // 更新token
        upToken(state: any, { payload }: any) {
            state.token = localStorage.token = payload;
        },
        // 更新用户信息
        upUserInfo(state: any, { payload }: any) {
            state.userInfo = localStorage.userInfo = payload;
        },
        // 清除本地和状态中的token和userInfo
        clearState(state: any, { payload }: any) {
            localStorage.clear();
            state.token = payload;
            state.userInfo = {};
        },
    },
});

// 暴露封装的获取状态的方法
export const useSelectorAuth = () => useSelector((state: any) => state.auth);
export default authSlice.reducer;
