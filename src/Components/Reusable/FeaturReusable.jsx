import { Col } from 'react-bootstrap'
const FeaturReusable = ({ icn, para, hHT }) => {
    return (
        <Col lg={{ span: 4 }}>
            <div className="orb">
                <p className='peopleic'>{icn}</p>
                <div className="febxm">
                    <h3>{hHT}</h3>
                    <p>{para}</p>
                </div>
            </div>
        </Col>
    )
}

export default FeaturReusable