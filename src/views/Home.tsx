import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useNavigate, Outlet } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('About', '/about', <PieChartOutlined />),
  getItem('User', '/user', <UserOutlined />),
  getItem('Desktop', '/page1', <DesktopOutlined />,
    [
      getItem('Page 1', '/page1'),
      getItem('Bill', '4'),
      getItem('Alex', '5'),
    ]),
  getItem('Team', 'sub2', <TeamOutlined />,
    [
      getItem('Page 2', '/page2'),
      getItem('Team 2', '8')
    ]),
  getItem('Files', '9', <FileOutlined />),
];

const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigateTo = useNavigate();

  const menuClick = (e: { key: string }) => {
    console.log('点击了菜单', e.key);
    navigateTo(e.key);
  }

  const [openKeys, setOpenKeys] = useState(['']);
  const handleOpenChange = (openKeys: string[]) => {
    //openkeys：当前展开的菜单项的 key 数组
    console.log('openKeys', openKeys);
    if (openKeys.length > 0) {
      //取数组的最后一个值，设置给setOpenKeys，保持只有一项是展开的。
      setOpenKeys([openKeys[openKeys.length - 1]]);
    } else {
      setOpenKeys(['']);
    }
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* 左边侧边栏 */}
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={['/about']}
          mode="inline"
          items={items}
          onClick={menuClick}
          onOpenChange={handleOpenChange}
          openKeys={openKeys}
        />
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