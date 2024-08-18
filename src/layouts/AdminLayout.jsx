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
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
    return (
        <Layout style={{ minHeight: '100vh' ,backgroundColor:isDarkTheme?"#fafaff":"#eef0f2" }}>
            <SideNav collapsed={collapsed}  />
            <Layout>
                <TopNav collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
                <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: '280px', backgroundColor:isDarkTheme?"#fafaff":"#eef0f2" }}>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default AdminLayout;
