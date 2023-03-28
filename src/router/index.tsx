import routes from "@/router/routes";
import { useRoutes } from "react-router-dom";

// 注册所有路由
export const useAppRoutes = () => {
    return useRoutes(routes);
};
