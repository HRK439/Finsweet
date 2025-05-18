import './footer.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const FooterLST = () => {
    return (
        <section id='ftlstor'>
            <Container>
                <Row>
                    <Col lg={{ span: 4 }}>
                        <h4>Copyright 2022, Finsweet.com</h4>
                    </Col>
                    <Col lg={{ span: 4,offset:4 }}>
                        <Link className='mmg' to='/'>Home</Link>
                        <Link className='mmg' to='/About'>About</Link>
                        <Link className='mmg' to='/Features'>Features</Link>
                        <Link className='mmg' to='/Pricing'>Pricing</Link>
                        <Link className='mmg' to='/'>FAQ</Link>
                        <Link className='mmg' to='/'>Blog</Link>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default FooterLST