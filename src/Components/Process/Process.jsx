import PcddReusable from '../Reusable/PcddReusable'
import './process.css'
import { Container,Row,Col } from 'react-bootstrap'



const Process = () => {
  return (
    <section id='Process'>
        <Container>
            <Row>
                <Col lg={{span:6,offset:3}}>
                <div className="text-center tcproc">
                    <h3>The process we follow</h3>
                </div>
                </Col>
            </Row>
            <Row>
                <PcddReusable title='Planning' para='Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'/>
                <PcddReusable title='Conception' para='Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'/>
                <PcddReusable title='Design' para='Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'/>
                <PcddReusable title='Development' para='Lorem ipsum dolor sit amet, consetetur sadipscing elitr.'/>
            </Row>
        </Container>
    </section>
  )
}

export default Process