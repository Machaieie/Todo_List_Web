import React, { useState } from 'react';
import { Avatar, Card, Flex } from 'antd';
import { EditOutlined, SettingOutlined } from '@ant-design/icons';

const actions = [
    <EditOutlined key="edit" />,
    <SettingOutlined key="setting" />,
];
const CustomTaskCard = ({ loading, title, description }) => {
    return (
        <Flex gap="middle" align="start" vertical>
            <Card
                loading={loading}
                actions={actions}
                style={{
                    minWidth: 300,
                }}
            >
                <Card.Meta
                    title={title}
                    description={
                        <>
                            {description}
                        </>
                    }
                />

            </Card>
        </Flex>
    );
};


export default CustomTaskCard;