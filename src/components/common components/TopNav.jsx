import React from 'react';
import { Button, Layout } from 'antd';
import ColorConfig from '../../configs/ColorConfigs';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  } from '@ant-design/icons';

const {Header} = Layout;
const TopNav = ({collapsed, toggleCollapsed }) => {
    return (
       
            <Header style={{ padding: 0, background: ColorConfig.topColor,}}>
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