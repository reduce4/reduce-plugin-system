import {
  MenuFoldOutlined,
  ProjectOutlined,
  MenuUnfoldOutlined,
  CustomerServiceOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { useState } from "react";
import useMenu from "./hooks/useMenu";
const { Header, Sider, Content } = Layout;
import { Outlet, useNavigate } from "react-router-dom";
const RpsLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [onSelect] = useMenu();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          onSelect={({ key }) => onSelect(key)}
          theme="dark"
          mode="inline"
          items={[
            {
              key: "1",
              icon: <ProjectOutlined />,
              label: "demoPage",
            },
            {
              key: "2",
              icon: <CustomerServiceOutlined />,
              label: "swagger",
            },
          ]}
        />
      </Sider>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default RpsLayout;
