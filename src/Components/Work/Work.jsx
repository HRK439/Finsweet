import './work.css'
import { Container, Row,Col } from 'react-bootstrap'
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import WorkReusable from '../Reusable/WorkReusable';
import work1 from "../../assets/pointer1.png"
import work2 from "../../assets/pointer2.png"
import work3 from "../../assets/pointer3.png"
import work4 from "../../assets/pointer4.png"
const Work = () => {
  return (
    <>
    <section id='work'>
        <Container>
            <Row>
                <Col className='work_hxpa' lg={{span:4}}>
                <h3>How we work</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                <div className="work_a">
                    <a href="#">Get in touch with us <HiOutlineArrowSmallRight /></a>
                </div>
                </Col>
                <Col className='work_imxhp' lg={{span:7, offset:1}}>
                <Row>
                    <WorkReusable gggg={work1} Hh3='Strategy' title='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .' />
                    <WorkReusable gggg={work2} Hh3='Wireframing' title='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .' />
                    <WorkReusable gggg={work3} Hh3='Design' title='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .' />
                    <WorkReusable gggg={work4} Hh3='Development' title='Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .' />
                </Row>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Work