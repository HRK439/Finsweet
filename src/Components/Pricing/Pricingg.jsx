import { Col, Container, Row,Button } from 'react-bootstrap'
import './pricingg.css'
import BOXofReusable from '../Reusable/BOXofReusable';
import { BiSolidRightArrow } from "react-icons/bi";
const Pricingg = () => {
  return (
    <>
    <section id='Pricingg'>
        <Container>
            <Row>
                <Col lg={{span:6,offset:3}}>
                <div className="text-center prggg">
                  <h3>Our Pricing Plans</h3>
                <p>When you’re ready to go beyond prototyping in Figma, Webflow is ready to help you bring your designs to life — without coding them.</p>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
    <section id='MLBXSECT'>
      <Container>
        <Row>


          <BOXofReusable money='$299' mnytext='Per Design' htext='Landing Page' ptext='When you’re ready to go <br /> beyond prototyping in Figma,' iconp={<BiSolidRightArrow className='PRICOn' />} iconpra='All limited links' iconp2 ={<BiSolidRightArrow className='PRICOnn' />} iconpra2='Optimize hashtags' lstbtn={<Button className='sbBTN' >Get started</Button>} />


           


          {/* <Col lg={{span:4}}>
          <div className="MainLongbx">
            <div className="MLBp">
              <h3>$299</h3>
              <a href="#">Per Design</a>
            </div>
            <div className="LPMLB">
              <h3>Landing Page </h3>
              <p>When you’re ready to go <br /> beyond prototyping in Figma, </p>
            </div>
            <div className="PARAICON">
              <BiSolidRightArrow className='PRICOn' />
              <p>All limited links</p>
            </div>
            <div className="PARAICON">
              <BiSolidRightArrow className='PRICOn' />
              <p>Own analytics platform</p>
            </div>
            <div className="PARAICON">
              <BiSolidRightArrow className='PRICOn' />
              <p>Chat support</p>
            </div>
            <div className="PARAICON">
              <BiSolidRightArrow className='PRICOnn' />
              <p>Optimize hashtags</p>
            </div>
            <div className="PARAICON">
              <BiSolidRightArrow className='PRICOnn' />
              <p>Unlimited users</p>
            </div>
            <div className="subBtn">
              <Button className='sbBTN' >Get started</Button>
            </div>


          </div>
          </Col> */}
        </Row>
      </Container>
    </section>
    
    </>
  )
}

export default Pricingg