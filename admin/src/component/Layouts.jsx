import React, { useState } from 'react';
import Logo from "../assets/logo_1.png"
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';

import { Icons } from '../resuable/Icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Outlet, useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const Layouts = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [selectedKeys, setSelectedKeys] = useState(["/"]);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  
  const navigate = useNavigate();

  const handleMenuClick = ({ key }) => {
    setSelectedKeys([key]);
    navigate(key); 
  };

  const menuItems = [
    {
      key: '/',
      icon: selectedKeys.includes('/') ? Icons.Home.active : Icons.Home.default,
      label: 'Dashboard',
    },
    {
      key: '/user',
      icon: selectedKeys.includes('/user') ? Icons.users.active : Icons.users.default,
      label: 'Users',
    },
    {
      key: 'maintenance',
      icon: selectedKeys.includes('maintenance') ? Icons.maintaenance.active : Icons.maintaenance.default,
      label: 'Maintenance',
    },
    {
      key: 'properties',
      icon: selectedKeys.includes('properties') ? Icons.properties.active : Icons.properties.default,
      label: 'Properties',
    },
    {
      key: 'booking',
      icon: selectedKeys.includes('booking') ? Icons.bookings.active : Icons.bookings.default,
      label: 'Bookings',
    },
   
    {
      key: 'history',
      icon: selectedKeys.includes('history') ? Icons.history.active : Icons.history.default,
      label: 'History',
    },
   
    {
      key: 'setting',
      icon: selectedKeys.includes('setting') ? Icons.Setting.active : Icons.Setting.default,
      label: 'Setting',
    },
  ];

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} width={250}>
        <div className="demo-logo-vertical">
          <img src={Logo} width="100%" className="lg-logo" />
          <img src={Logo} width="100%" className="sm-logo" />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={selectedKeys}
          onClick={handleMenuClick}
          items={menuItems}
        />
      </Sider>
      <Layout>
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
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Layouts;
