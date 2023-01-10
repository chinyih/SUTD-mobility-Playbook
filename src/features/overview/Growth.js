import { ProCard, StatisticCard } from '@ant-design/pro-components';
import { Space } from 'antd';
import '@ant-design/pro-components/dist/components.css';
import ReactCohortGraph from 'react-cohort-graph';
import React from 'react'

const { Statistic, Divider } = StatisticCard;

const Growth = () => {
    const DATA = {
        days: {
            "05-31-2022": [300, 180, 120, 80, 50, 20, 15, 10, 5, 2],
            "06-01-2022": [200, 180, 120, 80, 50, 20, 10, 5, 1],
            "06-02-2022": [300, 180, 120, 80, 50, 20, 10, 5],
            "06-03-2022": [200, 120, 80, 30, 20, 5, 1],
            "06-04-2022": [200, 80, 30, 10, 5, 3],
            "06-05-2022": [300, 180, 100, 80, 70],
            "06-06-2022": [200, 120, 80, 40],
            "06-07-2022": [200, 80, 30],
            "06-08-2022": [300, 180],
            "06-09-2022": [200]
        },
        weeks: {
            "week1": [200, 10, 20],
            "week2": [300, 200],
            "week3": [200]
        },
        months: {
            "month1": [200, 10, 20, 30],
            "month2": [300, 200, 150],
            "month3": [200, 110],
            "month4": [100]
        }
    };
    return (
        <ProCard.Group
            title="User Data"
            bordered={false}
            headerBordered
        >
            <ProCard
                direction={"vertical"} wrap>
                <StatisticCard.Group direction={'row'}>
                    <StatisticCard
                        title='Total User'
                        statistic={{
                            value: 292894,
                            precision: 0,
                            prefix: '',
                            description: (
                                <Space>
                                    <Statistic title="DoD:" value="0.63%" trend="up" />
                                    <Statistic title="Yesterday:" value="291055" />
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
                        title='Monthly Active User'
                        statistic={{
                            value:170640,
                            precision: 0,
                            prefix: '',
                            description: (
                                <Space>
                                    <Statistic title="MoM:" value="64%" trend="down" />
                                    <Statistic title="Prev. month:" value="474,560" />
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
                        title='Daily Active User'
                        statistic={{
                            value: 5878,
                            precision: 0,
                            prefix: '',
                            description: (
                                <Space>
                                    <Statistic title="DoD:" value="0.59%" trend="down" />
                                    <Statistic title="Yesterday:" value="6,251" />
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
                        title='Daily New Users'
                        statistic={{
                            value: 1455,
                            description: (
                                <Space>
                                    <Statistic title="DoD:" value="3.26%" trend="up" />
                                    <Statistic title="Yesterday:" value="1,409" />
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

                <ProCard layout="center">
 //                   <StatisticCard
 //                       title="Retention"
 //                       chart={
 //                           <ReactCohortGraph
 //                               data={DATA}
 //                               showHeaderValues
 //                               shadeColor="#1890ff"
 //                           />
//                      }
                    />
                </ProCard>
            </ProCard>

        </ProCard.Group>
    )
}

export default Growth