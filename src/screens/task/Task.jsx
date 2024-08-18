import React from 'react';
import { Divider, Col, Row } from "antd";
import TaskCard from '../../components/card/SimpleTaskCard';
import TaskGradientButton from '../../components/Buttons/TaskGradientButton';
import { FileAddOutlined } from '@ant-design/icons';
import CustomTaskCard from '../../components/card/CustomTaskCard';


const Task = () => {
    return (
        <>
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <TaskCard width="100%" title="Total de Tarefas" description="20"/>
                </Col>
                <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <TaskCard width="100%" title="Total de Tarefas" description="20"/>
                </Col>
                <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <TaskCard width="100%" title="Total de Tarefas" description="20"/>
                </Col>
            </Row>
           <Divider/>
           <TaskGradientButton text="Add Task" icon={<FileAddOutlined/>}/>
           <Divider/>
           <CustomTaskCard title="Estudar" description="Estudar Para Prova"/>
        </>
    );
};

export default Task;
