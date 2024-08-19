import React, { useState } from 'react';
import { Card, Dropdown, Menu, Button, Space } from 'antd';
import { EditOutlined, SettingOutlined, DownOutlined, DeleteOutlined } from '@ant-design/icons';
import { css } from "@emotion/css";
const TaskStatus = {
    DONE: 'Done',
    CANCELED: 'Canceled',
    INPROGRESS: 'In Progress',
};

const CustomTaskCard = ({ loading, title, description, children, onRemove, onStatusChange }) => {
    const [status, setStatus] = useState(TaskStatus.INPROGRESS);

    const handleMenuClick = (e) => {
        if (e.key === 'remove') {
            onRemove();
        } else if (e.key in TaskStatus) {
            setStatus(TaskStatus[e.key]);
            onStatusChange(TaskStatus[e.key]);
        }
    };

    const menuItems = [
        {
            label: 'Remove',
            key: 'remove',
            icon: <DeleteOutlined />,
            danger: true,
        },
        {
            label: 'Status',
            key: 'status',
            icon: <SettingOutlined />,
            children: [
                {
                    label: 'Done',
                    key: 'DONE',
                },
                {
                    label: 'Canceled',
                    key: 'CANCELED',
                },
                {
                    label: 'In Progress',
                    key: 'INPROGRESS',
                },
            ],
        },
    ];

    const menuProps = {
        items: menuItems,
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
