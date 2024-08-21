import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;

const TaskCard = ({width, title,description}) => {
    return (
        <Card
            hoverable
            style={{ width: width }}
        >
            
            <Meta title={title} description={description} />
        </Card>
    );
};


export default TaskCard;