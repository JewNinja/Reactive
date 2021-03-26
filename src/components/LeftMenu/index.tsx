import React from 'react';
import { Menu } from 'antd';
import {
  DesktopOutlined,
  ContainerOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';


const LeftMenu = () => {
  return (
    <Menu
      defaultSelectedKeys={['/users']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      theme="dark"
      // inlineCollapsed={this.state.collapsed}
    >
      <Menu.Item key={'/users'} icon={<DesktopOutlined />}>
        <Link to={'/users'}>
          Пользователи
        </Link>
      </Menu.Item>
      <Menu.Item key={'/create'} icon={<DesktopOutlined />} disabled>
          Другое
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;