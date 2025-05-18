import {  Col,Card } from 'react-bootstrap'
import { FaArrowRightLong } from "react-icons/fa6";
const BlogReusable = ({immg,date,hpart,para}) => {
    return (
        <Col className='crdpd' lg={{ span: 4 }}>
            <Card>
                <Card.Img variant="top" src={immg} />
                <Card.Body>
                    <p>{date}</p>
                    <Card.Title>{hpart}</Card.Title>
                    <Card.Text>{para}</Card.Text>
                    <div className="crancd">
                        <a href="#">Read More <FaArrowRightLong /></a>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default BlogReusable