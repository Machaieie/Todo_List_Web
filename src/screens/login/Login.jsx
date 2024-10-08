import React, {useContext} from 'react';
import { Card, Row, Input, Form,Button, Typography } from "antd";
import { Link } from 'react-router-dom';
import { LoginOutlined } from '@ant-design/icons';
import logo from '../../assets/img/icone.png';
import {AuthContext} from "../../context/AuthContext"
const { Text } = Typography;

const Login = () => {
    const [form] = Form.useForm();
    const { login } = useContext(AuthContext);
    const onSubmit = async () => {
        try {
            const values = await form.validateFields();
            //console.log('Form Values:', values);
            login(values.username, values.password);
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
                    minWidth: '350px',
                    height: 'auto',
                    maxHeight: '400px',
                    minHeight: '300px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
            >
               <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <img src={logo} alt="Logo" style={{ width: '90px', marginBottom: '20px' }} />
                </div>
                <Form
                    form={form}
                    layout="vertical"
                    style={{ width: '100%' }}
                >
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
                    <Form.Item>

                        <Button
                            type="primary"
                            htmlType="submit"
                            icon={<LoginOutlined />}
                            style={{ width: '100%' }}
                            onClick={onSubmit}
                        >
                            Login
                        </Button>


                    </Form.Item>
                    <Form.Item>
                        <Text>
                            Don't have an account? <Link to="/signup">Create one</Link>
                        </Text>
                    </Form.Item>
                </Form>
            </Card>
        </Row>
    );
};

export default Login;
