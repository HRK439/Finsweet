import './logo6.css'
import { Container, Row, Col } from 'react-bootstrap'
import ln1 from '../../assets/ln1.png'
import ln2 from '../../assets/ln2.png'
import ln3 from '../../assets/ln3.png'
import ln4 from '../../assets/ln4.png'
import ln5 from '../../assets/ln5.png'
import ln6 from '../../assets/ln6.png'
const Logo6 = () => {
    return (
        <section id='l0goy6'>
            <Container>
                <Row className='Logo6s'>
                    <Col lg={{ span: 2 }}>
                        <div className="">
                            <a href="#"><img src={ln1} alt="" /></a>
                        </div>
                    </Col>
                    <Col lg={{ span: 2 }}>
                        <div className="">
                            <a href="#"><img src={ln2} alt="" /></a>
                        </div>
                    </Col>
                    <Col lg={{ span: 2 }}>
                        <div className="">
                            <a href="#"><img src={ln3} alt="" /></a>
                        </div>
                    </Col>
                    <Col lg={{ span: 2 }}>
                        <div className="">
                            <a href="#"><img src={ln4} alt="" /></a>
                        </div>
                    </Col>
                    <Col lg={{ span: 2 }}>
                        <div className="">
                            <a href="#"><img src={ln5} alt="" /></a>
                        </div>
                    </Col>
                    <Col lg={{ span: 2 }}>
                        <div className="">
                            <a href="#"><img src={ln6} alt="" /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Logo6