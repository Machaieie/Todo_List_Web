import React from 'react';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;
import Routes from '../../routes/Routes';
import { Link } from 'react-router-dom';
import logo from "../../assets/img/logo.png"
const SideNav = ({ collapsed }) => {
    const routeItems = Routes();

    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <img src={logo} alt="" style={{width:200}} srcset="" />
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={routeItems.map(item => ({
                    key: item.key,
                    icon: item.icon,
                    label: <Link to={item.link}>{item.label}</Link>,
                }))}
            />
        </Sider>
    );
};

export default SideNav;
