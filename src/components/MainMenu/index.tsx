import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import MenuItem from 'antd/es/menu/MenuItem';
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

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

const MainMenu: React.FC = () => {

    const navigateTo = useNavigate();
    const currentLocation = useLocation();
    // 开发模式下开启了严格模式这里会打印两次，生产环境不会。如果不想让打印两次，将main.tsx中的<React.StrictMode>注释掉即可。
    console.log('first', currentLocation);
    const menuClick = (e: { key: string }) => {
        console.log('点击了菜单', e.key);
        navigateTo(e.key);
    }
    let firstOpenKey = '';
    for (let i = 0; i < items.length; i++) {
        // @ts-ignore 忽略ts的检查报错
        if (items[i]['children'] && items[i]['children'].length > 0) {
            // @ts-ignore
            for (let j = 0; j < items[i]['children'].length; j++) {
                // @ts-ignore
                if (items[i]['children'][j]['key'] === currentLocation.pathname) {
                    // @ts-ignore
                    firstOpenKey = items[i]['key'];
                    break;
                }
            }
        }
    }

    const [openKeys, setOpenKeys] = useState([firstOpenKey]);
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
    return (<Menu
        theme="dark"
        defaultSelectedKeys={[currentLocation.pathname]}
        mode="inline"
        items={items}
        onClick={menuClick}
        onOpenChange={handleOpenChange}
        openKeys={openKeys}
    />);
}

export default MainMenu;