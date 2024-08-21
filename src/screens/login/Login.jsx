import React from 'react';
import { Card, Row, Col, Input, Form ,Button} from "antd";
import TaskGradientButton from '../../components/Buttons/TaskGradientButton';
import { LoginOutlined } from '@ant-design/icons';
const Login = () => {
    const [form] = Form.useForm();

    const onSubmit = async () => {
        try {


        } catch (error) {

        }
    };
    return (
        <Card

            style={{
                width: '80%',
                maxWidth: '500px',
                minWidth: '300px',
                height: '50vh',
                maxHeight: '400px',
                minHeight: '300px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
           
        >
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'please enter your username.',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'please enter your password.',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                    <TaskGradientButton text="Login" onClick={onSubmit} icon={<LoginOutlined/>} />
            </Row>
        </Card>
    );
};

export default Login;
