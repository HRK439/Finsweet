import { Col, Container, Row } from 'react-bootstrap'
import './ourwork.css'
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import card from '../../assets/Card.png'
import card2 from '../../assets/card2.png'
import card3 from '../../assets/card3.png'

const OurWork = () => {
  return (
    <section id='Ourwork'>
        <Container>
            <Row>
                <Col className='owh' lg={{span:5}}>
                <h3>View our projects</h3>
                </Col>
                <Col className='owa' lg={{span:2,offset:5}}>
                <a href="#">View More <FaLongArrowAltRight /></a>
                </Col>
            </Row>
            <Row>
                <Col lg={{span:8}}>
                <div className="Bghov">
                    <div className="crdim">
                        <img src={card} alt="" />
                    <div className="cbh">
                        <h3>Workhub office Webflow <br /> Webflow Design</h3>
                        <div className="ank">
                            <a href="#">View project <FaArrowRight /></a>
                        </div>
                    </div>
                    </div>
                </div>
                </Col>
                <Col lg={{span:4}}>
                <div className="ssfst">
                    <div className="simg">
                        <img src={card2} alt="" />
                        <div className="shov">
                            <a href="#">View portfolio <FaArrowRight /></a>
                        </div>
                    </div>
                </div>
                <div className="ssfs2t">
                    <div className="ssfst">
                    <div className="simg">
                        <img src={card3} alt="" />
                        <div className="shov">
                            <a href="#">View portfolio <FaArrowRight /></a>
                        </div>
                    </div>
                </div>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default OurWork