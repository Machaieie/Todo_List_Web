import React, { useState } from 'react';
import { Divider, Col, Row, Input, Form } from "antd";
import TaskCard from '../../components/card/SimpleTaskCard';
import TaskGradientButton from '../../components/Buttons/TaskGradientButton';
import { UserAddOutlined } from '@ant-design/icons';
import TaskModal from '../../components/modal/TaskModal';

const Collaborators = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = async () => {
        try {


            setIsModalOpen(false);
        } catch (error) {
            console.log('Erro na validação:', error);
        }
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <TaskCard width="100%" title="All collaborators" description="20" />
                </Col>
                <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <TaskCard width="100%" title="Colaborators Actives" description="20" />

                </Col>
                <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <TaskCard width="100%" title="All collaborators" description="20" />

                </Col>
            </Row>
            <Divider />
            <TaskGradientButton text="Add Collaborator" icon={<UserAddOutlined />} onClick={showModal} />
            <Divider />
            <TaskModal
                title={<p>Add Collaborator</p>}
                isModalOpen={isModalOpen}
                handleCancel={handleCancel}
                handleOk={handleOk}
            >
                 <Form
                    form={form}
                    name="addtask"
                    autoComplete="off"
                    style={{
                        maxWidth: 600,
                    }}
                    layout="vertical"
                >
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                        <Form.Item
                                label="Task"
                                name="task"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Por favor, insira o título da tarefa.',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                        <Form.Item
                                label="Collaborator"
                                name="collaborator"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Por favor, insira o título da tarefa.',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </TaskModal>
        </>
    );
};


export default Collaborators;