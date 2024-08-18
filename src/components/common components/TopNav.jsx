import React, { useContext } from 'react';
import { Button, Layout } from 'antd';
import ColorConfig from '../../configs/ColorConfigs';
import { MenuFoldOutlined, MenuUnfoldOutlined, BulbOutlined } from '@ant-design/icons';
import { ThemeContext } from '../../context/ThemeContext'; // Certifique-se de importar o ThemeContext
import { SunOutlined, MoonOutlined } from '@ant-design/icons'; // Ícones de sol e lua

const { Header } = Layout;

const TopNav = ({ collapsed, toggleCollapsed }) => {
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

    console.log('Is Dark Theme:', isDarkTheme);
    return (
        <Header
            style={{
                padding: '0 16px', 
                background: isDarkTheme?ColorConfig.topdarktheme:ColorConfig.topColor,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                
            }}
        >
            <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={toggleCollapsed}
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                    color:isDarkTheme?"#ffff":"#000000"
                }}
            />
            <Button
                type="text"
                icon={isDarkTheme ? <SunOutlined /> : <MoonOutlined />}
                onClick={toggleTheme}
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                    color:isDarkTheme?"#ffff":"#000000", 
                    
                }}
            />
        </Header>
    );
};

export default TopNav;
