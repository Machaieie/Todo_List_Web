import React, { useState } from 'react';
import { Divider, Col, Row, Input, Form, DatePicker, Dropdown } from "antd";
import TaskCard from '../../components/card/SimpleTaskCard';
import TaskGradientButton from '../../components/Buttons/TaskGradientButton';
import { FileAddOutlined } from '@ant-design/icons';
import CustomTaskCard from '../../components/card/CustomTaskCard';
import TaskModal from '../../components/modal/TaskModal';
import TaskDropdown from '../../components/Buttons/TaskDropdown';
import { SettingOutlined } from '@ant-design/icons';
import constants from '../../constants/DropdownConstants';
import moment from 'moment'; 
import http from "../../http.common";

const Task = () => {
  //  const [status, setStatus] = useState(constants.TaskStatus.INPROGRESS);
    const [priority, setPriority] = useState(constants.PriorityStatus.LOW);
    const [finalDate, setFinalDate] = useState(null);  
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handlePriorityClick = (e) => {
        if (e.key in constants.PriorityStatus) {
            setPriority(constants.PriorityStatus[e.key]);
            console.log("Priority", constants.PriorityStatus[e.key]);
        }
    };

    const priorityItems = {
        items: constants.priorityItems,
        onClick: handlePriorityClick,
    };

    // const handleStatusClick = (e) => {
    //     if (e.key in constants.TaskStatus) {
    //         setStatus(constants.TaskStatus[e.key]);
    //         console.log("Status", constants.TaskStatus[e.key]);
    //     }
    // };

    // const statusItems = {
    //     items: constants.statusItems,
    //     onClick: handleStatusClick,
    // };

    const handleOk = async () => {
        try {
            const values = await form.validateFields();
            const formData = {
                ...values,
                finalDate, // Incluindo a data formatada
                //status,
                priority,
            };
            //http.post("collaborator/collaborator",formData)
            console.log('Dados do formulário:', formData);

            setIsModalOpen(false);
        } catch (error) {
            console.log('Erro na validação:', error);
        }
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onChange = (date) => {
        if (date) {
            setFinalDate(moment(date).format('DD/MM/YYYY'));  // Formatar a data
        } else {
            setFinalDate(null);
        }
    };

    return (
        <>
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <TaskCard width="100%" title="All Tasks" description="20" />
                </Col>
                <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <TaskCard width="100%" title="Done Tasks" description="15" />
                </Col>
                <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <TaskCard width="100%" title="Canceled Tasks" description="5" />
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
                                label="Title"
                                name="title"
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
                                label="Description"
                                name="description"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Por favor, insira a descrição da tarefa.',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                            <Form.Item
                                label="Final Date"
                                name="finalDate"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Por favor, selecione a data final.',
                                    },
                                ]}
                            >
                                <DatePicker
                                    onChange={onChange}
                                    size="large"
                                    format="DD/MM/YYYY"  // Configura o formato do DatePicker
                                    placeholder='Final Date'
                                />
                            </Form.Item>
                        </Col>
                        {/* <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                            <Form.Item
                                label="Status"
                                name="status"
                            >
                                <Dropdown.Button menu={statusItems} icon={<SettingOutlined />} placement="bottomRight">
                                    {status}
                                </Dropdown.Button>
                            </Form.Item>
                        </Col> */}
                        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                            <Form.Item
                                label="Priority"
                                name="priority"
                            >
                                <Dropdown.Button menu={priorityItems} icon={<SettingOutlined />} placement="bottomRight">
                                    {priority}
                                </Dropdown.Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </TaskModal>
            <Divider />
            <Row>
                <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <CustomTaskCard title="Estudar">
                        Estudar para Prova
                    </CustomTaskCard>
                </Col>
            </Row>
        </>
    );
};

export default Task;
