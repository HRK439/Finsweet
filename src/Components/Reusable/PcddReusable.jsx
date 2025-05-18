
import { GoDotFill } from "react-icons/go";
import { RxBorderDotted } from "react-icons/rx";
import { Col } from 'react-bootstrap'
const PcddReusable = ({title,para}) => {
    return (
        <Col lg={{ span: 3 }}>
            <div className="mainDots">
                <div className="BgDots">
                    <GoDotFill className='BDots' />
                </div>
                <div className="SmDots">
                    <RxBorderDotted className='SDots' />
                    <RxBorderDotted className='SDots' />
                    <RxBorderDotted className='SDots' />
                    <RxBorderDotted className='SDots' />
                    <RxBorderDotted className='SDots' />

                </div>
            </div>
            <div className="txtDots">
                <h3>{title}</h3>
                <p>{para}</p>
            </div>

        </Col>
    )
}

export default PcddReusable