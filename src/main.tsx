import React from "react";
import ReactDOM from "react-dom/client";
// 初始化样式,一般放在最前
import "rest-css";
// UI框架样式
// 全局样式
import "@/assets/styles/global.scss";
// 组件样式
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// 状态管理
import { store } from "@/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <Provider store={store}>
        {/*<React.StrictMode>*/}
        <BrowserRouter>
            <App />
        </BrowserRouter>
        {/*</React.StrictMode>*/}
    </Provider>
);
