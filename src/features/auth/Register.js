/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import 'antd/dist/antd.min.css';
import { useRef, useState, useEffect } from 'react';
import { Card, Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

const Register = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const userRef = useRef()
    const errRef = useRef()

    const EMAIL_REGEX = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character

    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState(false)
    const [emailFocus, setEmailFocus] = useState(false)

    const [pwd, setPwd] = useState('')
    const [validPwd, setValidPwd] = useState(false)
    const [pwdFocus, setPwdFocus] = useState(false)

    const [matchPwd, setMatchPwd] = useState('')
    const [validMatch, setValidMatch] = useState(false)
    const [matchFocus, setMatchFocus] = useState(false)

    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    console.log(errRef, emailFocus, validPwd, pwdFocus, validMatch, matchFocus, errMsg, success)
    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        const result = EMAIL_REGEX.test(email)
        console.log(result)
        console.log(email)
        setValidEmail(result)
    }, [email])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd)
        console.log(result)
        console.log(pwd)
        setValidPwd(result)
        const match = pwd === matchPwd
        setValidMatch(match)
    }, [pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = EMAIL_REGEX.test(email)
        const v2 = PWD_REGEX.test(pwd)
        const v3 = pwd === matchPwd
        if (!v1 || !v2 || !v3) {
            setErrMsg("Invalid entry")
            return
        }
        console.log(email, pwd)
        setSuccess(true)
    }

    return (
        <Card
            bordered
            title="Register"
            style={{ width: '25%', minWidth: '400px', display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: '80px' }}>
            <Form
                layout="vertical"

                name="basic"
                labelCol={{
                    span: 10,
                }}
                wrapperCol={{
                    span: 14,
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
                            pattern: EMAIL_REGEX,
                            message: 'Please input a valid email!',
                        },
                    ]}
                    wrapperCol={{ span: 24 }}
                >
                    <Input
                        id='email'
                        ref={userRef}
                        onChange={(e) => setEmail(e.target.value)}
                        aria-invalid={validEmail ? "false" : "true"}
                        aria-describedby="uidnote"
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                    />
                </Form.Item>

                <Form.Item
                    wrapperCol={{ span: 24 }}
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            pattern: PWD_REGEX,
                            message: 'Please input a valid password!',
                        },
                    ]}
                >
                    <Input.Password id="password"
                        onChange={(e) => setPwd(e.target.value)}
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)} />
                </Form.Item>
                <Form.Item
                    wrapperCol={{ span: 24 }}
                    label="Conform password"
                    name="conformPassword"
                    rules={[
                        {
                            required: true,
                            pattern: PWD_REGEX,
                            message: 'Please input a valid password!',
                        },
                    ]}
                >
                    <Input.Password
                        id="password"
                        onChange={(e) => setMatchPwd(e.target.value)}
                        onFocus={() => setMatchFocus(true)}
                        onBlur={() => setMatchFocus(false)}
                    />
                </Form.Item>
                <Form.Item
                    wrapperCol={{ span: 24 }}
                >
                    <Button
                        type="primary"
                        htmlType="submit"
                        block
                        // disabled={!Boolean(email) && !Boolean(pwd) && !Boolean(matchPwd)}
                        disabled
                        onClick={handleSubmit}>
                        Create Account
                    </Button>
                </Form.Item>
                <p>Registration is not open yet. <a href="https://docs.google.com/forms/d/1AT-rkF7Jp0tPoTl6pjQVTeLSkDrkdDmq1SxA3EIc8j0/edit?usp=drive_open">Join waitlist</a></p>
                <p>Already have an account? <Link to="/auth/login">Login</Link></p>
            </Form>
        </Card>
    );
};

export default Register;