import React, { useState } from 'react';
import { Layout } from "antd";
import SideNav from '../components/common components/SideNav';
import TopNav from '../components/common components/TopNav';
import { Outlet } from 'react-router-dom';

const { Content } = Layout;

const AdminLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => setCollapsed(!collapsed);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <SideNav collapsed={collapsed} />
            <Layout>
                <TopNav collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
                <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: '280px' }}>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default AdminLayout;
