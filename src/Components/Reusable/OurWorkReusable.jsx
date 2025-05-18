import { Col} from 'react-bootstrap'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
const OurWorkReusable = ({imgss,name,work}) => {
    return (
        <Col lg={{ span: 3 }}>
            <div className="imgOT">
                <div className="imgotx">
                    <a href="#">
                        <img src={imgss} alt="" />
                    </a>
                    <div className="hoverimgOT">
                        <div className="mainiconsg">
                            <div className="orbouttt">
                                <FaFacebook className='icotm' />
                                <FaTwitter className='icotm' />
                                <FaLinkedin className='icotm' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="txtOT">
                    <h3>{name}</h3>
                    <p>{work}</p>
                </div>
            </div>
        </Col>
    )
}

export default OurWorkReusable