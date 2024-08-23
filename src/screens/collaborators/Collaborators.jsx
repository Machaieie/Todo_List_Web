import React, { useState, useEffect, useContext } from 'react';
import { Divider, Col, Row, Form, Table, AutoComplete } from "antd";
import TaskCard from '../../components/card/SimpleTaskCard';
import TaskGradientButton from '../../components/Buttons/TaskGradientButton';
import { UserAddOutlined } from '@ant-design/icons';
import TaskModal from '../../components/modal/TaskModal';
import constants from '../../constants/DropdownConstants';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import http from "../../http.common";

const Collaborators = () => {
    const { user } = useContext(AuthContext);
    const [tasks, setTasks] = useState([]);
    const [collaborators, setCollaborators] = useState([]);
    const [selectedTaskId, setSelectedTaskId] = useState(null);
    const [selectedCollaboratorId, setSelectedCollaboratorId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();
    const [collaboratorsData, setCollaboratorsData] = useState([]);
    const fetchTasks = async () => {
        try {
            const response = await http.get(`/task/user/${user.id}/tasks`);
            console.log("response =>",response)
            const taskOptions = response.data.map(task => ({
                value: task.title,
                label: task.title,
                id: task.id 
            }));
            setTasks(taskOptions);
        } catch (error) {
            toast.error(`Failed to fetch tasks. Error: ${error.message}`);
        }
    };

    const fetchCollaborators = async () => {
        try {
            const response = await http.get(`/auth/users`);
            const collaboratorOptions = response.data.map(collaborator => ({
                value: collaborator.username,
                label: collaborator.username,
                id: collaborator.id  
            }));
            setCollaborators(collaboratorOptions);
        } catch (error) {
            toast.error(`Failed to fetch collaborators. Error: ${error.message}`);
        }
    };
    const fetchCollaboratorsData = async () => {
        try {
            const response = await http.get('/collaborator/taskInfo'); 
            const formattedData = response.data.map(item => ({
                key: item.id,  
                collaboratorName: item.collaboratorName,
                taskTitle: item.taskTitle,
                createdBy: item.createdBy,
            }));
            setCollaboratorsData(formattedData);
        } catch (error) {
            toast.error(`Failed to fetch collaborators data. Error: ${error.message}`);
        }
    };

    useEffect(() => {
        fetchTasks();
        fetchCollaborators();
        fetchCollaboratorsData(); 
    }, [user.id]);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = async () => {
        try {
            const values = await form.validateFields();

            const response = await http.post("collaborator/addCollaborator", {
                "user_id": `${selectedCollaboratorId}`,
                "task_id": `${selectedTaskId}`
            });
            form.resetFields();
            toast.success("Collaborator added sucessfully");
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
                    <TaskCard width="100%" title="Collaborators Actives" description="20" />
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
                                        message: 'Por favor, insira a tarefa.',
                                    },
                                ]}
                            >
                                <AutoComplete
                                    options={tasks}
                                    placeholder="Search a task"
                                    onSelect={(value) => {
                                        const selectedTask = tasks.find(task => task.value === value);
                                        setSelectedTaskId(selectedTask.id);
                                        form.setFieldsValue({ task: value });
                                    }}
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                            <Form.Item
                                label="Collaborator"
                                name="collaborator"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Por favor, insira o colaborador.',
                                    },
                                ]}
                            >
                                <AutoComplete
                                    options={collaborators}
                                    placeholder="Search Collaborator"
                                    onSelect={(value) => {
                                        const selectedCollaborator = collaborators.find(collaborator => collaborator.value === value);
                                        setSelectedCollaboratorId(selectedCollaborator.id);
                                        form.setFieldsValue({ collaborator: value });
                                    }}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </TaskModal>
            <Table columns={constants.collaboratorsHeaderTable} dataSource={collaboratorsData}/>
        </>
    );
};

export default Collaborators;
