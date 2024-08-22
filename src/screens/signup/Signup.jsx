import React,{useContext} from 'react';
import { Card, Row, Col, Input, Form, Button, Typography } from "antd";
import { Link } from 'react-router-dom';
import { UserAddOutlined } from '@ant-design/icons';
import logo from '../../assets/img/icone.png';
import {AuthContext} from "../../context/AuthContext"
const { Text } = Typography;

const Signup = () => {
    const [form] = Form.useForm();
    const { signup } = useContext(AuthContext);
    const onSubmit = async () => {
        try {
            const values = await form.validateFields();
            // console.log('Signup Form Values:', values);
            signup(values.name, values.username, values.password, values.email);

        } catch (error) {
            console.error('Validation Failed:', error);
        }
    };

    return (
        <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
            <Card
                style={{
                    width: '80%',
                    maxWidth: '700px',
                    minWidth: '300px',
                    height: 'auto',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
            >
                <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <img src={logo} alt="Logo" style={{ width: '90px', marginBottom: '20px' }} />
                </div>
                <Typography.Title  level={3} style={{ marginBottom: '20px',display: 'flex', justifyContent: 'center', width: '100%'  }}>
                    Create an Account
                </Typography.Title>
                
                <Form
                    form={form}
                    layout="vertical"
                    style={{ width: '100%' }}
                    onFinish={onSubmit}
                >
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                            <Form.Item
                                label="Name"
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your name.',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please enter your username.',
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
                                        message: 'Please enter your password.',
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        type: 'email',
                                        message: 'Please enter a valid email address.',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>




                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            icon={<UserAddOutlined />}
                            style={{ width: '100%' }}
                        >
                            Sign Up
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <Text>
                            Already have an account? <Link to="/">Login here</Link>
                        </Text>
                    </Form.Item>
                </Form>
            </Card>
        </Row>
    );
};

export default Signup;
