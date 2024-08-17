import React from 'react';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;
import Routes from '../../routes/Routes';


const SideNav = ({ collapsed }) => {

    const routeItems = Routes();
    return (

        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="demo-logo-vertical" />
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
            >
                {routeItems.map((item => (
                    <Menu.Item key={item.key} icon={item.icon}>
                        {item.label}
                    </Menu.Item>
                )))}
            </Menu>
        </Sider>

    );
};


export default SideNav;