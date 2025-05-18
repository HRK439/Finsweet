import { Container, Row,Col } from 'react-bootstrap'
import './banner.css'
import illustration from '../../assets/Illustration.png'
import { HiArrowSmallRight } from "react-icons/hi2";


const Banner = () => {
  return (
    <>
    <section id='banner'>
        <Container>
            <Row>
                <Col lg={{span:6}}>
                <div className="ban_hxp">
                    <h3>Building stellar websites for early startups</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <div className="btn_aro">
                      <a className='btn_aro1' href="#">View our work</a>
                      <a className='btn_aro2' href="#">View Pricing <HiArrowSmallRight /></a>
                    </div>
                </div>
                </Col>
                <Col lg={{span:6}}>
                <div className="ban_hxp">
                    <img src={illustration} alt="" />
                </div>
                </Col>
            </Row>
        </Container>
    </section>
    
    </>
  )
}

export default Banner