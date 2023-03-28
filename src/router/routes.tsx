import { Lazyload } from "@/components/LazyLoad";
import { lazy } from "react";
import { Navigate, Outlet } from "react-router-dom";

const Home = lazy(() => import("@/views/Home"));
const About = lazy(() => import("@/views/About"));
const Page1 = lazy(() => import("@/views/Page1"));
const Page2 = lazy(() => import("@/views/Page2"));
const Page3 = lazy(() => import("@/views/Page3"));
const Page301 = lazy(() => import("@/views/Page3/components/Page301"));
const Page302 = lazy(() => import("@/views/Page3/components/Page302"));
const Page4 = lazy(() => import("@/views/Page4"));
const Page401 = lazy(() => import("@/views/Page4/components/Page401"));
const NotFound = lazy(() => import("@/views/NotFound"));
const Login = lazy(() => import("@/views/Login"));
const User = lazy(() => import("@/views/User"));
const Index = lazy(() => import("@/views/Index"));

const routes = [
    {
        path: "/",
        element: <Navigate to="/home" />,
    },
    {
        path: "/",
        element: Lazyload(<Home />),
        children: [
            {
                path: "/home",
                label: "主页",
                element: Lazyload(<Index />),
            },
            {
                path: "/about",
                element: Lazyload(<About />),
            },
            {
                path: "/user",
                element: Lazyload(<User />),
            },
            {
                path: "/page1",
                element: Lazyload(<Page1 />),
            },
            {
                path: "/page2",
                element: Lazyload(<Page2 />),
            },
            {
                path: "/page3",
                element: <Outlet />,
                children: [
                    {
                        path: "/page3/page301",
                        element: Lazyload(<Page301 />),
                    },
                    {
                        path: "/page3/page302",
                        element: Lazyload(<Page302 />),
                    },
                ],
            },
            {
                path: "/page4",
                element: <Outlet />,
                children: [
                    {
                        path: "/page4/page401",
                        element: Lazyload(<Page401 />),
                    },
                ],
            },
        ],
    },
    {
        // 登录页面
        path: "/login",
        element: Lazyload(<Login />),
    },
    {
        // 404 NotFound
        path: "*",
        element: Lazyload(<NotFound />),
    },
];

export default routes;
