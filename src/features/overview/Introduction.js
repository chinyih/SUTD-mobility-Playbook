import React from 'react'
import { Card, Space } from 'antd';

const Introduction = () => {
    return (
        <Card title="Introduction" bordered={false} >
            <p>StepN Analytic.</p>
            <Space size="middle">
                <a href="https://playbook.space" target="_blank" rel="noopener noreferrer">
                    Website
                </a>
                <a href="https://discord.gg/uBjJEbAGeh" target="_blank" rel="noopener noreferrer">
                    Discord
                </a>
                <a href="https://twitter.com/playbook_space" target="_blank" rel="noopener noreferrer">
                    Twitter
                </a>
            </Space>
        </Card>
    )
}

export default Introduction