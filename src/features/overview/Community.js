import { ProCard } from '@ant-design/pro-components';
import { Statistic } from 'antd';
import { StatisticCard } from '@ant-design/pro-components';
import '@ant-design/pro-components/dist/components.css';

import React from 'react'
const Community = () => {
    return (
        <ProCard.Group
            title="Community"
            bordered={false}
            headerBordered
            wrap
        >
            <ProCard colSpan="30%" direction="vertical" wrap>
                <StatisticCard
                    title='Twitter growth'
                    chart={
                        <img
                            src="https://gw.alipayobjects.com/zos/alicdn/snEBTn9ax/zhexiantuchang.svg"
                            alt="直方图"
                            width="100%"
                        />
                    }
                />
                <StatisticCard
                    title='Discord growth'
                    chart={
                        <img
                            src="https://gw.alipayobjects.com/zos/alicdn/snEBTn9ax/zhexiantuchang.svg"
                            alt="直方图"
                            width="100%"
                        />
                    }
                />
            </ProCard>
            <ProCard colSpan="70%" wrap>
                <ProCard title="Twitter Followers" layout="center" colSpan={{ md: 8 }} bordered style={{ height: 180 }}>
                    <Statistic value={689932} precision={0} valueStyle={{ fontSize: "xx-large" }} />
                </ProCard>
                <ProCard title="Discord Members" layout="center" colSpan={{ md: 8 }} bordered style={{ height: 180 }}>
                    <Statistic value={387779} precision={0} valueStyle={{ fontSize: "xx-large" }} />
                </ProCard>
                <ProCard title="Github Stars" layout="center" colSpan={{ md: 8 }} bordered style={{ height: 180 }}>
                    <Statistic value={385} precision={0} valueStyle={{ fontSize: "xx-large" }} />
                </ProCard>
                <ProCard title="Github Forks" layout="center" colSpan={{ md: 8 }} bordered style={{ height: 180 }}>
                    <Statistic value={220} precision={0} valueStyle={{ fontSize: "xx-large" }} />
                </ProCard>
                <ProCard title="Github Commits" layout="center" colSpan={{ md: 8 }} bordered style={{ height: 180 }}>
                    <Statistic value={13000} precision={0} valueStyle={{ fontSize: "xx-large" }} />
                </ProCard>
                <ProCard title="Github Contributors" layout="center" colSpan={{ md: 8 }} bordered style={{ height: 180 }}>
                    <Statistic value={5} precision={0} valueStyle={{ fontSize: "xx-large" }} />
                </ProCard>
            </ProCard>
        </ProCard.Group>
    )
}

export default Community