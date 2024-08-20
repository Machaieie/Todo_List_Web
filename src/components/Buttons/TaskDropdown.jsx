import React from 'react';
import { Dropdown } from 'antd';

const TaskDropdown = ({menuItems, data, setValue, icon, text}) => {
    const handleMenuClick = (e) => {
        setValue(e.value)
    };
    const menuProps = {
        items: menuItems,
        onClick: handleMenuClick,
    };
    return (
        <Dropdown.Button menu={menuProps} icon={icon} size='large'>
            {text}
        </Dropdown.Button>
    );
};


export default TaskDropdown;