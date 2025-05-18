import { Container, Row, Col } from 'react-bootstrap'
import './footer.css'
import Logo from '../../assets/Logo.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
    return (
        <section id='Footer'>
            <Container>
                <Row>
                    <Col lg={{span:5}}>
                        <div className="">
                            <img src={Logo} alt="" />
                            <div className="paraggx">
                                <p>We are always open to discuss your project <br /> and improve your online presence.</p>
                            </div>
                        </div>
                        <div className="mainftl">
                            <div className="ftl1">
                                <h3>Email me at</h3>
                                <p>contact@website.com</p>
                            </div>
                            <div className="ftl2">
                                <h3>Call us</h3>
                                <p>0927 6277 28525</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={{span:3,offset:1}}>
                    <div className="exeh3">
                        <h3>Lets Talk!</h3>
                    </div>
                    <div className="icfit">
                        <a href="#"><FaFacebook className='fttp' /></a>
                        <a href="#"><FaInstagram className='fttp' /></a>
                        <a href="#"><FaTwitter className='fttp' /></a>
                        <a href="#"><CiLinkedin className='fttp' /></a>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Footer