import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const HomeFooter: React.FC = () => {
    return (
        <Footer
            style={{
                textAlign: "center",
                padding: 0,
                lineHeight: "48px",
            }}
        >
            Ant Design ©2023 Created by 雨木木
        </Footer>
    );
};

export default HomeFooter;
