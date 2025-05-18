import { Col, Container, Row } from 'react-bootstrap'
import './whoweare.css'
import sir from '../../assets/sir444.png'

const Whoweare = () => {
  return (
    <section id='whoweare'>
      <Container id='contwwr'>
        <Row>
          <Col lg={{ span: 5, offset: 1 }}>
            <div className="wwahp">
              <h4>Who we are</h4>
              <h3>Goal focussed</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </Col>
          <Col lg={{span:5}}>
          <div className="wwahp2nd">
            <h3>Continuous improvement</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          </Col>
        </Row>
        <Row>
          <Col lg={{span:12}}>
          <div className="gtimg">
            <img src={sir} alt="" />
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Whoweare