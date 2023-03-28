import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";

const { Sider } = Layout;

// type MenuItem = Required<MenuProps>["items"][number];
type MenuItem = { label: string; key: string; icon?: React.ReactNode; children?: MenuItem[] };

const items: MenuItem[] = [
    {
        label: "主页",
        key: "/home",
        icon: <PieChartOutlined />,
    },
    {
        label: "栏目一",
        key: "/page1",
        icon: <DesktopOutlined />,
    },
    {
        label: "栏目二",
        key: "/page2",
        icon: <DesktopOutlined />,
    },
    {
        label: "栏目三",
        key: "page3",
        icon: <UserOutlined />,
        children: [
            {
                label: "栏目301",
                key: "/page3/page301",
            },
            {
                label: "栏目302",
                key: "/page3/page302",
            },
        ],
    },
    {
        label: "栏目四",
        key: "page4",
        icon: <TeamOutlined />,
        children: [
            {
                label: "栏目401",
                key: "/page4/page401",
            },
        ],
    },
    {
        label: "关于",
        key: "/about",
        icon: <FileOutlined />,
    },
];
const HomeSider: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false); // 侧边栏是否收起

    const navigate = useNavigate();
    const menuClick = (item: { key: string }) => {
        navigate(item.key);
    };
    const SiderOpenChange = (openKeys: string[]) => {
        // 只能显示当前展开的子菜单
        setOpenKeys(openKeys.slice(-1));
    };
    const pathname = useLocation().pathname; // 当前路由
    // 遍历菜单，找到当前路由所在的子菜单，展开
    let firstKey: string = "";
    const findKey = (obj: { key: string }) => {
        return obj.key === pathname;
    };

    items.forEach((item) => {
        if (item.children && item.children.length > 0 && item.children.find(findKey)) {
            firstKey = item.key;
        }
    });
    const [openKeys, setOpenKeys] = useState<string[]>([firstKey]); // 当前展开的 SubMenu 菜单项 key 数组

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div style={{ height: 32, margin: 16, background: "rgba(255, 255, 255, 0.2)" }} />
            <Menu
                theme="dark"
                defaultSelectedKeys={[pathname]}
                mode="inline"
                items={items}
                onClick={menuClick}
                onOpenChange={SiderOpenChange} // 某项菜单展开关闭时调用
                openKeys={openKeys} // 当前展开的 SubMenu 菜单项 key 数组
            />
        </Sider>
    );
};

export default HomeSider;
