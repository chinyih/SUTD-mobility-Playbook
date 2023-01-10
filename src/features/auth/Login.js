import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useLoginMutation } from './authApiSlice'
import { setCredentials } from './authSlice'

import 'antd/dist/antd.min.css';

import { Card, Button, Form, Input, Divider } from 'antd';
import { FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa';
import MetaMask from '../../static/MetaMask.svg';

import { Link } from 'react-router-dom';

const Login = () => {
    const userRef = useRef()
    const errRef = useRef()
    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const navigate = useNavigate()

    const [login, { isLoading }] = useLoginMutation()
    const dispatch = useDispatch()

    const [form] = Form.useForm()

    console.log(errMsg, login)

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd])

    const handleBaseLogin = async (e) => {
        e.preventDefault()

        try {
            // const userData = await login({user, pwd}).unwrap()
            // console.log(userData)
            // dispatch(setCredentials({ ...userData, user}))

            if (user === 'demo@playbook.space' && pwd === 'password') {
                const accessToken = '123'
                dispatch(setCredentials({ user, accessToken }))
                setUser('')
                setPwd('')
                form.resetFields()
                navigate('/')
            } else {
                alert('Your email or password is invalid.')
                setUser('')
                setPwd('')
                form.resetFields()
            }

        } catch (err) {
            if (!err?.originalStatus) {
                // isLoading: true until timeout occurs
                setErrMsg('No Server Response');
            } else if (err.originalStatus === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.originalStatus === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();

            navigate('/welcome')
        }
    }

    const handleUserInput = (e) => setUser(e.target.value)
    const handlePwdInput = (e) => setPwd(e.target.value)

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    const content = (
        <>
            <Card
                bordered
                title="Playbook Login"
                style={{ width: '350px', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: '80px' }}>
                <span>Not registered? <Link to="/auth/register">Register</Link></span>
                {/* <span>Not registered? Just login, we'll automatically create an account.</span> */}
                <Divider />
                <Form
                    form={form}
                    layout="vertical"
                    name="basic"
                    wrapperCol={{
                        span: 24,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    arrange="center"
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}

                    >
                        <Input ref={userRef} value={user} onChange={handleUserInput} />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password value={pwd} onChange={handlePwdInput} />
                    </Form.Item>
                    {/* <Form.Item name="remember" valuePropName="checked" >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item> */}

                    <Form.Item>
                        <Button
                            type="primary"
                            block
                            htmlType="submit"
                            size='large'
                            onClick={handleBaseLogin}
                            disabled={!Boolean(pwd) || !Boolean(user)}
                        >
                            Login
                        </Button>
                    </Form.Item>
                    <Divider />

                    <Form.Item name="google">
                        <Button type="default" block htmlType="submit" size='large' icon={<FaGoogle />} onClick={() => alert("Coming soon")}>
                            <span>&nbsp;&nbsp;Google</span>
                        </Button>
                    </Form.Item>
                    <Form.Item name="Twitter">
                        <Button type="default" block htmlType="submit" size='large' icon={<FaTwitter />} onClick={() => alert("Coming soon")}>
                            <span>&nbsp;&nbsp;Twitter</span>
                        </Button>
                    </Form.Item>
                    <Form.Item name="github">
                        <Button type="default" block htmlType="submit" size='large' icon={<FaGithub />} onClick={() => alert("Coming soon")}>
                            <span>&nbsp;&nbsp;Github</span>
                        </Button>
                    </Form.Item>
                    <Divider />
                    <Form.Item name="metamask">
                        <Button
                            type="default"
                            block
                            htmlType="submit"
                            size='large'
                            shape='round'
                            icon={<img alt='MetaMask' src={MetaMask} style={{ height: '16px', width: '16px' }} />}
                            onClick={() => alert("Coming soon")}
                        >
                            <span>&nbsp;&nbsp;MetaMask</span>
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </>
    )
    return content;
};

export default Login;