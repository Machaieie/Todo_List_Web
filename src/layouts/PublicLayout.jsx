import React from 'react';
import { Layout } from 'antd';
import ColorConfig from '../configs/ColorConfigs';
import Login from '../screens/login/Login';

const PublicLayout = () => {
    return (
        <Layout style={{ minHeight: '100vh' ,backgroundColor:ColorConfig.sidecolor }}>
            <Login/>
        </Layout>
    );
};


export default PublicLayout;