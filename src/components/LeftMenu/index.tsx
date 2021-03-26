import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import {
  DesktopOutlined,
  ContainerOutlined,
} from '@ant-design/icons';
import { Link, withRouter } from 'react-router-dom';


const LeftMenu = () => {
  const [selectedKeys, setSelectedKeys] = useState(['/users'])

  const onClick = ({ key }: { key: any }) => {
    setSelectedKeys([key])
  }

  return (
    <Menu
      mode="inline"
      theme="dark"
      selectedKeys={selectedKeys}
      onClick={onClick}
    >
      <Menu.Item key={'/users'} icon={<DesktopOutlined />}>
        <Link to={'/users'}>
          Пользователи
        </Link>
      </Menu.Item>
      <Menu.Item key={'/other'} icon={<DesktopOutlined />} disabled>
          Другое
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu