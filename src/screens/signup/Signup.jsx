import React from 'react';
import { Card, Row, Col, Input, Form, Button, Typography } from "antd";
import { Link } from 'react-router-dom';
import { UserAddOutlined } from '@ant-design/icons';

const { Text } = Typography;

const Signup = () => {
    const [form] = Form.useForm();

    const onSubmit = async () => {
        try {
            const values = await form.validateFields();
            console.log('Signup Form Values:', values);

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
                <Typography.Title  level={2} style={{ marginBottom: '20px' }}>
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
