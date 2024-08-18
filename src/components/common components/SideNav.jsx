import React,{useContext} from 'react';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;
import Routes from '../../routes/Routes';
import { Link } from 'react-router-dom';
import logo from "../../assets/img/logo.png"
import { ThemeContext } from '../../context/ThemeContext';
import ColorConfig from '../../configs/ColorConfigs';

const SideNav = ({ collapsed }) => {
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
    const routeItems = Routes();

    return (
        <Sider trigger={null} collapsible collapsed={collapsed} style={{backgroundColor:isDarkTheme?ColorConfig.sidedarktheme:ColorConfig.sidecolor}}>
            <img 
                src={logo} 
                alt="Logo" 
                style={{ width: collapsed ? 100 : 200, transition: 'width 0.4s' }} 
            />
            <Menu
            style={{backgroundColor:isDarkTheme?ColorConfig.sidedarktheme:ColorConfig.sidecolor}}
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
