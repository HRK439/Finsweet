import './contactform.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import woman from '../../assets/woman-rr.png'
import { FaArrowRightLong } from "react-icons/fa6";

const ContactForm = () => {
    return (
        <section id='ContactForm'>
            <Container>
                <Row>
                    <Col className='p-0' lg={{ span: 6 }}>
                        <div className="cfimg">
                            <img src={woman} alt="" />
                            <div className="cfhp">
                                <div className="forpdhp">
                                    <h3>Building stellar <br /> websites  for <br /> early startups</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua ut enim.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className='p-0' lg={{ span: 6 }}>
                        <div className="maincfinput">
                            <div className="inmputr">
                                <h3>Send inquiry</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut labore.</p>

                            </div>
                            <div className="inputcf">
                                <form action="">
                                    <input type="text" placeholder='Your Name' />
                                    <input type="text" placeholder='Email' />
                                    <input type="text" placeholder='Paste your Figma design URL' />
                                </form>
                                <div className="cfbtfaf">
                                    <Button variant="warning">Warning</Button>
                                    <div className="cfbtfafaa">
                                        <a href="#">Get in touch with us <FaArrowRightLong /></a>
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

export default ContactForm