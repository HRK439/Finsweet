import { Container, Row, Col, Button } from 'react-bootstrap'
import './featuressection.css'
import illust from '../../assets/respnd.png'
const FeaturesSection = () => {
    return (
        <section id='Featurs'>
            <Container>
                <Row>
                    <Col lg={{ span: 5 }}>
                        <div className="FHS">
                            <h3>All the features you need</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <Button className='FTSBK' variant="warning">View Pricing</Button>
                        </div>
                    </Col>
                    <Col lg={{span:6,offset:1}}>
                    <img src={illust} alt="" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default FeaturesSection