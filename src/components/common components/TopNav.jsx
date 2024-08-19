import React, { useContext, useState, useEffect } from 'react';
import { Button, Layout, Typography } from 'antd';
import ColorConfig from '../../configs/ColorConfigs';
import { MenuFoldOutlined, MenuUnfoldOutlined, BulbOutlined, SunOutlined, MoonOutlined } from '@ant-design/icons'; 
import { ThemeContext } from '../../context/ThemeContext';

const { Header } = Layout;
const { Text } = Typography;

const TopNav = ({ collapsed, toggleCollapsed }) => {
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formattedTime = currentTime.toLocaleTimeString();

    return (
        <Header
            style={{
                padding: '0 16px', 
                background: isDarkTheme ? ColorConfig.topdarktheme : ColorConfig.topColor,
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
                    color: isDarkTheme ? "#ffff" : "#000000",
                }}
            />
            
            <div style={{ flex: 1, textAlign: 'center' }}>
                <Text style={{ color: isDarkTheme ? "#ffff" : "#000000", fontSize: '16px' }}>
                    {formattedTime}
                </Text>
            </div>

            <Button
                type="text"
                icon={isDarkTheme ? <SunOutlined /> : <MoonOutlined />}
                onClick={toggleTheme}
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                    color: isDarkTheme ? "#ffff" : "#000000",
                }}
            />
        </Header>
    );
};

export default TopNav;
