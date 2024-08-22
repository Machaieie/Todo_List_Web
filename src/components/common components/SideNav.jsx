import React, { useContext } from 'react';
import { Layout, Menu, Button, Typography } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons'; 
const { Sider } = Layout;
import Routes from '../../routes/Routes';
import { Link } from 'react-router-dom';
import logo from "../../assets/img/logo.png";
import { ThemeContext } from '../../context/ThemeContext';
import ColorConfig from '../../configs/ColorConfigs';
import { AuthContext } from '../../context/AuthContext';

const { Text } = Typography;

const SideNav = ({ collapsed }) => {
    const { isDarkTheme } = useContext(ThemeContext);
    const { logout, user } = useContext(AuthContext);
    const routeItems = Routes();

    const handleLogout = () => {
        logout();
    };

    return (
        <Sider 
            trigger={null} 
            collapsible 
            collapsed={collapsed} 
            style={{
                backgroundColor: isDarkTheme ? ColorConfig.sidedarktheme : ColorConfig.sidecolor, 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between'
            }}
        >
            <div>
                <img 
                    src={logo} 
                    alt="Logo" 
                    style={{ width: collapsed ? 100 : 200, transition: 'width 0.4s' }} 
                />
                <Menu
                    style={{ backgroundColor: isDarkTheme ? ColorConfig.sidedarktheme : ColorConfig.sidecolor }}
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={routeItems.map(item => ({
                        key: item.key,
                        icon: item.icon,
                        label: <Link to={item.link}>{item.label}</Link>,
                    }))}
                />
            </div>
            <div 
                style={{ 
                    padding: '10px', 
                    textAlign: 'center', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'flex-end', 
                    alignItems: 'center',
                    marginTop: "280px" 
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', color: isDarkTheme ? '#fff' : '#fff', marginBottom: '16px' }}>
                    <UserOutlined style={{ fontSize: '24px', marginRight: '8px' }} />
                    <Text style={{color:"#fff"}}>{user.nome}</Text>
                </div>
                <Button 
                    type="primary" 
                    icon={<LogoutOutlined />} 
                    onClick={handleLogout} 
                    style={{ 
                        backgroundColor: isDarkTheme ? '#1890ff' : '#001529', 
                        borderColor: isDarkTheme ? '#1890ff' : '#001529',
                        width: '100%',
                        maxWidth: '200px',
                        textAlign: 'center'
                    }}
                >
                    Logout
                </Button>
            </div>
        </Sider>
    );
};

export default SideNav;
