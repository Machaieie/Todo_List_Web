import React from 'react';
import { Header,Button } from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  } from '@ant-design/icons';


const TopNav = ({collapsed, toggleCollapsed, colorBgContainer }) => {
    return (
       
            <Header style={{ padding: 0, background: colorBgContainer }}>
                <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={toggleCollapsed}
                style={{
                  fontSize: '16px',
                  width: 64,
                  height: 64,
                }}
                />
            </Header>
        
    );
};


export default TopNav;