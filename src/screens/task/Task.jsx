import React, { useState } from 'react';
import { Divider, Col, Row, Input, Form, DatePicker } from "antd";
import TaskCard from '../../components/card/SimpleTaskCard';
import TaskGradientButton from '../../components/Buttons/TaskGradientButton';
import { FileAddOutlined } from '@ant-design/icons';
import CustomTaskCard from '../../components/card/CustomTaskCard';
import TaskModal from '../../components/modal/TaskModal';
import TaskDropdown from '../../components/Buttons/TaskDropdown';
import { SettingOutlined } from '@ant-design/icons';
import constants from '../../constants/DropdownConstants';


const Task = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [defaultValue, setDefaultValue] = useState("");
    const [form] = Form.useForm();
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const onChange = (date, dateString) => {
        console.log(date, dateString);
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
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                            <DatePicker
                                multiple
                                onChange={onChange}
                                maxTagCount="responsive"
                                defaultValue={defaultValue}
                                size="large"
                                placeholder='Final Date'

                            />
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                            <TaskDropdown text="Status" menuItems={constants.statusDropdownItems} icon={<SettingOutlined />} />
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                            <TaskDropdown text="Priority" menuItems={constants.priorityDropdownItems} icon={<SettingOutlined />} />
                        </Col>
                    </Row>

                </Form>
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
