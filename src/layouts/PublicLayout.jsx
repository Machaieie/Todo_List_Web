import React from 'react';
import { Layout } from 'antd';
import ColorConfig from '../configs/ColorConfigs';
import { Outlet } from 'react-router-dom';
const PublicLayout = () => {
    return (
        <Layout 
            style={{ 
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: ColorConfig.sidecolor 
            }}>
            <Outlet/>
        </Layout>
    );
};

export default PublicLayout;
