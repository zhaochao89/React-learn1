import React, { useState } from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import MainMenu from '@/components/MainMenu';

const { Header, Content, Footer, Sider } = Layout;



const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* 左边侧边栏 */}
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <MainMenu />
      </Sider>
      {/* 右边内容 */}
      <Layout>
        {/* 右边头部 */}
        <Header style={{ padding: 0, background: colorBgContainer }} >
          <Breadcrumb style={{ marginLeft: '16px', lineHeight: '64px' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        {/* 右边内容 */}
        <Content style={{
          margin: '16px 16px 0',
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}>
          {/* 内容窗口区域 */}
          <Outlet />
        </Content>
        {/* 右边底部 */}
        <Footer style={{ textAlign: 'center', padding: 0, lineHeight: '48px' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Home;