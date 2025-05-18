import { Col } from 'react-bootstrap'
 
const WorkReusable = ({gggg,title,Hh3}) => {
    return (
        <Col lg={{ span: 4, offset: 1 }}>
            <img src={gggg} alt="" />
            <h3>{Hh3}</h3>
            <p>{title}</p>
        </Col>
    )
}

export default WorkReusable