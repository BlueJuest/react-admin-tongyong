import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/auth";

export const store = configureStore({
    reducer: {
        // 将auth切片注入store
        auth: authReducer,
    },
});
