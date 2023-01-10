import { ProCard, StatisticCard } from '@ant-design/pro-components';
import '@ant-design/pro-components/dist/components.css';
import { Space } from 'antd';
import React from 'react'

const { Statistic, Divider } = StatisticCard;

const Tokenomics = () => {
    return (
        <ProCard.Group
            title="Tokenomics"
            bordered={false}
            headerBordered
        >
            <ProCard
                direction={"vertical"} wrap>
                <StatisticCard.Group direction={'row'}>
                    <StatisticCard
                        title='Total supply'
                        statistic={{
                            value: 20190102,
                            precision: 0,
                            prefix: '$',
                            description: (
                                <Space>
                                    <Statistic title="MoM:" value="16.8%" trend="up" />
                                    <Statistic title="Prev. month:" value="$17.3m" />
                                </Space>
                            )
                        }}
                        chart={
                            <img
                                src="https://gw.alipayobjects.com/zos/alicdn/zevpN7Nv_/xiaozhexiantu.svg"
                                alt="直方图"
                                width="100%"
                            />
                        }
                    />
                    <Divider type={'vertical'} />
                    <StatisticCard
                        title='Token price'
                        statistic={{
                            value: 89.51,
                            precision: 2,
                            prefix: '$',
                            description: (
                                <Space>
                                    <Statistic title="MoM:" value="10%" trend="up" />
                                    <Statistic title="Prev. month:" value="$81.12" />
                                </Space>
                            ),
                        }}

                        chart={
                            <img
                                src="https://gw.alipayobjects.com/zos/alicdn/zevpN7Nv_/xiaozhexiantu.svg"
                                alt="直方图"
                                width="100%"
                            />
                        }
                    />
                    <Divider type={'vertical'} />
                    <StatisticCard
                        title='Market cap'
                        statistic={{
                            value: 10123431,
                            description: (
                                <Space>
                                    <Statistic title="MoM:" value="2.5%" trend="up" />
                                    <Statistic title="Prev. month:" value="$9.87m" />
                                </Space>
                            ),
                        }}
                        chart={
                            <img
                                src="https://gw.alipayobjects.com/zos/alicdn/zevpN7Nv_/xiaozhexiantu.svg"
                                alt="直方图"
                                width="100%"
                            />
                        }
                    />
                </StatisticCard.Group>
            </ProCard>

        </ProCard.Group>
    )
}

export default Tokenomics