import React from "react";
import { Layout } from "antd";
import HomeHeader from "@/views/Home/components/HomeHeader";
import HomeContent from "@/views/Home/components/HomeContent";
import HomeFooter from "@/views/Home/components/HomeFooter";
import HomeSider from "@/views/Home/components/HomeSider";

const Home: React.FC = () => {
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <HomeSider />
            <Layout className="site-layout">
                <HomeHeader />
                <HomeContent />
                <HomeFooter />
            </Layout>
        </Layout>
    );
};
export default Home;
