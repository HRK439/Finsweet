import { Container,Row,Col } from 'react-bootstrap'
import './testimonials.css'
import buri from '../../assets/buri.png'
const Testimonials = () => {
  return (
    <section id='Testimonials'>
        <Container>
            <Row>
                <Col className='hptest' lg={{span:3}}>
                <h3>What our clients say about us</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                </Col>
                <Col className='gpxtt' lg={{span:8,offset:1}}>
                <h3>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h3>
                <div className="imhptst">
                    <img src={buri} alt="" />
                    <div className="hptst">
                        <h4>Jenny Wilson</h4>
                        <p>Vice President</p>
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Testimonials