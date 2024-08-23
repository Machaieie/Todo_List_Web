import React, { useState, useContext } from 'react';
import { Layout } from "antd";
import SideNav from '../components/common components/SideNav';
import TopNav from '../components/common components/TopNav';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
const { Content } = Layout;

const AdminLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => setCollapsed(!collapsed);
    const { isDarkTheme } = useContext(ThemeContext);

    return (
        <Layout style={{ height: '100vh' }}>
            <SideNav collapsed={collapsed} />
            <Layout style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                <TopNav collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
                <Content 
                    style={{ 
                        margin: '24px 16px', 
                        padding: 24, 
                        backgroundColor: isDarkTheme ? "#dee2e6" : "#fff",
                        overflowY: 'auto',
                        flex: 1, 
                    }}>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default AdminLayout;
