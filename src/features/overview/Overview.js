import Community from "./Community";
import Growth from "./Growth";
import Introduction from "./Introduction";
import Tokenomics from "./Tokenomics";
import Treasury from "./Treasury";

import { Layout } from "antd";

import React from 'react'

const { Content, Footer } = Layout

const Overview = () => {
    const content =
        <Layout style={{ marginLeft: 202 }}>
            <Content id="overview" style={{
                margin: '90px 16px 0',
            }}>
                <div className="site-layout-background">
                    <Introduction />
                </div>
            </Content>
            <Content id="growth" style={{ margin: '24px 16px 0', }}>
                <Growth />
            </Content>
            <Content id="treasury" style={{ margin: '24px 16px 0', }}>
                <Treasury />
            </Content>

            <Content id="tokenomics" style={{ margin: '24px 16px 0', }}>
                <Tokenomics />
            </Content>
            <Content id="community" style={{ margin: '24px 16px 50px', }}>
                <Community />
            </Content>
            <Footer style={{ textAlign: 'center' }}>Made with ❤ by Playbook ©2022</Footer>
        </Layout>

    return content
}

export default Overview