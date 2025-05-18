import { Container,Row,Col } from 'react-bootstrap'
import './omaov.css'
import man from '../../assets/manofstil.png'
import family from '../../assets/familyfc.png'
const OMaOV = () => {
  return (
    <section id='Omaov'>
        <Container>
            <Row className='romaov'>
                <Col lg={{span:6}}>
                <div className="Dhhp">
                    <h4>Our Mission </h4>
                    <h3>Inspire, Innovate, Share</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                </Col>
                <Col lg={{span:5,offset:1}}>
                <img src={man} alt="" />
                </Col>
            </Row>
            <Row className='romaov'>
                <Col lg={{span:5}}>
                <img src={family} alt="" />
                </Col>
                <Col lg={{span:6,offset:1}}>
                <div className="Dhhp">
                    <h4>Our Vision </h4>
                    <h3>Laser focus</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default OMaOV