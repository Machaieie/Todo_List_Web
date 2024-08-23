import React, { useState, useContext, useEffect } from 'react';
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
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../context/AuthContext';

const Task = () => {
    const { user } = useContext(AuthContext);
    const [tasks, setTasks] = useState([]);  // State to store the tasks
    const [priority, setPriority] = useState(constants.PriorityStatus.LOW);
    const [finalDate, setFinalDate] = useState(null);  
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();

    const fetchTasks = async () => {
        try {
            const response = await http.get(`/task/user/${user.id}/tasks`);
            setTasks(response.data);
        } catch (error) {
            toast.error(`Failed to fetch tasks. Error: ${error.message}`);
        }
    };
    // Fetch tasks when the component mounts
    useEffect(() => {
       

        fetchTasks();
    }, [user.id]);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handlePriorityClick = (e) => {
        if (e.key in constants.PriorityStatus) {
            setPriority(constants.PriorityStatus[e.key]);
        }
    };

    const priorityItems = {
        items: constants.priorityItems,
        onClick: handlePriorityClick,
    };

    const handleOk = async () => {
        try {
            const values = await form.validateFields();
            const formData = {
                title: values.title,
                description: values.description,
                finalDate: finalDate,  
                priority: priority,
                user_id: user.id  
            };
    
            await http.post("task/addTask", formData);
            
            form.resetFields();
            setIsModalOpen(false);
            toast.success("Task created successfully!");
            
            fetchTasks();
    
        } catch (error) {
            toast.error(`Failed to create task. Please try again. Error: ${error.message}`);
        }
    };
    
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onChange = (date) => {
        if (date) {
            setFinalDate(moment(date).format('DD/MM/YYYY'));  
        } else {
            setFinalDate(null);
        }
    };

    return (
        <>
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                    <TaskCard width="100%" title="All Tasks" description={tasks.length.toString()} />
                </Col>
                {/* Other TaskCards for Done and Canceled tasks */}
            </Row>
            <Divider />
            <TaskGradientButton text="Add Task" icon={<FileAddOutlined />} onClick={showModal} />
            <TaskModal
                title={<p>Add Task</p>}
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
                                    format="DD/MM/YYYY"
                                    placeholder='Final Date'
                                />
                            </Form.Item>
                        </Col>
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
            <Row gutter={[16, 16]}>
                {tasks.map((task) => (
                    <Col xs={24} sm={12} md={8} lg={8} xl={8} key={task.id}>
                        <CustomTaskCard title={task.title}>
                            {task.description}
                        </CustomTaskCard>
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default Task;
