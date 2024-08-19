import React, { useState } from 'react';
import { Divider, Col, Row } from "antd";
import TaskCard from '../../components/card/SimpleTaskCard';
import TaskGradientButton from '../../components/Buttons/TaskGradientButton';
import { FileAddOutlined } from '@ant-design/icons';
import CustomTaskCard from '../../components/card/CustomTaskCard';
import TaskModal from '../../components/modal/TaskModal';

const Task = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <TaskCard width="100%" title="Total de Tarefas" description="20" />
                </Col>
                <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <TaskCard width="100%" title="Total de Tarefas" description="20" />
                </Col>
                <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <TaskCard width="100%" title="Total de Tarefas" description="20" />
                </Col>
            </Row>
            <Divider />
            <TaskGradientButton text="Add Task" icon={<FileAddOutlined />} onClick={showModal} />
            <TaskModal
                title={<p>Loading Modal</p>}
                isModalOpen={isModalOpen}
                handleCancel={handleCancel}
                handleOk={handleOk}

            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </TaskModal>
            <Divider />
            <Row>
                <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <CustomTaskCard title="Estudar" >
                        Estudar para Prova
                    </CustomTaskCard>
                </Col>
            </Row>

        </>
    );
};

export default Task;
