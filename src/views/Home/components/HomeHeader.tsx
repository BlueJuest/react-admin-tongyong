import React from "react";
import { Breadcrumb, Layout, theme } from "antd";

const { Header } = Layout;

const HomeHeader: React.FC = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Header style={{ padding: "0 16px", background: colorBgContainer }}>
            <Breadcrumb style={{ lineHeight: "64px" }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
        </Header>
    );
};

export default HomeHeader;
