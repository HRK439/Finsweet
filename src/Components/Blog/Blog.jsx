import { Container, Row, Col, } from 'react-bootstrap'
import './blog.css'
import eee1 from '../../assets/eee1.png'
import eee2 from '../../assets/eee2.png'
import eee3 from '../../assets/eee3.png'
import BlogReusable from '../Reusable/BlogReusable'

const Blog = () => {
    return (
        <section id='Blog'>
            <Container>
                <Row>
                    <Col lg={{ span: 3 }}>
                        <h3>Our blog</h3>
                    </Col>
                </Row>
                <Row>
                    <BlogReusable immg={eee1} date='19 Jan 2022' hpart='How one Webflow user grew his single person consultancy from $0-100K in 14 months' para='See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract' ancor='Read More' />
                    <BlogReusable immg={eee2} date='19 Jan 2022' hpart='How one Webflow user grew his single person consultancy from $0-100K in 14 months' para='See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract' ancor='Read More' />
                    <BlogReusable immg={eee3} date='19 Jan 2022' hpart='How one Webflow user grew his single person consultancy from $0-100K in 14 months' para='See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract' ancor='Read More' />
                </Row>
            </Container>
        </section>
    )
}

export default Blog