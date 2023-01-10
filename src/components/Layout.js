import React from 'react';
import { Layout, Menu, Anchor } from 'antd';
import { BookOutlined } from '@ant-design/icons';
import { Link, Outlet } from 'react-router-dom';

import { logOut } from '../features/auth/authSlice';
import { useDispatch } from 'react-redux';

import 'antd/dist/antd.min.css';
import './Layout.css';

const { Sider, Header } = Layout;

const MasterLayout = () => {
    const menuItems = [
        {
            key: '1',
            label: "Overview"
        },
        // {
        //     key: '2',
        //     label: "Growth"
        // },
        // {
        //     key: '3',
        //     label: "Treasury"
        // },
        // {
        //     key: '4',
        //     label: "Tokenomics"
        // },
        // {
        //     key: '5',
        //     label: "Community"
        // },
    ]
    const dispatch = useDispatch()
    
    return (
        <Layout>
            <Header
                theme="light"
                className='site-layout-sub-header-background'
                style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                Playbook
                <Link
                    to="/welcome"
                    onClick={() => dispatch(logOut())}
                    style={{ textDecoration: 'none', float: 'right' }}
                >
                    Log out
                </Link>
            </Header>

            <Sider
                theme="light"
                collapsible={false}
                className="master-sider"
            >
                <div className="logo">
                    <BookOutlined />
                    <span style={{ fontSize: "1.5em", marginLeft: "1em" }}>Playbook</span>
                </div>
                <Anchor>
                    <Menu
                        theme="light"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={menuItems}
                    />
                </Anchor>
            </Sider>
            <Outlet />
        </Layout>
    );
};

export default MasterLayout;