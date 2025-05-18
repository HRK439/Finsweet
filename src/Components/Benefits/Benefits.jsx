import { Col, Container, Row } from 'react-bootstrap'
import './benefits.css'
import BenefitsReusable from '../Reusable/BenefitsReusable';
import { GiStabbedNote } from "react-icons/gi";
import { FaPencilRuler } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import ln1 from '../../assets/ln1.png'
import ln2 from '../../assets/ln2.png'
import ln3 from '../../assets/ln3.png'
import ln4 from '../../assets/ln4.png'
import ln5 from '../../assets/ln5.png'
import ln6 from '../../assets/ln6.png'

const Benefits = () => {
  return (
    <section id='Benefits'>
        <Container>
            <Row>
                <Col lg={{span:6,offset:3}}>
                <div className="FBR">
                    <h3>The benefits of working with us</h3>
                </div>
                </Col>
            </Row>
            <Row>
                <BenefitsReusable iconss={<GiStabbedNote className="iconBenefits" />} title='Customize with ease' para='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.' />
                <BenefitsReusable iconss={<FaPencilRuler className="iconBenefits" />} title='Perfectly Responsive' para='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.' />
                <BenefitsReusable iconss={<IoIosPeople className="iconBenefits" />} title='Friendly Support' para='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.' />
            </Row>
            <Row className='grologo6'>
                <Col lg={{span:2}}>
                <div className="">
                    <img src={ln1} alt="" />
                </div>
                </Col>
                <Col lg={{span:2}}>
                <div className="">
                    <img src={ln2} alt="" />
                </div>
                </Col>
                <Col lg={{span:2}}>
                <div className="">
                    <img src={ln3} alt="" />
                </div>
                </Col>
                <Col lg={{span:2}}>
                <div className="">
                    <img src={ln4} alt="" />
                </div>
                </Col>
                <Col lg={{span:2}}>
                <div className="">
                    <img src={ln5} alt="" />
                </div>
                </Col>
                <Col lg={{span:2}}>
                <div className="">
                    <img src={ln6} alt="" />
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Benefits