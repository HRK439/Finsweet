import './about_hero.css'
import { Col, Container, Row } from 'react-bootstrap'
import group_fppp from '../../assets/group-fpp.png'
const About_hero = () => {
    return (
        <section id='About_hero'>
            <Container>
                <Row>
                    <Col lg={{ span: 5 }}>
                        <div className="ahmain">
                            <h4>About us</h4>
                            <h3>Our designs solve problems</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                    </Col>
                    <Col lg={{span:5,offset:2}}>
                    <div className="imgspc">
                        <img src={group_fppp} alt="" />
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About_hero