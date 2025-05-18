import { Col, Container, Row } from 'react-bootstrap'
import './bestinclass.css'
import mtred from '../../assets/MTred.png'
import reding from '../../assets/redingbock.png'
import colin from '../../assets/colling.png'
import video from '../../assets/videovib.png'
const BestinClass = () => {
    return (
        <>
            <section id='CBest'>
            <Container>
                <Row className='BCrow'>
                    <Col lg={{ span: 6 }}>
                        <div className="RowBCg">
                            <h4>Use Client-first</h4>
                        <h3>Top agencies and freelancers around the world use
                            Client-first </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                        </div>
                    </Col>
                    <Col lg={{ span: 5 }}>
                        <a href="#">
                            <img src={mtred} alt="" />
                        </a>
                    </Col>
                </Row>
            </Container>
        </section>
        <section id='sectp2'>
            <Container>
                <Row className='BCrow'>
                    <Col lg={{ span: 5 }}>
                        <a href="#">
                            <img src={reding} alt="" />
                        </a>
                    </Col>
                    <Col lg={{ span:6,offset:1 }}>
                        <div className="RowBCg">
                            <h4>Free Revision Rounds</h4>
                        <h3>Get free Revisions and one week of free maintenance </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <section id='CBest'>
            <Container>
                <Row className='BCrow'>
                    <Col lg={{ span: 6 }}>
                        <div className="RowBCg">
                            <h4>24/7 Support</h4>
                        <h3>Working with us, you will be getting 24/7 priority support </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                        </div>
                    </Col>
                    <Col lg={{ span: 5 }}>
                        <a href="#">
                            <img src={colin} alt="" />
                        </a>
                    </Col>
                </Row>
            </Container>
        </section>
        <section id='sectp3'>
            <Container>
                <Row className='BCrow'>
                    <Col lg={{ span: 5 }}>
                        <a href="#">
                            <img src={video} alt="" />
                        </a>
                    </Col>
                    <Col lg={{ span:6,offset:1 }}>
                        <div className="RowBCg">
                            <h4>Quick Delivery</h4>
                        <h3>Guranteed 1 week delivery for standard five pager website</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}

export default BestinClass