import { Col, Container, Row } from 'react-bootstrap'
import './ourteam.css'
import mann1 from '../../assets/mannum1.png'
import mann2 from '../../assets/mannum2.png'
import mann3 from '../../assets/mannum3.png'
import mann4 from '../../assets/mannum4.png'
import OurWorkReusable from '../Reusable/OurWorkReusable';

const OurTeam = () => {
    return (
        <section id='OurTeam'>
            <Container>
                <Row>
                    <Col lg={{ span: 4, offset: 4 }}>
                        <div className="OTh">
                            <h3>Meet our team</h3>
                        </div>
                    </Col>
                </Row>
                <Row className='ortjs'>
                    <OurWorkReusable  imgss={mann1} name='John Smith' work='CEO'/>
                    <OurWorkReusable  imgss={mann2} name='Simon Adams' work='CTO'/>
                    <OurWorkReusable  imgss={mann3} name='Paul Jones' work='Design Lead'/>
                    <OurWorkReusable  imgss={mann4} name='Sara Hardin' work='Project Manager'/>

                   
                </Row>
            </Container>
        </section>
    )
}

export default OurTeam