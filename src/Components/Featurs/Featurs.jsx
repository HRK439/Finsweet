import './featurs.css'
import { Container, Row, Col } from 'react-bootstrap'
import { IoIosPeople } from "react-icons/io";
import FeaturReusable from '../Reusable/FeaturReusable';
import { FaCheckCircle } from "react-icons/fa";
import { FaPencilRuler } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { MdTimer } from "react-icons/md";
import { MdNoteAlt } from "react-icons/md";


const Featurs = () => {
  return (
    <section id='Featurs'>
        <Container>
            <Row>
                <Col className='text-center featrph' lg={{span:6, offset:3}}>
                <p>Features</p>
                <h3>Design that solves problems, one product at a time</h3>
                </Col>
            </Row>
            <Row className='fetup justify-content-space-between'>
                <FeaturReusable icn={<IoIosPeople />} hHT='Uses Client First' para='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. '/>
                <FeaturReusable icn={<FaCheckCircle />} hHT='Two Free Revision Round' para='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.'/>
                <FeaturReusable icn={<FaPencilRuler />} hHT='Template Customization' para='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.'/>
                <FeaturReusable icn={<FaComments />} hHT='24/7 Support' para='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.'/>
                <FeaturReusable icn={<MdTimer />} hHT='Quick Delivery' para='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.'/>
                <FeaturReusable icn={<MdNoteAlt />} hHT='Hands-on approach' para='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.'/>
            </Row>
        </Container>
    </section>
  )
}

export default Featurs