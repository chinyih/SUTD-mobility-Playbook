import { Link } from "react-router-dom"
import { Layout, Col, Row, Image, Space, Typography, Button } from 'antd'

import 'antd/dist/antd.min.css';
import './Public.css';
// import qiming from '../static/qiming.svg'
// import ef from '../static/ef.svg'

const { Content, Footer } = Layout
const { Title } = Typography
const Public = () => {
    const content =
        <Layout style={{ backgroundColor: "white" }}>
            <Content style={{ marginTop: '80px' }}>
                <Row>
                    <Col xs={1} sm={1} md={2} lg={2} xl={3} xxl={4} />
                    <Col xs={22} sm={22} md={20} lg={20} xl={18} xxl={16}>
                        <Row gutter={[0, 16]}>
                            <Space align='center' size="middle" className="plogo">
                                <Image preview={false} src={require('../static/playbook.png')} width={60} />
                                <span style={{
                                    fontSize: '40px', fontFamily: 'Avenir, Helvetica, Arial, sans-serif', fontWeight: 'bold'
                                }}>Playbook 2.0: A New Beginning</span>
                            </Space>
                        </Row>

                        <Row className='banner'>
                            <Title level={1}>Web3-native KPI Dashboards</Title>
                            <p style={{
                                marginTop: '25px', fontSize: '21px', fontFamily: 'Avenir, Helvetica, Arial, sans-serif', fontWeight: 'normal'
                            }}>
                                Track KPIs and accelerate growth with <span style={{color: "#d61f47"}}>Playbook</span>.
                                
                                Dive deep in Tokenomics and Community with no-code configuration to empower data-driven decisions.
                            </p>
                            {/* <Space size="middle">
                                <span style={{color: "darkgray"}} >Backed by</span>
                                <Image preview={false} width={38} src={ef} />
                            </Space> */}

                        </Row>
                        <Row className='cta'>
                            <Space size="large">
                                <Button type="primary" size="large" danger style={{ width: "150px", height: "50px", borderRadius: '10px', backgroundColor: "#d61f47", fontSize: "18px" }}>
                                    <a href="https://docs.google.com/forms/d/1AT-rkF7Jp0tPoTl6pjQVTeLSkDrkdDmq1SxA3EIc8j0/edit?usp=drive_open">Join Pilot</a>
                                </Button>
                                <Link to="/auth/login" style={{ fontSize: '15px', color: 'darkred' }}>Login</Link>
                            </Space>
                        </Row>
                        {/* <Divider orientation="center" >
                            Pilots
                        </Divider>
                        <Row className='pilot' justify="center" align="middle" gutter={[24, 24]}>
                            <Col xs={6} lg={3} align='center'>
                                <Image preview={false} className="pilot-logo" src={require('../static/Logo_Maker_Black.png')} style={{ maxWidth: '150px' }} />
                            </Col>
                            <Col xs={6} lg={3} align='center'>
                                <Image preview={false} className="pilot-logo" src={require('../static/alpha_logo_dark.png')} style={{ maxWidth: '150px' }} />
                            </Col>
                            <Col xs={6} lg={3} align='center'>
                                <Image preview={false} className="pilot-logo" src={require('../static/hawksight-logo.png')} style={{ maxWidth: '150px' }} />
                            </Col>

                            <Col xs={6} lg={3} align='center'>
                                <Image preview={false} className="pilot-logo" src={qiming} style={{ maxWidth: '150px' }} />
                            </Col>
                            <Col xs={6} lg={3} align='center'>
                                <Image preview={false} className="pilot-logo" src={require('../static/bff_logo.png')} style={{ maxWidth: '150px' }} />
                            </Col>
                            <Col xs={6} lg={3} align='center'>
                                <Image preview={false} className="pilot-logo" src={require('../static/sutd_logo.png')} style={{ maxWidth: '150px' }} />
                            </Col>
                            <Col xs={6} lg={3} align='center'>
                                <Image preview={false} className="pilot-logo" src={require('../static/slash.png')} style={{ filter: "grayscale(60%)", marginTop: "-5px", maxWidth: '120px' }} />
                            </Col>
                            <Col xs={6} lg={3} align='center'>
                                <Image preview={false} className="pilot-logo" src={require('../static/REAP_logo_300.png')} style={{ maxWidth: '150px' }} />
                            </Col>
                        </Row> */}
                        <Row style={{height:"150px"}} />
                    </Col>
                </Row>

            </Content>
            <Footer style={{ textAlign: 'center', backgroundColor: 'black', color: 'white', position: 'fixed', bottom: 0, width: "100%", paddingTop: '12px', paddingBottom: '12px' }}>
                Playbook © 2022
            </Footer>

        </Layout>

    return content

}
export default Public