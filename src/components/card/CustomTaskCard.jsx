import React, { useState } from 'react';
import { Card, Dropdown } from 'antd';
import { EditOutlined, SettingOutlined } from '@ant-design/icons';
import { css } from "@emotion/css";
import constants from '../../constants/DropdownConstants';


const CustomTaskCard = ({ loading, title, description, children, onRemove, onStatusChange }) => {
    const [status, setStatus] = useState(constants.TaskStatus.INPROGRESS);

    const handleMenuClick = (e) => {
        if (e.key === 'remove') {
            onRemove();
        } else if (e.key in constants.TaskStatus) {
            setStatus(constants.TaskStatus[e.key]);
            onStatusChange(constants.TaskStatus[e.key]);
        }
    };

    

    const menuProps = {
        items: constants.menuItems,
        onClick: handleMenuClick,
    };

    const actions = [
        <EditOutlined key="edit" />,
        <Dropdown.Button menu={menuProps} icon={<SettingOutlined />} placement="bottomRight">
            Actions
        </Dropdown.Button>,
    ];
    const cardStyle = css`
        min-width: 90px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    `;
    return (
        <Card
            hoverable
            loading={loading}
            actions={actions}
            style={
                {cardStyle

                }
            }
        >
            <Card.Meta
                title={`${title} (${status})`}
                description={<>{description}</>}
            />
            {children}
        </Card>
    );
};

export default CustomTaskCard;
